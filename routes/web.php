<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any}', function () {
    return view('welcome'); // Assuming 'welcome' is where your React app is loaded
})->where('any', '.*'); // This will catch all routes and pass them to React

