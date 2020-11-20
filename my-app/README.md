# Exercise Generator

To begin: 
1. Clone https://github.com/Bailzilla/WorkoutCreator
2. run `npm install`
3. run `npm start`

You can also follow https://bailzilla.github.io/WorkoutCreator/ to view a working render of the app in a browser.

## What is this project?
The idea for this project came to me in an hour of overwhelming frustration. Exercising has always been an escape for me, yet it got to the point where putting in the time to choose which exercises to perform seemed like a chore in itself. That's why I created this app: I wanted to have a quick place to go and say give me a random push exercise and a random anterior lower body exercise to do for today. With this app, all you have to do is click a button, and the app will deliver you an exercise of that given type, along with an image to jog your memory for performing the movement.

### Requirements
1. Responsive design: this app uses CSS Flexbox, along with Media Queries, to render itself on different viewports. For smaller screens, the quote text size and overall space is reduced(font size and margin), as well as the buttons stack on top of each other. When the screen size increases, the quote at the top is larger and the buttons reconfigure to fit the screen in a more appealing way. 

2. This project is on GitHub with more than 5 commits.

### Features
1. Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX):
This app uses a Fetch call to get an array of random quotes and authors. The array is parsed from JSON, then formatted to display a newly generated motivational quote every time the page is refreshed.

2. Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application:
This app contains a file 'lifts.js' which contains an array of exercise objects. Each object has a type, name, and src image. When the user clicks a button, the value (type) of the button is used to create a new array that is filtered to only match the value. From this filtered array, an exercise is chosen at random to be given to the user. Once chosen, the given exercise's image and name are displayed for the user to see.

3. Develop your project using a common JavaScript framework such as React, Angular, Vue, etc.:
This app was created with React. This was my first time using React, great opportunity to learn about its quirks including State and Hooks.

4. Create and use a function that accepts two or more values (parameters), calculates or determines a new value based on those inputs, and returns a new value:
I have created a function that creates a Card component when passed a particular image source and lift name. The function returns a JSX component that displays the image and name in a newly created element each time a button is clicked.

5. Not on the list, but understanding React Hooks took a very long time for me to figure out. Throwing this on the list in the hopes that it can count as an additional feature. I used Hooks to be able to change the app state without implementing any classes. When a new lift is selected, the app auto renders the newly selected exercise.

