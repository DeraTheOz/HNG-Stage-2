<?php
require_once __DIR__ . '/../vendor/autoload.php';

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

// Set up Twig
$loader = new FilesystemLoader(__DIR__ . '/../templates');
$twig = new Environment($loader, [
    'cache' => false, // disable cache during development
]);

// Example variable for authentication check (replace with real session logic)
$isAuthenticated = false;

// Determine which page to show
$page = $_GET['page'] ?? 'landing';

$template = match ($page) {
    'signup' => 'pages/signup.twig',
    'login' => 'pages/login.twig', // placeholder for later
    default => 'pages/landing.twig',
};

// Render the page dynamically
echo $twig->render($template, [
    'page' => $page,
    'isAuthenticated' => $isAuthenticated,
]);
