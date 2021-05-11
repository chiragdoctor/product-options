# Project Overview
 ## TechStack
 - React  
 - Material UI
 - Jest 
 - Enzyme
 - Netlify

## Overview
 - We are using `productOptions.json` file to create filters dynamically. If we add another option like for e.g. yellow color in the attributes of another product then it will create a new option in Color Filter and similarly Paper type 
 - Initially it will load the product based on the initial selection of the product (red, dotted, No Slipcase) on the product summary component  
 - Once the filters are changed it will filter out the products and display appropriate product in ProductSummary Component. 
 - Once the filters are selected product summary with the price will be displayed, user can add that product to basket and the basket price will be updated automatically. 
 - Material-ui has been used designed components, in the Filters component we are using `useMediaQuery` hook to change the layout of the page based on the material-ui breakpoint
 - It works for both desktop and mobile mode
 - This app is created using React Hooks. 
 - Instruction to use keyboard
   - User can press `TAB` to move across the app
   - Use can use `ARROW KEY` to select another color or paper type filter
   - User can press `SPACE BAR` to switch between Slipcase option
   - User can press `TAB` to go to basket component once it highlights Delete Icon then user can press `ENTER` to remove item from the basket
   - User can again access `ADD TO BASKET` button by pressing `TAB` and press `ENTER` to add product to basket.     
   

## Deployment 
This app has also been deployed to Netlify, below is the access URL to Netlify 
https://609a59f955268be075137b9f--productconfigurator.netlify.app/

## To start project
### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## To run unit test cases
### `yarn test`

Launches the test runner in the interactive watch mode.

