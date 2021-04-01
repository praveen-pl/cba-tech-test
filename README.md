# cba-tech-test

## Description
UI and API tests run using cypress in Java script. UI tests uses Cucumber and scenarios created in .feature file using BDD. API tests uses regular cypress test framework(Mocha)

## Setup
Need to install [Node.JS](https://nodejs.org/en/)  


## Instructions to run the test
- Clone the repo from github [link](https://github.com/praveen-pl/cba-tech-test.git) 
- Open the repo folder in Visual studio code
- Open the terminal make sure you are there in the root folder of the repo and run below command to install the npm packages
```
npm install
```
- To run UI tests in chrome use the below command
```
npm run test:chrome
```
- To run UI tests in Firefox use the below command
```
npm run test:firefox
```
- To run the UI tests in headless mode use the below command
```
npm run test:headless
```
- To run the API tests use the below command
```
npm run test:API
```

