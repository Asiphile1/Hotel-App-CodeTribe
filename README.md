# LE' BEL MOR - Hotel Booking Application

## Overview

LE' BEL MOR is a royal-themed hotel booking application designed to manage hotel accommodations, bookings, and user profiles. The app is built using React and Redux for state management, with Firebase handling authentication and Firestore for data storage. The app is responsive, ensuring a smooth user experience across devices including mobile, tablet, and desktop.

## hosted link: https://hotel-app-code-tribe.vercel.app/
## hosted cms link: https://asiphile1.github.io/hotel-cms/
## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: User registration and login using Firebase Authentication.
- **Accommodation Listings**: View, search, and filter available hotel accommodations.
- **Booking Functionality**: Users can book accommodations, specifying check-in/out dates, number of guests, and rooms.
- **User Profile**: Manage personal details, view booking history, and save favorite accommodations.
- **Admin Panel**: Manage accommodations, view and manage reservations, and update hotel details.
- **Responsive Design**: The app is fully responsive and works well on mobile, tablet, and desktop screens.

## Technologies Used

### Frontend

- **React**: JavaScript library for building user interfaces.
- **Redux**: State management for React.
- **React Router**: For routing and navigation.
- **Material-UI (MUI)**: UI components for a modern, responsive design.
- **Firebase Authentication**: For user authentication.
- **Firebase Firestore**: For data storage and management.
- **Axios**: HTTP client for API calls.
- **React-Spinners**: For loading indicators.

### Backend 

- **Firebase Functions**: For serverless backend logic (if used).

### Tools & Libraries

- **npm**: Package manager.
- **Webpack**: Module bundler.
- **Babel**: JavaScript compiler.
- **ESLint & Prettier**: For code linting and formatting.

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (version 14 or higher)
- **npm** (version 6 or higher)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Asiphile1.Hotel-App-CodeTribe.git
   cd Hotel-App-CodeTribe
 


## 2. Install dependencies:
```sh

npm install
```
Some key dependencies include:

```sh

npm install react redux react-redux react-router-dom @mui/material axios firebase react-spinners
```
## 3. Set up Firebase:
Create a Firebase project at Firebase Console.

Enable Firebase Authentication and Firestore Database.

Create a .env file in the root directory and add your Firebase configuration:

```env

REACT_APP_API_KEY=your_api_key
REACT_APP_AUTH_DOMAIN=your_auth_domain
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_storage_bucket
REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_APP_ID=your_app_id
```
## 4. Start the development server:
```sh

npm start

The app should now be running at http://localhost:3000.
```
