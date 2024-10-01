<?php

use Illuminate\Support\Facades\Route;

// Root route for the login page
Route::get('/', function () {
    return view('welcome'); // This loads resources/views/welcome.blade.php
});

// Route for the home page"
Route::get('/home', function () {
    return view('Home'); // This loads resources/views/Home.blade.php
});

// Route for Profiling page
Route::get('/profiling', function () {
    return view('Profiling'); // Loads resources/views/Profiling.blade.php
});
    