# TicketFlow: Streamlined Ticket Management Application

## Overview

TicketFlow is a modern and responsive single-page application built with React, designed to streamline the process of creating, tracking, and managing support tickets. It leverages client-side local storage for user authentication and ticket data persistence, showcasing robust frontend architecture, state management, and form validation.

## Features

- ✨ **User Authentication**: Secure sign-up, login, and logout functionalities for managing user sessions.
- 📊 **Interactive Dashboard**: A personalized overview displaying key ticket statistics (total, open, in-progress, closed).
- 🎫 **Comprehensive Ticket Management**: Full CRUD (Create, Read, Update, Delete) operations for tickets, allowing users to modify or remove entries as needed.
- 💾 **Local Data Persistence**: Utilizes browser's `localStorage` for storing user accounts and ticket data, ensuring data availability across sessions.
- 📱 **Responsive Design**: Optimized for a consistent user experience across various devices and screen sizes using Tailwind CSS.
- ✅ **Client-Side Form Validation**: Robust validation mechanisms to ensure data integrity for user registration and ticket submissions.

## Getting Started

To get a copy of the project up and running on your local machine for development and testing purposes, follow these steps.

### Installation

Clone the repository and install the dependencies:

```bash
# ⬇️ Clone the repository
git clone https://github.com/DeraTheOz/ticket-app-react.git

# 📂 Navigate into the project directory
cd ticket-app-react

# 📦 Install project dependencies
npm install
# or
yarn install
```

### Environment Variables

This project utilizes client-side local storage for data persistence and does not require external environment variables. All data is managed within the browser.

## Usage

After completing the installation steps, you can run the application:

```bash
# ▶️ Start the development server
npm run dev
# or
yarn dev
```

The application will typically be accessible at `http://localhost:5173`.

1.  **Welcome Page**: Upon opening, you will be directed to the landing page.
2.  **Sign Up**: If you are a new user, navigate to the "Sign Up" page to create an account. Provide your name, email, and a strong password.
3.  **Login**: Existing users can log in via the "Login" page using their registered email and password.
4.  **Dashboard**: After successful login, you will be redirected to the dashboard, which presents a summary of your tickets.
5.  **Manage Tickets**: Click on "Manage Tickets" or navigate to `/tickets` to view, create, edit, or delete your tickets.
6.  **Create Ticket**: Use the form at the top of the "Tickets" page to create a new ticket by providing a title, description, and status.
7.  **Edit/Delete Ticket**: Each ticket card on the "Tickets" page includes "Edit" and "Delete" buttons for managing individual tickets.
8.  **Logout**: You can securely log out from the navigation bar.

## Technologies Used

| Technology       | Description                                                                     | Link                                                |
| :--------------- | :------------------------------------------------------------------------------ | :-------------------------------------------------- |
| React            | A JavaScript library for building user interfaces, focused on components.       | [React.dev](https://react.dev/)                     |
| React Router DOM | Declarative routing for React applications, enabling navigation.                | [React Router](https://reactrouter.com/)            |
| Vite             | A next-generation frontend tooling that provides a fast development experience. | [Vitejs.dev](https://vitejs.dev/)                   |
| Tailwind CSS     | A utility-first CSS framework for rapidly building custom designs.              | [TailwindCSS.com](https://tailwindcss.com/)         |
| React Toastify   | A lightweight and highly customizable notification library for React apps.      | [GitHub](https://github.com/fkhadra/react-toastify) |
| ESLint           | A pluggable JavaScript linter that helps identify and report patterns.          | [ESLint.org](https://eslint.org/)                   |
| PostCSS          | A tool for transforming CSS with JavaScript plugins, used by Tailwind.          | [PostCSS.org](https://postcss.org/)                 |

## Author

**Emmanuel Ihemedu**

I'm passionate about building elegant and efficient web applications. Connect with me on social media:

- [LinkedIn](https://linkedin.com/in/emmanuel-ihemedu)
- [Twitter](https://twitter.com/deraamaobi)

---

[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![React Toastify](https://img.shields.io/badge/React_Toastify-gray?style=flat&logo=npm&logoColor=red)](https://fkhadra.github.io/react-toastify/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white)](https://eslint.org/)
