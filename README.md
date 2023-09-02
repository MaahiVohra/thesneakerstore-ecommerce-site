# Ecommerce Platform README

Welcome to the README for our Ecommerce Platform. This document provides an overview of the project, its architecture, and the technology stack used. I hope you find this useful for understanding how our platform works.

## Project Overview

My Ecommerce Platform is a modern web application designed to provide users with a seamless shopping experience. It includes features such as user authentication, a real-time shopping cart system, and a secure payment processing system.

## Technology Stack

### Frontend
- **Next.js**: I've used Next.js as the foundation for my web application. It provides server-side rendering, routing, and an excellent developer experience.
- **Clerk**: Clerk handles user authentication and login. It simplifies user management, ensuring my application is secure and user-friendly.
- **TypeScript**: I've chosen TypeScript to enhance code quality and maintainability, reducing the likelihood of bugs and improving developer productivity.
- **Stripe**: Stripe powers my payment system, enabling secure and seamless payment processing for my customers.
- **Vercel**: Vercel is my deployment platform of choice, allowing for easy deployment, scaling, and maintenance.

### Backend
- **Sanity.io**: My backend and database are powered by Sanity.io, a headless CMS. This flexible and scalable solution allows me to manage product data efficiently.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/MaahiVohra/totalitycorp-frontend-challenge.git`
2. Navigate to the project directory: `cd totalitycorp-frontend-challenge`
3. Install dependencies: `npm install`
4. Configure environment variables: Create a `.env.local` file and add the necessary environment variables (e.g., Stripe API keys, Clerk API keys).
5. Start the development server: `npm run dev`
6. Open your browser and access the application at `http://localhost:3000`

## Features

1. **User Authentication**: I use Clerk.io to provide secure authentication and login functionality. Users can create accounts, log in, and manage their profiles.

2. **Real-time Cart System**: My real-time cart system allows users to add and remove products from their cart. The cart updates dynamically, providing a seamless shopping experience.

3. **Payment System**: I've integrated Stripe for secure payment processing. Users can make payments using credit cards, ensuring a smooth checkout process.

## Cart System

I've set up a cart system using React Context, which allows me to manage the cart's data and ensure real-time updates across various components.

- **React Context**: I'm using React Context to store and share the cart's state seamlessly among different components. This ensures that any changes made to the cart are immediately reflected in real-time.

- **Add to Cart**: When a user interacts with the "Add to Cart" button, I've implemented code that updates the cart's state within the React Context. This update includes essential information about the added product, such as its unique ID and quantity.

- **Remove from Cart**: Similarly, I've also implemented a feature that enables users to remove items from their cart. Whenever a user decides to remove a product, the cart state is modified accordingly, guaranteeing that the cart's contents are always up-to-date.

- **Display Cart**: To
