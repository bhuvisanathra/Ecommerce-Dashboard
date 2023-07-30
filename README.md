# Ecommerce-Dashboard (MERN Stack)

## Technologies Used

- MongoDB: Database management system used to store product information, user data, and order details.
- Express.js: A web application framework for Node.js, used to create the backend API and handle HTTP requests.
- React: A JavaScript library used to build the frontend user interface, providing a dynamic and interactive shopping experience.
- Node.js: A server-side JavaScript runtime environment used to run the backend server and handle server-side logic.

## Project Overview

Our E-commerce website is a full-stack application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It serves as a platform for users to browse and purchase various products conveniently online.

**Key Features (CRUD Operations):**

- **Create:** Administrators can add new products to the catalog, expanding the selection available to users.
- **Read:** Users can view product listings, product details, and their order history.
- **Update:** Admins can modify product information, such as price, description, or availability.
- **Delete:** Administrators can remove products that are no longer available or needed in the catalog.

## Project Status

As of the last update in September 2021, the core functionality of the website, including CRUD operations, has been implemented successfully. However, development and maintenance might still be ongoing.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bhuvisanathra/Ecommerce-Dashboard.git
2. Install dependencies for the frontend and backend:

   Go to the frontend directory
   ```bash
   cd e-commerce-website/frontend
    npm install

   Go to the backend directory
    cd ../backend
    npm install

4. Configure the database:
    Make sure MongoDB is installed and running on your system.
    Update the MongoDB connection string in the backend configuration to match your MongoDB setup.

5. Run the application:

    **Go to the frontend directory and start the React app**
   ```bash
   cd ../frontend
      npm start

    Go to the backend directory and start the Express server
   cd ../backend
      npm start
   
7. Access the website:
      Open your web browser and visit http://localhost:5000 to access the E-commerce website.
