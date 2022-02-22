# hacker-news Clone
## Overview
As the title says this is a clone to the famous website [hacker-news](https://news.ycombinator.com/).

In my effort to get familiar with the [Ionic framework](https://ionicframework.com/) I decided
to create a hacker news clone using Ionic/ReactJS and Firebase/Firestore.
Now why choose the Ionic framework? In short, it gives you the opportunity to create real cross-platform app (including desktop)
using one of the three other popular JavaScript frameworks they provide (Angular, React, and Vue).

### Features
The aim of this application is to give users the ability to write short posts (a title and a hyperlink).
More or less like a tweet.
Other users are able to up vote and/or comment on posts.
For both cases, writing and up voting/commenting posts, you have to be registered.
You don't have to be registered to read posts, though.
The default landing page (index), shows posts ordered by date created.
The user has the ability to press the trending button to see posts ordered by number of votes.
Also you have the ability to search for a post and to update your account details (using the appropriate buttons on nav bar).
And finally, in case you forgot your password, you can reset it by providing the email address used for registering.
An email with a reset link will be send to you.

### Running the project locally
#### *Live version* [hacker-news](https://hackernews-8b245.web.app/)
1. First download the project by running ```git clone https://github.com/E01T/hacker-news.git``` on your local machine or download the zip file.
2. Go into the hacker-news directory e.g. ```cd hacker-news```
3. run ```npm install``` to install dependencies
4. Open the project in your favorite code editor.
5. Before we run this project, we need to create a database using firestore.
   * Go to [firebase](https://firebase.google.com/) and create an account if you don't already have one.
   * Then click the *Go to console* button up to the right.
   * Click on *Add Project* card.
   * Enter your project name e.g. *hacker-news* and click *continue*.
   * Disable Google Analytics since we are not using them in this project, and click *create project*.
   * Wait for the project to be created, and when you see *Your new project is ready*. Click *continue*.
   * The next screen says *Get started by adding Firebase to your app*. We will come back later on this screen.
   * Click the *Create database* button.
   * On the dialog box that appears select the *Start in production mode* radio button and click *next*.
   * From the left hand side menu select/click *Firestore Database*.
   * Select your *Cloud Firestore location* from the dropdown menu and click the *enable* button.
   * On the next screen, (titled Cloud Firestore), select the rules tab. 
   * Delete the code there and paste the following code:
    ```
    rules_version = '2';
    service cloud.firestore {
      match /databases/{database}/documents {
      function isAuthenticated() {
        return request.auth != null && request.auth.uid != "" && request.auth.uid != null;
      }

        match /{document=**} {
          allow read: if true;
          allow write: if isAuthenticated();
        }
      }
    }
    ```
    and click *publish*
   * Then click the Authentication link on the left hand-side navigation bar and click the *Get started* button.
   * Click the *Email/Password* from the *Sign-in providers*.
   * Then click on the *Email/Password*  *Enable* switch and the click the *save* button.
   * Click on the *Project Overview* located on the top left on the screen (with the Home icon).
   * You should be in screen that says *Get started by adding Firebase to your app*.
   * Click the Web </> icon.
   * On the next screen titled *Add Firebase to your web app*, give a nickname to your app 
   and make sure you check the **Also set up Firebase hosting for this app** checkbox.
   * Click the *Register app* button.
   * On the Add Firebase SDK screen the default radio button is *Use npm*. If not check it.
   * **Do not run** ```npm install firebase``` since we have already installed it.
   * Copy only the firebase configuration object. It is the:  
   ```
   // Your web app's Firebase configuration
   const firebaseConfig = {
    apiKey: "...",
    authDomain: "...",
    projectId: "...",
    ...
    };
    ```
    and paste it in the src/firebase/config.js. It is located in the project that you have downloaded it from github (haker-news).
    Just replace the empty firebaseConfig object that is there with the one that you just copied and save the file.
    * On your terminal run ```npm run start``` and you should see the Hacker news site on localhost:3000. 
      It should be empty, no posts. Create an account and start posting.
    * Everything should work properly right now :-).
    * To finish with the firebase setup: click the *next* button. We need to install the firebase cli if you want to host your site with Firebase Hosting.
    This is an optional step, but... why not. Run ```npm install -g firebase-tools``` on your shell to install the tools and click *next* button.
    * Click the *Continue to console* button to go to the  *Choose a product to add to your app* page. 
    * Press ctrl + c  on your terminal to exit the server.
    * Then run ```npm run build```. 
    * It creates a build/production folder, with optimized code, which we are going to use for firebase hosting.
    * Run the command ```firebase login``` to log in to firebase from your console.
    * After that...
    * There is a potential catch here. It happened to me. Before you proceed with the hosting, make sure you have selected the right database.
    * Run ```firebase projects:list``` on your terminal.
    * You should see a list of projects, or just one if you have just started with firebase.
    * Run the command ```firebase use``` to see your active database/project.
    * If is **not** the right one (the one you created for the needs of this installation), run the following command ```firebase use --add name-of-your-project```
    where name-of-your-project is, as you can imagine, the name of your project you see on the list e.g. hacker-news-8047
    * If you run ```firebase use``` again it should be the active project.
    * Then run the command ```firebase init hosting```.
    * In hosting setup there are some questions. Select the following (emboldened):
    * Are you ready to proceed? *y*.
    * What do you want to use as your public directory? **build** --(This is the command, in the package.json file, we use to build the app)
    * Configure as a single-page app (rewrite all urls to /index.html)? (y/N) **y**
    * Set up automatic builds and deploys with GitHub? (y/N) **n**
    * File public/index.html already exists. Overwrite? (y/N) **n** --No because firestore will create a index.html with their crap in it.
    * The final message should be *Firebase initialization complete!*
    * Now run ```firebase deploy --only hosting```
    * The final two messages are (in my case): 
      1. Project Console: https://console.firebase.google.com/project/hackernews-9k145/overview
      2. Hosting URL: https://hackernews-9k145.web.app
      3. Copy the Hosting URL and paste it to your favorite browser, and you should see the web app.
    * This is it. Enjoy.
    ### Dependencies
    The main components are **Ionic-React** and **firebase/firestore**. 
    ```
    "dependencies": {
    "@capacitor/android": "^2.4.0",
    "@capacitor/core": "2.4.0",
    "@capacitor/ios": "^2.4.0",
    "@ionic/react": "^5.0.7",
    "@ionic/react-router": "^5.0.7",
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.4.0",
    "@testing-library/user-event": "^8.0.3",
    "@types/jest": "^24.0.25",
    "@types/node": "^12.12.24",
    "@types/react": "^16.9.17",
    "@types/react-dom": "^16.9.4",
    "@types/react-router": "^5.1.4",
    "@types/react-router-dom": "^5.1.3",
    "date-fns": "^2.16.1",
    "firebase": "^7.19.1",
    "ionicons": "^5.0.0",
    "react": "^16.13.0",
    "react-dom": "^16.13.0",
    "react-router": "^5.1.2",
    "react-router-dom": "^5.1.2",
    "react-scripts": "^3.4.0",
    "typescript": "3.8.3"
  },
  ```
