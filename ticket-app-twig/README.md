# TicketFlow - Robust Ticket Management API 🎫

## Overview

TicketFlow is a server-side rendered application built with **PHP** and the **Twig** templating engine, providing a comprehensive solution for managing user-specific tickets. It features user authentication, ticket creation, tracking, and status updates, leveraging a file-based JSON storage system for data persistence.

## Features

- **User Authentication**: Secure user registration and login with password hashing.
- **Ticket Management**: Create, view, update, and delete support tickets.
- **Personalized Dashboard**: Users can access a dashboard displaying an overview of their tickets and their statuses.
- **Validation**: Robust server-side validation for user input and ticket data.
- **Responsive UI**: Modern and responsive user interface powered by Tailwind CSS.

## Getting Started

To get TicketFlow up and running on your local machine, follow these steps.

### Installation

Before you begin, ensure you have PHP (7.4+ recommended), Composer, and Node.js (for TailwindCSS build) installed.

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/DeraTheOz/HNG-Stage-2.git
    cd HNG-Stage-2/ticket-app-twig
    ```
2.  **Install PHP Dependencies**:
    Navigate into the `ticket-app-twig` directory and install the required PHP packages using Composer:
    ```bash
    composer install
    ```
3.  **Install Node.js Dependencies**:
    Install frontend dependencies (Tailwind CSS, PostCSS, Autoprefixer):
    ```bash
    npm install
    ```
4.  **Build Frontend Assets**:
    Compile the Tailwind CSS to generate `output.css`:
    ```bash
    npm run build:css
    ```
    _(Note: This command includes `--watch`, so it will keep running and recompile CSS changes. You may want to run it in a separate terminal during development or just `npx tailwindcss -i ./public/css/index.css -o ./public/css/output.css` for a one-time build.)_
5.  **Configure Web Server**:
    Point your web server (Apache/Nginx) document root to the `public/` directory within `ticket-app-twig`. Alternatively, you can use PHP's built-in web server for development:
    ```bash
    php -S localhost:8000 -t public
    ```
    Then, open your browser and navigate to `http://localhost:8000`.

### Environment Variables

This project currently utilizes file-based JSON for user and ticket storage, located in the `storage/` directory. No external environment variables are required for its core functionality.

## API Documentation

_(Note: This application primarily uses server-side rendering with form submissions. The "endpoints" below represent the logical actions handled by the backend controllers, typically invoked via POST requests to `index.php` with query parameters and form data.)_

### Base URL

The application handles requests through a single entry point, `index.php`, with routing managed via `GET` parameters for page navigation and `POST` requests for data actions.
Example: `http://localhost:8000/index.php` or `http://localhost:8000/` (if rewriting rules are set)

### Endpoints

#### `POST /index.php?page=signup`

**Description**: Registers a new user account.
**Request**:

```json
{
  "email": "user@example.com",
  "password": "StrongPassword123",
  "name": "John Doe" // Not directly used in backend validation, but typically part of signup form
}
```

**Response**:

```json
{
  "success": true
}
```

**Errors**:

- `400 Bad Request`: Validation errors (e.g., "Email is required.", "Invalid email format.", "Password must be at least 6 characters.").
- `409 Conflict`: `{"success": false, "errors": {"email": "Email already exists."}}`

#### `POST /index.php?page=login`

**Description**: Authenticates a user and establishes a session.
**Request**:

```json
{
  "email": "user@example.com",
  "password": "StrongPassword123"
}
```

**Response**:

```json
{
  "success": true
}
```

**Errors**:

- `400 Bad Request`: Validation errors (e.g., "Email is required.", "Password is required.").
- `401 Unauthorized`: `{"success": false, "errors": {"email": "Invalid credentials."}}`

#### `GET /index.php?page=dashboard`

**Description**: Retrieves a summary of the authenticated user's tickets for dashboard display.
**Request**:
(No payload, requires active session)
**Response**:
(Renders Twig template with data, logically provides ticket statistics)

```php
// Example of data passed to Twig
[
  "userName": "user@example.com",
  "stats": {
    "total": 5,
    "open": 2,
    "in_progress": 1,
    "closed": 2
  },
  "recentTickets": [
    {
      "id": 1678888888,
      "title": "Website Bug Report",
      "description": "User reported a layout issue on dashboard.",
      "status": "open"
    }
  ]
]
```

**Errors**:

- `401 Unauthorized`: If no active user session.

#### `GET /index.php?page=tickets`

**Description**: Retrieves all tickets for the authenticated user.
**Request**:
(No payload, requires active session)
**Response**:
(Renders Twig template with data, logically provides an array of tickets)

```php
// Example of data passed to Twig
[
  "tickets": [
    {
      "id": 1678888888,
      "title": "Website Bug Report",
      "description": "User reported a layout issue on dashboard.",
      "status": "open"
    },
    {
      "id": 1678888889,
      "title": "Feature Request: Dark Mode",
      "description": "Implement dark mode theme for improved UX.",
      "status": "in_progress"
    }
  ]
]
```

**Errors**:

- `401 Unauthorized`: If no active user session.

#### `POST /index.php?page=tickets` (Create Ticket)

**Description**: Creates a new ticket for the authenticated user.
**Request**:

```json
{
  "action": "create",
  "title": "New Bug in Production",
  "description": "Error when submitting form on checkout page.",
  "status": "open"
}
```

**Response**:

```json
{
  "success": true,
  "message": "Ticket created successfully"
}
```

**Errors**:

- `400 Bad Request`: Validation errors (e.g., `{"success": false, "errors": {"title": "Title is required"}}`, `{"success": false, "errors": {"description": "Description must not exceed 100 characters"}}`).
- `401 Unauthorized`: If no active user session.

#### `POST /index.php?page=tickets` (Update Ticket)

**Description**: Updates an existing ticket for the authenticated user.
**Request**:

```json
{
  "action": "edit", // or "update" depending on the form
  "id": 1678888888,
  "title": "Updated Bug Title",
  "description": "Fixed layout issue on dashboard. Testing in staging.",
  "status": "in_progress"
}
```

**Response**:

```json
{
  "success": true,
  "message": "Ticket updated successfully"
}
```

**Errors**:

- `400 Bad Request`: Validation errors (e.g., `{"success": false, "errors": {"title": "Title is required"}}`).
- `404 Not Found`: `{"success": false, "message": "Ticket not found"}` if `id` does not exist or does not belong to the user.
- `401 Unauthorized`: If no active user session.

#### `POST /index.php?page=tickets` (Delete Ticket)

**Description**: Deletes a ticket for the authenticated user.
**Request**:

```json
{
  "action": "delete",
  "id": 1678888888
}
```

**Response**:

```json
{
  "success": true,
  "message": "Ticket deleted successfully"
}
```

**Errors**:

- `404 Not Found`: (Implied by current implementation, but would result in no change if ticket not found).
- `401 Unauthorized`: If no active user session.

## Usage

After installation, you can access the application through your web server.

- **Homepage**: Navigate to the root (`/`) to see the landing page.
- **Sign Up**: Access `/index.php?page=signup` to create a new account.
- **Login**: Access `/index.php?page=login` to log in with an existing account.
- **Dashboard**: After logging in, you'll be redirected to `/index.php?page=dashboard` where you can see ticket statistics.
- **Manage Tickets**: Go to `/index.php?page=tickets` to create, view, edit, or delete your tickets.

The application is primarily driven by form submissions and URL parameters, rendering dynamic content using Twig templates.

## Technologies Used

| Technology       | Description                                              | Link                                                                       |
| :--------------- | :------------------------------------------------------- | :------------------------------------------------------------------------- |
| **PHP**          | Server-side scripting language                           | [php.net](https://www.php.net/)                                            |
| **Twig**         | Flexible, fast, and secure templating language for PHP   | [twig.symfony.com](https://twig.symfony.com/)                              |
| **Tailwind CSS** | Utility-first CSS framework for rapid UI development     | [tailwindcss.com](https://tailwindcss.com/)                                |
| **Composer**     | Dependency manager for PHP                               | [getcomposer.org](https://getcomposer.org/)                                |
| **PostCSS**      | Tool for transforming CSS with JavaScript plugins        | [postcss.org](https://postcss.org/)                                        |
| **Autoprefixer** | PostCSS plugin to parse CSS and add vendor prefixes      | [github.com/postcss/autoprefixer](https://github.com/postcss/autoprefixer) |
| **JSON**         | Lightweight data-interchange format for data persistence | [json.org](https://www.json.org/json-en.html)                              |

---

## Author

**Emmanuel Ihemedu**

I'm passionate about building elegant and efficient web applications. Connect with me on social media:

- [LinkedIn](https://linkedin.com/in/emmanuel-ihemedu)
- [Twitter](https://twitter.com/deraamaobi)

---

[![PHP](https://img.shields.io/badge/PHP-8.2%2B-blue.svg?style=flat-square&logo=php)](https://www.php.net/)
[![Twig](https://img.shields.io/badge/Twig-3.x-green.svg?style=flat-square&logo=twig)](https://twig.symfony.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-blue.svg?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Composer](https://img.shields.io/badge/Composer-2.x-orange.svg?style=flat-square&logo=composer)](https://getcomposer.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
