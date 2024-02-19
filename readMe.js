/*
Shopping Cart App Documentation
===============================
Overview
========
This documentation provides an overview of a simple shopping cart application
 built using React-Redux Toolkit. The application allows users to view products, 
 add them to the cart, remove items from the cart, and view the total price of items in the cart.

 Code Structure
 ==============
The application consists of several components:
==============================================

Cart: Displays the items added to the cart, allows users to adjust the quantity of each item, and remove items from the cart.

Dashboard: Displays a list of products available for purchase.

NavBar: Provides navigation links to the Dashboard and Cart pages, and displays the number of items in the cart.

Products: Fetches and displays a list of products available for purchase, with options to add products to the cart.

RootLayout: Defines the layout structure of the application, including the navigation bar and main content area.

App: Entry point of the application, where routes are defined and rendered.

Redux Store Configuration
=========================
The application uses Redux for state management with the Redux Toolkit library. The store configuration is as follows:

cartSlice: Defines a slice of the Redux store for managing cart-related state, including actions for adding and removing items from the cart.

store: Configures the Redux store using configureStore from Redux Toolkit, with the cartSlice reducer.

Component Functionality
=======================
Cart: Allows users to view items in the cart, adjust the quantity of each item, and remove items from the cart. It calculates the total price of items in the cart.

Dashboard: Displays a list of products available for purchase.

NavBar: Provides navigation links to the Dashboard and Cart pages, and displays the number of items in the cart.

Products: Fetches and displays a list of products available for purchase. Users can add products to the cart by clicking the "Add to Cart" button.

RootLayout: Defines the overall layout structure of the application, including the navigation bar and main content area.

App: Defines routes for navigating between different pages of the application.

Usage
====
To run the application:

Clone the repository.
Install dependencies using npm install.
Run the application using npm start.
Access the application in your web browser at http://localhost:3000.

Dependencies
============
React: A JavaScript library for building user interfaces.

React-Redux: Official React bindings for Redux.

React-Router-Dom: DOM bindings for React Router.

React-Bootstrap: Bootstrap components built with React.

Redux-Toolkit: The official, opinionated, batteries-included toolset for efficient Redux development.

Conclusion
==========
This documentation provides an overview of a simple shopping cart application built using React-Redux Toolkit. It outlines the 
functionality of each component and explains how to run the application. Feel free to explore the source code for more details on implementation.


*/