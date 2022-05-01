# 14 Model-View-Controller (MVC): That Blog

## Description
This is a general blog that allows users to log on and make blog posts. Users can also see the posts of other users who use the blog on the homepage. Their individual posts are available to them on their profile page. In the future, other users will be able to respond and make comments on the posts on the homepage as well.

## Deployed Site: https://that-blog.herokuapp.com/

## Table of Contents
[Screenshots](#screenshots)

[Installation](#installation)

[Usage](#usage)

[Contact Me](#contactme)

## Screenshots
![screenshot](./assets/Screenshot%202022-04-30%20165210.jpg)
![screenshot](./assets/Screenshot%202022-04-30%20165341.jpg)
![screenshot](./assets/Screenshot%202022-04-30%20165514.jpg)

## Installation
* Clone the repository and npm i in your bash terminal.

* In your terminal, log on to my sequel with your user name and password, then SOURCE ./db/schema.sql, then USE blog_db

* In the file directory in VS Code, rename .env.EXAMPLE to .env and put in the database name: blog_db and the password.

* In the terminal, npm run seed, then npm start.

* The application is running on http://localhost:3001.

    
## Usage
From the deployed page, you can click on Login or Sign Up to access the blog. When you click on Homepage (logged in or out), you will see all of the blog posts created by multiple users of the site. When a user logs in, they are directed to their profile page (refresh if the homepage pops up instead). On their profile page, a user can see the blog posts they have written and click the name of the post to be directed to a page with just that blog post on it. The user can delete blog posts from their profile page. In the future, users will be able to comment on other people's posts on the homepage when logged in and be able to view the comments on their own posts when they click on the post from their profile page. Users may click Logout to be logged out.

## Dependencies, Libraries, and Tools
- Materialize
- bcrypt
- sequelize
- express
- handlebars
- MySQL
- node.js

## Contact Me

**Lindsey Choi** 

    email: lindsey.e.choi@gmail.com
        
    github: https://github.com/lindseychoi
  
