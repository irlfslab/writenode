# WritePost

WritePost application that display and maintain the blog post **React Router V7.7**. This project fetches post data from the Firebase.  The user can login the application through authorization of google mail from firebase.  Once login, users are allowed to create and delete own blog posts.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Features

- **Dynamic Routing:** Leverages React Router V7.7 to handle multiple routes and dynamic URL parameters.
- **Data Fetching:** Uses firestore function to add, fetch posts and delete documents from firebase.
- **Modular Code:** Organized into reusable components for easy maintenance.


## Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

3. **Open your browser and navigate to:**

   ```
   http://localhost:5173
   ```

## Usage

- **Home Page:** Display the blog posts and related link tabs.
- **Login Page** This page is to login the app through google mail.
- **Create Page:** This page can create and delete the blog posts after login.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **React Router V7.7:** For handling routing and navigation.
- **React Loading Skeleton V3.5** Provides as placeholder display to improve perceived loading time and user experience.
- **Vite:** Fast development server and build tool.

