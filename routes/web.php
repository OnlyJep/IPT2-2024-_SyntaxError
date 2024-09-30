<?php

use Illuminate\Support\Facades\Route;

// Define the root route for the login page
Route::get('/', function () {
    return view('welcome'); // This loads resources/views/welcome.blade.php
});

// Optionally, you can create routes for handling the login logic
// For example, if you are handling authentication:

// Route::post('/login', [LoginController::class, 'login']);
