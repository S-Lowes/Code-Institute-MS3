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


@app.route("/")
@app.route("/get_recipes")
def get_recipes():
    """
    Render main page
    """
    recipes = list(mongo.db.recipes.find())
    return render_template("recipes.html", recipes=recipes)


# ===== REGISTER =====
@app.route("/register", methods=["GET", "POST"])
def register():
    """
    Render registration page => user can register an account
    """
    if request.method == "POST":
        # check if username exists in database
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
        # redirect home? ^

    return render_template("register.html")


# ===== LOGIN =====
@app.route("/login", methods=["GET", "POST"])
def login():
    """
    Render login page => users can login into their account
    """
    if request.method == "POST":
        # check if username exists in database
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
                # redirect home? ^
            else:
                # invalid password match
                flash("Incorrect Username and/or Password")
                return redirect(url_for("login"))

        else:
            # username doesn't exist
            flash("Incorrect Username and/or Password")
            return redirect(url_for("login"))

    return render_template("login.html")


# ===== MY RECIPES =====
@ app.route("/my_recipes/<username>", methods=["GET", "POST"])
def my_recipes(username):
    """
    Render user recipe page => think about what we want to do with this page
    """
    # grab the session user's username from database
    username = mongo.db.users.find_one(
        {"username": session["user"]})["username"]

    if session["user"]:
        return render_template("my_recipes.html", username=username)

    return redirect(url_for("login"))


@app.route("/logout")
def logout():
    """
    Allow user to sign out
    """
    # remove user from session cookie
    flash("You have been logged out")
    session.clear()
    return redirect(url_for("login"))


@app.route("/create_recipe", methods=["GET", "POST"])
def create_recipe():
    if request.method == "POST":
        recipe = {
            "created_by": session["user"],
            "image_url": request.form.get("image_url"),
            "name": request.form.get("name"),
            "desc": request.form.get("desc"),
            "instructions": request.form.getlist("step"),
            "ingredients": request.form.getlist("ingredient"),
            "amount": request.form.getlist("measurement"),
        }
        mongo.db.recipes.insert_one(recipe)
        flash("Task Successfully Added")
        return redirect(url_for("get_recipes"))

    return render_template("create_recipe.html")


# debug = false before submission
if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)


# Python zip() for the ing and the amount before presenting to user.
