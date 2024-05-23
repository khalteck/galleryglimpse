# React-Vite app - GalleryGlimpse

## Overview

This is a simple image gallery app named GalleryGlimpse, built using React, vite, redux-toolkit, tailwindCSS. The app allows users to browse through a collection of images, search for specific images, and view them in a popup modal.

## Getting Started

To run the app locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies by running `yarn`.
4. Start the development server by running `yarn dev`.
5. Open your browser and navigate to `http://localhost:5173` to view the app.

## Features

- **Image Display:** The app displays a grid of images fetched from an external API. Dummyjson's public API (`https://dummyjson.com/products`)
- **Search:** Users can search for specific images by entering keywords in the search bar.
- **Image Popup:** Clicking on an image opens a popup modal where users can view the image in full size.
- **Load More:** Users can load more images by clicking on the "Load more" button at the bottom of the page.
- **Error Handling:** The app handles errors gracefully and displays an error message if image data cannot be fetched.

## Architecture

The app follows a component-based architecture, with each feature encapsulated in its own component for reusability and maintainability. Here's an overview of the main components:

- **Homepage:** The main entry point of the app. It contains the search bar, image display container, and error handling logic.
- **SearchContainer:** Renders the search bar where users can enter keywords to search for images.
- **DisplayContainer:** Renders the grid of images and handles the loading of more images.
- **ImageCard:** Represents an individual image card displayed in the grid. It also includes logic for displaying a preview of the image on hover.
- **ImagePopup:** Displays the full-size image when clicked, in a modal popup.
- **ErrorCard:** Displays an error message if there is an issue fetching image data.

## Technologies Used

- **React:** The frontend framework used for building the UI components.
- **Vite:** The build tool used for fast development and server-side rendering.
- **Tailwind CSS:** Used for styling the UI components with utility classes and giving it a clean, intuitive UI.
- **React Router:** Used for client-side routing to navigate between different pages.
- **Redux Toolkit:** Used for state management, including managing image data and popup state.
- **RTK Query:** Used for handling data fetching gracefully.
- **React Icons:** Used for displaying icons throughout the app.
- **React Spinners:** Used for displaying loading spinners.

## Credits

This app was created by Khalid Oyeneye as a project for 1840andCo's 4th stage interview - Take-Home Assignment: React Frontend Developer.
