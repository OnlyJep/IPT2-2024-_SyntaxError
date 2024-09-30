// Load lodash, axios, and Bootstrap for frontend functionality
window._ = require('lodash');

try {
    window.$ = window.jQuery = require('jquery');
    require('bootstrap');  // Ensure Bootstrap is available globally
} catch (e) {
    console.error('Error loading dependencies', e);
}

// Load axios for making HTTP requests
window.axios = require('axios');

// Set up the default CSRF token for security (assuming Laravel backend)
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Additional setups, if necessary, go here
