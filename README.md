# Vasiliy Freiberg — Sprint 8 project


# Description of the project
In this project we need to test the functionality of Urban Routes web app using test automotation. 
The tests that are written for this project should cover following pieces of functionality:

1. Setting the address
2. Selecting Supportive plan
3. Filling in the phone number
4. Adding a credit card
5. Writing a message for the driver
6. Ordering a Blanket and handkerchiefs
7. Ordering 2 Ice creams
8. The car search modal appears
9. Waiting for the driver info to appear in the modal
10. Complete simulation of the order process including all from the previous tests

The mentioned above pieces of functionality should be cheked through interacting and triggering specific web-page elements.


# A description of the technologies and techniques used
The VSCode was used as IDE.
The main method being used for the goals of that project is automated UI testing.
For that purpose the next technologies and techniques are used.
First of all, we used DevTools to open the HTML structure of the Urban Routes web-page.
Then, to set up variables we used CSS selectors and XPath expressions to define web-page elements, which we are interacting with.
To make possible automatation of the tests, actions in browsers, using framework Mocha we installed and used the WebdriverIO.
Mocha library gave us opportunity to ese 'describe and it' constructions for better code organization.
Also, for simplifying code the JavaScript modules and import functions were used - all variables and functions are stored in the page.js and helper.js files.
JS was used for writing asynchronous tests. 


# Instructions on how to run the tests
All tests are placed in the createAnOrder.e2e.js file and are executed one by one as the test is runnig.
Command to execute - 'npm run wdio'.
Each test goes as a part of global suite of tests 'Create an order'.
For each test from №1 to №9 code is written the way so it represents only the mininmum of required previous actions on the app page to be succefully executed.
The final test №10 checks all the functionalities from the previous tests. 

