# MS3

YUM is a colourful recipe book website built with Python, Flask, MongoDB, JavaScript, CSS, Bootstrap and HTML. It includes CRUD functionality (Create, Read, Update Delete) and is designed to be responsive across multiple devices. YUM allows the user to browse recipes created by other users aswell as creating their own.

![Multi-Device MockUp](documentation/images/multi_device_mockup.png)

## User Experience

### User Journey

1. The user begins at the Homepage and is prompted to either register so they can create a recipe. 
1. Or they can take a look at 3 of the most recent recipes created by other users.

![Homepage](documentation/user_journey/uj_homepage.png)

1. Upon clicking 'Register' the user can then create an account.

![Register](documentation/user_journey/uj_register.png)

1. After making an account they are automatically logged in and taken to their recipe page.
1. If they already have recipes then those will displayed.
1. If not, then the user is prompted to create a recipe.

![MyRecipes](documentation/user_journey/uj_myrecipes.png)

1. If the user then decides to create a recipe they can click the create recipe tab in the navbar.
1. This brings them to the creation page. This Dynamic form allows the user to add ingredients and instructions dynamically.
1. Once the recipe is created it will appear in their 'My Recipes' tab.
1. They can edit and delete any recipe that they make.

![Creation](documentation/user_journey/uj_create.png)

1. If the user wishes to either search for their own recipe or for something another user has created they can do so from the search page. This is reached by clicking 'Search Recipes' in the navbar.

![Search](documentation/user_journey/uj_search.png)

### User Stories

- First Time Visitor
    - When I visit this site I want to understand how I can interact with the website.
    - I want to find a recipe to cook.
    - I would also consider making an account.
- Returning Visitor
    - As a returning visitor I may be searching for the same recipe.
    - I have returned to register an account so that I can make create a recipe.
    - I may be logging in to create my own recipe.
    - I just want to cook the meal I prepared last time I visited.
- Frequent User
    - As a frequent user I would be looking to create multiple recipes.
    - I may also be searching through other users recipes to find inspiration or a recipe to cook.

### Design

- Colour Scheme
    - I decided to take inspiration from 'Narutomaki' which is a topping used on ramen. This led me towards a pink and white color scheme. I opted to also use a blue as it was one of the triadic colours from the pink I had sampled from a picture of narutomaki.
- Typography
    - I used Ubuntu and Fira Sans. These were chosen due to their softness which complimented the logo.
- Imagery
    - In keeping with the Narutomaki theme I used this in the logo and some icons. The images present on the website are those provided only by the users.
- Wireframes
    - I created wireframes for the basic ideas I had and then added more details as I went along.
        - []()
        - []()
        - []()
        - []()

## Features

- The website should be responsive across different devices.
- The website allows the user to find and read recipes created by themselves or by other users.

### Taking The Project Further

If I were taking the project further there are some features I believe would the website would benefit from:
- Having a favorites section so users can favorite recipes created by themselves or other users.
- More complete sharing system.
- Possibly a comment section for recipes.

## Technologies

### Languages

- [HTML5]()
- [CSS3]()
- [JS]()
- [Python]()

### Frameworks, Libraries & Programs Used

1. [Bootstrap4.5.2](https://getbootstrap.com/):

1. [Gitpod](https://www.gitpod.io/):

1. [Github](https://github.com/):

1. [Google Fonts](https://fonts.google.com/?query=Oswa):

1. [Font Awesome](https://fontawesome.com/):

1. [Balsamiq](https://balsamiq.com/):


## Testing 
Testing information can be found here: [TESTING](TESTING.md)

## Deployment, Forking, Cloning

### Deployment to Heroku

##### Create Application

1. Navigate to Heroku.com and login.
1. Click on the "New" button in the top right of the page and select "Create new app."
1. Enter the name of the app, select the region and click "Create app."

##### Connect to GitHub Repository

1. Click the deploy tab and select "GitHub - Connect to GitHub."
1. Under the section "Search for a repository to connect to" enter the repository name in the designated box.
1. Once the repo has been found, click the "Connect" button.

##### Setting Environment Variables

Click on the settings tab and then click "Reveal Config Vars" and add the following:
- key: IP, value: 0.0.0.0
- key: PORT, value: 5000
- key: MONGO_DBNAME. value: (Name of database you want to connect to)
- key: MONGO_URI, value: (Enter MongoURI which can be found by going to Clusters > Connect > Connect to your application and inputting the password and Database name)
- key: SECRET_KEY, value: (This is a unique secret key that was created by the developer)

##### Enable Automatic Deployment

1. Click on the Deploy tab
1. Under the "Automatic Deploy" section, select the branch from GitHub that you want to deploy the app from and then click Enable Automatic Deploys

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on a GitHub account to view and/or make changes without affecting the original repository by using the following steps:

- Log in to [GitHub](https://github.com/) and locate the GitHub Repository.
- At the top of the Repository just above the "Settings" button on the menu, locate the "Fork" button.
- Click the button and now you should have a copy of the original repository in your GitHub account.

### Making a Local Clone

- Log in to [GitHub](https://github.com/) and locate the GitHub Repository.
- Under the repository name, click "Clone or download".
- To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
- Open Git Bash
- Change the current working directory to the location that you want the cloned directory to be made.
- Type `git clone`, and then paste the URL you copied earlier.

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) for a more detailed explanation of the cloning process.


## Credits

### Code & Media

//https://www.youtube.com/watch?v=MLBLsxcB3Dc

The space to share any resources I have used to help me build this project.

1. [Bootstrap4.5.2](https://getbootstrap.com/): Bootstrap Library used for some basic styling.

1. [Favicon](https://www.favicon.cc/?): To create favicon.

1. [Multi Media Mockup](https://techsini.com/multi-mockup/): For the README.

### Acknowledgements

- My Mentor Aaron Sinnott for the helpful feedback.