import os
from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for)
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
if os.path.exists("env.py"):
    import env


app = Flask(__name__)

app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")

mongo = PyMongo(app)


@app.errorhandler(403)
def error_page_forbidden(e):
    """Forbidden error handler

    Render '403' template for a forbidden page error.


    Returns:
        403 template
    """
    return render_template("403.html"), 403


@app.errorhandler(404)
def error_page_not_found(e):
    """Page not found error handler

    Render '404' template for a page not found error.

    Returns:
        404 template
    """
    return render_template("404.html"), 404


@app.errorhandler(500)
def error_internal_server(e):
    """Internal server error handler

    Display '500' template for an internal server error.

    Returns:
        500 template
    """
    return render_template("500.html"), 500


@app.route("/")
@app.route("/home_recipes")
def home_recipes():
    """Homepage

    Render homepage, greet user and show 3 of the most recent recipes.

    Returns:
        'home_recipe.html' with 3 of the most recent recipes
    """
    recipes = list(mongo.db.recipes.find().sort("_id", -1).limit(3))
    return render_template("home_recipes.html", recipes=recipes)


@app.route("/search_recipes")
def search_recipes():
    """Search recipes

    Render Search page displaying all recipes.

    Returns:
        'search_recipes.html' with all recipes sorted
    """
    recipes = list(mongo.db.recipes.find().sort("_id", -1))
    return render_template("search_recipes.html", recipes=recipes)


@app.route("/search", methods=["GET", "POST"])
def search():
    """Search Functionality

    Handles the search request.
    Mongo index set up across the name, description and ingredients.

    Returns:
        'search_recipes.html' template with the search results.
    """
    query = request.form.get("query")
    recipes = list(mongo.db.recipes.find({"$text": {"$search": query}}))
    return render_template("search_recipes.html", recipes=recipes)


@app.route("/register", methods=["GET", "POST"])
def register():
    """Registration

    Render registration page => user can register an account

    Returns:
        GET: The `register.html` file
        POST: Redirects to users `my_recipes` page
    """
    if request.method == "POST":
        # Does username exists in database?
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})

        if existing_user:
            flash("Username exists already")
            return redirect(url_for("register"))

        register = {
            "username": request.form.get("username").lower(),
            "password": generate_password_hash(request.form.get("password"))
        }
        # Insert new user into database
        mongo.db.users.insert_one(register)

        # put the new user into 'session' cookie
        session["user"] = request.form.get("username").lower()
        flash("Registration successful, Welome to YUM!")
        return redirect(url_for(
            "my_recipes", username=session["user"]))

    return render_template("register.html")


@app.route("/login", methods=["GET", "POST"])
def login():
    """Login

    Render login page so users can sign into their account

    Returns:
        GET: The `login.html` file
        POST: Redirects to users `my_recipes` page
    """
    if request.method == "POST":
        # Does username exists in database?
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})

        if existing_user:
            # ensure hashed password matches input
            if check_password_hash(
                    existing_user["password"], request.form.get("password")):
                session["user"] = request.form.get("username").lower()
                flash("Welcome, {}".format(request.form.get("username")))
                return redirect(url_for(
                    "my_recipes", username=session["user"]))
            else:
                # invalid password match
                flash("Incorrect Username and/or Password")
                return redirect(url_for("login"))

        else:
            # username doesn't exist
            flash("Incorrect Username and/or Password")
            return redirect(url_for("login"))

    return render_template("login.html")


@ app.route("/my_recipes/<username>", methods=["GET", "POST"])
def my_recipes(username):
    """Profile/My Recipes

    Get all the user's recipes and display them to user

    Returns:
        Renders the `pmy_recipes.html` file with the user's recipes
    """
    # grab the session user's username from database
    username = mongo.db.users.find_one(
        {"username": session["user"]})["username"]

    recipes = list(mongo.db.recipes.find({"created_by": session["user"]}))

    if session["user"]:
        return render_template(
            "my_recipes.html", username=username, recipes=recipes)

    return redirect(url_for("login"))


# ===== LOGOUT =====
@app.route("/logout")
def logout():
    """Logout

    Allow user to sign out by clearing the session

    Returns:
        Redirect to `login.html`
    """
    flash("You have been logged out")
    session.clear()
    return redirect(url_for("login"))


# ===== CREATE RECIPE =====
@app.route("/create_recipe", methods=["GET", "POST"])
def create_recipe():
    """Create Recipe

    Allow user to create a recipe using a dynamic form.

    Returns:
        GET: Renders the `create_recipe.html`
        POST: Redirect to `home_recipes.html`
    """
    if request.method == "POST":
        recipe = {
            "created_by": session["user"],
            "image_url": request.form.get("image_url"),
            "name": request.form.get("name"),
            "desc": request.form.get("desc"),
            "instructions": request.form.getlist("step"),
            "ingredients": request.form.getlist("ingredient"),
            "amount": request.form.getlist("amount"),
            "measure": request.form.getlist("measurement"),
        }
        mongo.db.recipes.insert_one(recipe)
        flash("Recipe Successfully Added")
        return redirect(url_for("home_recipes"))

    return render_template("create_recipe.html")


# ===== COOK =====
@app.route("/cook/<id>")
def cook(id):
    """View Recipe

    Gets an individual recipe selected by the user based on it's ID
    That recipe is then presented to the user

    Returns:
        Renders the `cook.html"
    """
    recipe = mongo.db.recipes.find_one({"_id": ObjectId(id)})

    i_list = recipe['ingredients']
    a_list = recipe['amount']
    m_list = recipe['measure']

    ingredients_zip = zip(i_list, a_list, m_list)
    ingredients = tuple(ingredients_zip)

    return render_template("cook.html", recipe=recipe, ingredients=ingredients)


# ===== EDIT =====
@app.route("/edit_recipe/<id>", methods=["GET", "POST"])
def edit_recipe(id):
    """Edit Recipe
    User is able edit recipes they created
    Recipe selected

    Returns:
        GET: Render `edit_recipe.html`
        POST: Recipe Updated
    """
    recipe = mongo.db.recipes.find_one({"_id": ObjectId(id)})

    if session["user"] != recipe['created_by']:
        return render_template("403.html")

    if request.method == "POST":
        edit = {
            "created_by": session["user"],
            "image_url": request.form.get("image_url"),
            "name": request.form.get("name"),
            "desc": request.form.get("desc"),
            "instructions": request.form.getlist("step"),
            "ingredients": request.form.getlist("ingredient"),
            "amount": request.form.getlist("amount"),
            "measure": request.form.getlist("measurement"),
        }
        mongo.db.recipes.update({"_id": ObjectId(id)}, edit)
        flash("Changes Successfully Saved")

    return render_template("edit_recipe.html", recipe=recipe)


@ app.route("/delete_recipe/<id>")
def delete_recipe(id):
    """Delete recipe

    Delete the chosen recipe based on its ID

    Returns:
        Redirects user to `home_recipes`
    """
    recipe = mongo.db.recipes.find_one({"_id": ObjectId(id)})

    if session["user"] != recipe['created_by']:
        return render_template("403.html")

    mongo.db.recipes.remove({"_id": ObjectId(id)})
    flash("Recipe Successfully Deleted")
    return redirect(url_for("home_recipes"))


# debug = false before submission
if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
