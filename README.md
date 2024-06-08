# Personal Bookshelf

A React application allowing users to search for books using the Open Library API and maintain a personal bookshelf in the browser using localStorage.

## Live Demonstration: [Click Here](https://personal-bookshelf-pro.netlify.app/)

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Future Improvements](#future-improvements)
- [Deployment](#deployment)
- [Contributing](#Contributing)

## Features
- **Book Search Page**
  - Input field for users to type in a book's name.
  - Real-time display of search results as the user types.
  - Display the first 10 results from the Open Library API in a list of cards.
  - Add books to a personal bookshelf.
  - Button to navigate to the "My Bookshelf" page.

- **Personal Bookshelf Page**
  - Display user's personal bookshelf.
  - Persistent storage using localStorage to keep user's bookshelf data.

## Tech Stack
- **Frontend:** React, React Router
- **Styling:** Bootstrap, TailwindCss
- **UI Library:** Acertainity Ui, LunarUi
- **API:** Open Library API
- **Storage:** localStorage
- **Build Tool:** Vite


## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Harshrajani/Personal_Bookshelf.git
   cd personal-bookshelf
   
2. Install dependencies:
   ```sh
   npm install
   ```

## Running the Application
1. Start the development server:
   ```sh
   npm run dev
   ```
2. Open your browser and navigate to http://localhost:5173.

## Future Improvements

- Implement pagination for search results.

- Add a feature to remove books from the personal bookshelf.
- Enhance UI/UX with more animations and responsive design improvements.
- Add unit tests for components.

## Deployment

The application can be deployed on hosting platforms like Netlify. Ensure to build the project before deploying:

```sh
npm run build
```

Push your build directory to your hosting provider's repository following their specific deployment steps.

For any questions or issues, please open an issue on the [GitHub repository]( https://github.com/Harshrajani/Personal_Bookshelf.git).

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.


