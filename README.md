This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents

- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm install](#npm-install)
  - [npm start](#npm-start)


## Folder Structure

After creation, your project should look like this:

```
would-you-rather/
  README.md
  node_modules/
  package.json
  public/
    assets/
        images/ 
    index.html
    favicon.ico
  src/
    actions/
        appInit.js - first method to run gets all data
        questions.js - all actions related to questions
        users.js - all actions related users
    components/
        leaderboard/
            LeaderBoardView.js - leader board display top users and sorts them
        login/
            LoginView.js - view displayed when a user is not logged in
        nav/
            NavigationView.js - navigation view containing nav and user profile of current user
            navStyle.css - css styles for the NavigationView
        profile/
            profileStyle.css - css styles for the UserProfile
            UserProfile.js - displays profile image name and logout button
        question/
            QuestionCardView.js - determines the state and renderes either QuestionPreview, QuestionResultView or QuestionView
            QuestionFormView.js - Form to add a new question
            QuestionPreview.js - Preview of question to display in Question List
            QuestionResultView.js - displays result of the questions when anwsere
            QuestionsListView.js - list all question on the home page sorts by answered and unaswered
            questionStyle.css - css styles for all the question components
            QuestionView.js - form to accept user input for question.
        scorecard/
            scoreCardStyle.css - css styles for the ScoreCardView
            ScoreCardView.js - component used to display indivutal users on the leader board
    middleware/
        index.js - combines middleware into one function
        logger.js - logger middleware logs state changes
    reducers/
       index.js - combines reducers into one object
       questions.js - all reduceers related to changing the questions state
       users.js - all reducers related to changing the users state
    services/
        DataAPI.js - data API provided
    utils/
        api.js - easy export function to access the API 
    App.css
    App.js
    App.test.js
    index.js
    logo.svg
```





## Available Scripts

In the project directory, you can run:


### 'npm install'

Installs all dependencies for the project to run

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


