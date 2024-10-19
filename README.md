# Full-Stack Project: Food Search App(Foody-zone)

This is a full-stack web application for searching and filtering food items. The frontend is built with **React** and styled with **Styled Components**, while the backend is powered by **Node.js**. The app allows users to search for food items, filter them by meal type (e.g., breakfast, lunch, dinner), and view details about each food item.
![UI of fullstack web app](.src/assets/UI.png)

## Features

- **Frontend**:
  - Built with **React** for a dynamic user interface.
  - Styled using **Styled Components** for scoped, maintainable CSS.
  - **Search functionality** to look for food items.
  - **Filter functionality** for meal types.
  - Responsive design with well-structured UI components.

- **Backend**:
  - Developed using **Node.js**.
  - Handles API requests for fetching food data.
  - **Express** framework used for routing and handling requests.

## Project Structure

### Frontend (React)

The frontend is built using React and handles the user interface, which includes the search bar, filtering options, and displaying the food cards.

Key directories and files:
- `src/components/SearchResult/SearchResult.jsx`: Renders the list of food items fetched from the backend.
- `src/App.jsx`: Main application component with filters, search input, and the result display.

### Backend (Node.js)

The backend uses Node.js to provide an API for fetching food data. It responds to frontend requests with the relevant food items.

Key directories and files:
- `/routes/api.js`: API routes for fetching food data.
- `/server.js`: Node.js server that listens to requests and sends responses.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js**: [Download here](https://nodejs.org/en/)
- **npm**: Node package manager (comes with Node.js)
- **Git**: Version control system to clone the repository.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Kunalkrsingh-10/Foody-zone.git
   cd Foody-zone
