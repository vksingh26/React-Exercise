# React-Exercise: Added the screenshot too (Project with Lighthouse)
# Created the app as per the execise request.
# First i thought through the project folder structure.
# First created the app using create-react-app commad
# After creating the app installed the required packages using npm i packagename
# Created navigation menu first then added the routing, it was not required but i added just for the reference
# Created seperate file for calling the api.
# Created components folder and created newfeeds/feeds folder and consumed the API
# Then added the functionality to remove the feed from user's view.
# Then added the upvote functionality to increment the vote by one on every click
# Added server side rendering code but don't know how to deploy as i have never worked on deployment of SSR app.
# Committed the code on my github account. 
# NOTE: I have updated the code for SSR in this project, same project the only difference is i have written the complete SSR logic here: https://github.com/vksingh26/ReactExercise
# Firebase Deployment steps:
# run npm build which will give a build folder 
1 npm install -g firebase-tools(we can use any like aws, docker, github etc for deployment) i have used firebase here
2. firebase login
3. Allow Firebase to collect CLI usage and error reporting information? Y/N (select yes)
4. Run firebase init
5. select Hosting: Configure and deploy Firebase Hosting sites from list of options
6. Please select an option: Select Use an existing project from list of options
7. What do you want to use as your public directory? build (enter build directory here as build directory contains our production ready project)
8. Configure as a single-page app (rewrite all urls to /index.html)? Y/N (select Y)
9. File build/index.html already exists. Overwrite? Y/N (select N) (let all the process finish)
10. firebase deploy
