<?php

use Illuminate\Support\Facades\Route;

// Define the root route for the login page (e.g., welcome.blade.php)
Route::get('/', function () {
    return view('welcome'); // This loads resources/views/welcome.blade.php
});

// Define another route for the profile page (e.g., profile.blade.php)
Route::get('/profile', function () {
    return view('profile'); // This loads resources/views/profile.blade.php
});

// Optionally, you can create routes for handling the login logic
// For example, if you are handling authentication:

// Route::post('/login', [LoginController::class, 'login']);
