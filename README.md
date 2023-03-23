# JavaScript-Master

The Purpose of this project is to test the user's knowledge on JavaScript. This app will help the user think of new ways to use HTML, CSS, and JavaScript together to make cool projects like this one.

Usage: This project helped me to learn how to use JavaScript to change the way my HTML and CSS display. This project taught me how to use multiple event listeners and multiple functions. I learned how to use event targets to make the quiz button start the timer and display question 1. I learned how to use event listeners for each question with event targets to make sure the right answer was chosen and to then hide display of question 1 and display question 2. This process continues until the last question is clicked. This leads to the results being shown and all the questions are hidden again. The user will then have the option to save their high score to local storage and enter their initials. I learned a lot during this project, there were many times that my project kept breaking due to having many functions, event listeners, and variables all together. This took me a lot longer than I though it would, but it forced me to more fully understand how JavaScript works.

Noteworthy Features: 
-I created 6 event listeners in this project and figured out how to make them all function. The first one starts the quiz and then hides the start button, starts the timer and displays question 1. I made 4 event listeners for each question to display the proper question and check if the proper answer was clicked. I used an event listener to save your score and initials to local storage.

-I created multiple ids in my HTML in order to use them in my JavaScript using the variables I created with the get Element by Id method. This was very useful in making my ids either be hidden or visible when I wanted them to be. 

-I created an array for possible scores and used if statements with my event listeners and event targets for each question to make the proper score display at the end depending on how many answers were correct or incorrect. 

-I created a timer interval that starts at 20 and counts down each second, I used my event listeners to subtract 5 seconds off the time if the incorrect answer was chosen.

Here is a link to my deployed application and a screenshot of my page : https://tylermifflin.github.io/JavaScript-Master/

![Screenshot 2023-03-22 at 9 01 01 PM](https://user-images.githubusercontent.com/123903709/227093435-93b97a8c-2174-4e1f-a7f3-6ed6c5885c8e.png)
