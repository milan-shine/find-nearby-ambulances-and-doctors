# Find Nearby Ambulances and Doctors

## Overview

This application is designed to help users find nearby ambulance services and doctors. Built with a Vite.js frontend and a Node.js backend, it allows users to perform CRUD operations on ambulance and doctor records. The app supports pagination, displays a total count of records, and handles loading, error, and empty states gracefully.

## Features

- **Frontend**:
  - Vite.js
  - Functional components
  - TypeScript
  - CSS-in-JS (styled-components)
- **Backend**:
  - Node.js
  - In-memory JSON file for data storage
  - TypeScript
- **Additional**:
  - Cloudinary for image handling

## Quick Start Guide

### How to Run the Project

#### Prerequisites

- Node.js
- npm or yarn

#### Setup

1. Clone the repository:

```bash
git clone https://github.com/milan-shine/find-nearby-ambulances-and-doctors.git
cd find-nearby-ambulances-and-doctors
```

2. Install dependencies for both frontend and backend:

```bash
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

3. Create a `.env` file in the `frontend` directory and add your Cloudinary configuration and Backend configuration:

```env
VITE_API_URL=
VITE_COUDINARY_CLOUD_NAME=
VITE_COUDINARY_UPLOAD_PRESET=
```

#### Running the App

1. Start the backend server:

```bash
cd server
npm run dev
```

2. Start the frontend development server:

```bash
cd client
npm start
```

3. Open your browser and navigate to `http://localhost:3000`.

## Functionality

### CRUD Operations

- **Create**: Add new ambulances and doctors.
- **Read**: View the list of ambulances and doctors.
- **Update**: Edit existing ambulance and doctor records.
- **Delete**: Remove ambulance and doctor records.

### Pagination

- Displays the first 10 records by default.
- Supports pagination with 10 records per page.

### Record Details

For each record, the following details are shown:
- Title
- Description
- Location
- Image

### States

- **Loading State**: Shows a loading indicator until the list is available.
- **Error State**: Displays an error message if the list is unavailable.
- **Empty State**: Shows a message if there are no results.

## Notes

- The app uses an in-memory JSON file to store data.
- Images are handled using Cloudinary.

## Conclusion

This project demonstrates a simple yet effective way to manage ambulance and doctor records. It includes essential CRUD operations, pagination, and state handling, making it a practical solution for real-world applications.
