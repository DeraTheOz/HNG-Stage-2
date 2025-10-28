# TicketFlow: A Multi-Stack Ticket Management Application 🚀

## Overview

TicketFlow is a comprehensive ticket management application designed to demonstrate robust backend logic with diverse modern frontend implementations. It enables users to efficiently create, track, and manage support tickets through interfaces built with React, Vue, and a PHP-driven Twig templating system.

## Features

- **User Authentication**: Secure user registration, login, and logout functionalities.
- **Ticket Creation**: Easily create new support tickets with titles, descriptions, and initial statuses.
- **Ticket Management**: View, edit, and delete existing tickets.
- **Dashboard & Statistics**: A personalized dashboard providing an overview of ticket statuses (Open, In Progress, Closed).
- **Responsive User Interface**: Optimized for various screen sizes using Tailwind CSS.
- **Multi-stack Frontend**: Showcases the same application logic implemented across different frontend frameworks.

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

Ensure you have the following installed:

- Node.js (LTS version recommended)
- PHP (version 7.4+ recommended for the Twig application)
- Composer (for PHP dependencies)
- npm or Yarn (for JavaScript dependencies)

### Installation

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/DeraTheOz/HNG-Stage-2.git
    cd HNG-Stage-2/HNG-Stage-2
    ```

2.  **Setup the PHP (Twig) Application:**
    Navigate to the `ticket-app-twig` directory:

    ```bash
    cd ticket-app-twig
    ```

    📦 Install Composer dependencies:

    ```bash
    composer install
    ```

    🎨 Install Node.js dependencies for Tailwind CSS:

    ```bash
    npm install
    ```

    ✨ Build the Tailwind CSS output:

    ```bash
    npm run build:css
    ```

    Return to the main `HNG-Stage-2` directory:

    ```bash
    cd ..
    ```

3.  **Setup the React Frontend:**
    Navigate to the `ticket-app-react` directory:

    ```bash
    cd ticket-app-react
    ```

    📦 Install Node.js dependencies:

    ```bash
    npm install
    ```

    Return to the main `HNG-Stage-2` directory:

    ```bash
    cd ..
    ```

4.  **Setup the Vue Frontend:**
    Navigate to the `ticket-app-vue` directory:
    ```bash
    cd ticket-app-vue
    ```
    📦 Install Node.js dependencies:
    ```bash
    npm install
    ```
    Return to the main `HNG-Stage-2` directory:
    ```bash
    cd ..
    ```

### Environment Variables

No explicit environment variables are needed for local data persistence, as user and ticket data are managed via browser `localStorage` for React/Vue, and local JSON files for PHP.

## Usage

### Running the PHP (Twig) Application

1.  Navigate to the `ticket-app-twig` directory:
    ```bash
    cd ticket-app-twig
    ```
2.  Start a PHP development server, serving the `public` directory:
    ```bash
    php -S localhost:8000 -t public
    ```
3.  Open your browser and visit `http://localhost:8000`.
    - **User Data:** Stored in `storage/users.json`.
    - **Ticket Data:** Stored in `storage/tickets.json`.

### Running the React Frontend

1.  Navigate to the `ticket-app-react` directory:
    ```bash
    cd ticket-app-react
    ```
2.  Start the development server:
    ```bash
    npm run dev
    ```
3.  Open your browser and visit the address provided in your terminal (e.g., `http://localhost:5173`).
    - **User and Ticket Data:** Stored in your browser's `localStorage` under `ticketapp_session`.

### Running the Vue Frontend

1.  Navigate to the `ticket-app-vue` directory:
    ```bash
    cd ticket-app-vue
    ```
2.  Start the development server:
    ```bash
    npm run dev
    ```
3.  Open your browser and visit the address provided in your terminal (e.g., `http://localhost:5174`).
    - **User and Ticket Data:** Stored in your browser's `localStorage` under `ticketapp_session`.

## Technologies Used

| Technology                     | Purpose                                             |
| :----------------------------- | :-------------------------------------------------- |
| **PHP**                        | Backend logic, user authentication, data management |
| **Twig**                       | Templating engine for PHP-rendered frontend         |
| **React.js**                   | Frontend library for one of the UIs                 |
| **Vue.js**                     | Progressive JavaScript framework for another UI     |
| **Tailwind CSS**               | Utility-first CSS framework for styling             |
| **Vite**                       | Fast build tool for React and Vue applications      |
| **JavaScript**                 | Frontend interactivity and form validation          |
| **Local Storage / JSON Files** | Data persistence (simulated database)               |

## Author

**Emmanuel Ihemedu**

I'm passionate about building elegant and efficient web applications. Connect with me on social media:

- [LinkedIn](https://linkedin.com/in/emmanuel-ihemedu)
- [Twitter](https://twitter.com/deraamaobi)
