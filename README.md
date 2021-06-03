# Project 2 - GAHOOT

#### Click here to see our Kahoot clone as a host [GAHOOT-host](https://gahoot-client.herokuapp.com/host-sign-in) or here to sign in as a player: [GAHOOT-player](https://gahoot-client.herokuapp.com/player-sign-in)

#### <u>Link to GAHOOT-server</u>
View the project backend made with Ruby on Rails [here](github.com/audreypatricia/GAHOOT-server)

#### <u>Overview:</u>

The objective of this project was to create a clone of the trivia application [Kahoot](https://kahoot.com/). Audrey came up with the idea and the rest of us joined her team with 7 days to create the application.

#### <u>The Journey:</u>

We started off by creating our database tables and models with Postgresql using the Ruby on Rails framework.  We planned out the models on the first day over Zoom using [Miro](https://miro.com/app/dashboard/) and [Lucid Chart](https://lucid.app/documents#/dashboard) to help us all visualise how this project would come to life. We decided on 5 models and 1 joining table and created some seed data so that we could deploy to our cloud platform ([Heroku](https://dashboard.heroku.com/login)) on day one.

We agreed on using React for our front end and divided up the components for each team member to work on over the weekend and the following week. By Tuesday we started to merge all of the components that we could and we were hopeful that by the end of the day we would be able to run a complete game from start to finish. Unfortunately we ran into a fair few bugs and had to refactor a lot of code as well as re-thinking our models and how we would access and render our data. We spent some time discussing the flow of our application, who needed what and where and trying to accomodate each others needs by passing our data through React however we could. After a couple of days of refactoring our project we managed to get a game to run late Thursday afternoon. We added styling and some more quiz data so that we could present on the Friday. We are all very proud of our achievements this week.

#### <u>How to play:</u>

 To play you need someone to be a host of the game. They sign up as a host through the homepage and then select a quiz from the quiz index page. Once they select play on a quiz they are taken to the game start page where they then need to click "create game" to create a game for other players to enter.

 Once clicked the pin can be distributed to players who then sign in via the "player sign-in" option on the home page. Once all players have signed in (which the host can see) the host then clicks the "start game" button. The quiz questions will render on all player's screens and they then simply need to select the correct answer and flow through the questions until the quiz is over. Scores can be viewed on the Host's screen as players fight to win the championship title!

#### <u>Things we love:</u>
* The learning experiences including:
  * Debugging
  * Collaboration
  * Communication
  * Time management
* It works!
* Our team!

#### <u>Challenges:</u>
* Merging components
* Understanding each others code
* Dealing with asynchonous problems
* Dealing with rendering the game on multiple browsers
* Passing data through React components

#### <u> Stretch Goals:</u>
* Capturing the time and adding this to players as their score

#### <u>Tech Stack:</u>
* HTML/CSS
* React/Javascript
* Ruby on Rails
* Postgresql
* Heroku
* Cloudinary

#### <u>Future Improvements:</u>
* clearing out player database every so often, so player names do not always have to be unique
* setting score for each correct answer based on how fast questions are answered
* allowing for the host to be able to share their screen of questions and players viewing only answer options

## Our Awesome Team!

![Team](https://github.com/audreypatricia/GAHOOT-client/blob/main/src/images/team.jpg)\



## Created by Audrey, David, Katie, Paul and Sam
### <u> Special thanks to Joel and Mai for their invaluable insights and support </u>
