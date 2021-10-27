# React Stripe.js Walkthrough

![donut-shop](https://user-images.githubusercontent.com/59585336/74299251-111fb300-4d1a-11ea-932b-a6e7b33f6ea8.gif)

### Getting Started

- clone this repo locally by clicking on "Clone or Download"
- from a terminal, cd into the project folder `cd demo-react-stripe-js`
- checkout the getting started branch `git checkout getting-started`
- install the dependencies `npm install`
- start developing! `npm run dev`

### Eventual Requirements

- you will need to sign up for a Stripe account if you haven't already: [stripe.com/register](https://stripe.com/register)
- you will need to add your account's secret key and publishable key to the `next.config.js` file

### Credit Card Input Design Requirements

- the behavior, look and feel of the app should match the gif exactly
- text color: `#fff`
- font size: `16px`
- placeholder text color: `#87bbfd`
- invalid text color: `#FFC7EE`

### Cypress Testing
NOTE: There is a known issue with cy-grep implementation not picking correct tag tests, so cy:run:api, cy:run:smoke, and 
cy:run:regression do not work correctly as of this moment.
- Open cypress: `npm run cy:open`
- Run all cypress test: `npm run cy:run`
- Run only api cypress tests: `npm run cy:run:api`
- Run only smoke cypress tests: `npm run cy:run:smoke`
- Run only regression cypress tests: `npm run cy:run:regression`

Web App Author: Thomas Marek