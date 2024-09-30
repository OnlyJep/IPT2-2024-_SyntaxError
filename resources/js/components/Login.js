// Ensure the script runs after the DOM has loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select the root div where the content will be appended
    const root = document.getElementById('root');

    // Create the main login container div
    const loginContainer = document.createElement('div');
    loginContainer.classList.add('login-container');

    // Create the left section with the image
    const leftDiv = document.createElement('div');
    leftDiv.classList.add('left');

    // Create an image element for USociety.png
    const image = document.createElement('img');
    image.src = 'css/USociety.png'; // Set the source for the image
    image.alt = 'USociety'; // Alternative text
    image.classList.add('left-image'); // Add the class for styling
    leftDiv.appendChild(image); // Append the image to the left div

    // Create the right section (login form container)
    const rightDiv = document.createElement('div');
    rightDiv.classList.add('right');

    // Create a form container for styling
    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');

    // Add title to the form container
    const title = document.createElement('h2');
    title.textContent = 'ᴜʀɪᴀɴ sᴏᴄɪᴇᴛʏ ʟᴏɢɪɴ';
    title.style.marginBottom = '20px'; // Space below the title
    formContainer.appendChild(title); // Append the title to the form container

    // Create the form element
    const form = document.createElement('form');
    form.classList.add('login-form'); // Optional class for styling

    // Create the email input field
    const emailInput = document.createElement('input');
    emailInput.type = 'text';
    emailInput.id = 'email';
    emailInput.placeholder = 'Enter your email or username';
    emailInput.required = true;
    form.appendChild(emailInput);

    // Create the password input field
    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.id = 'password';
    passwordInput.placeholder = 'Enter your password';
    passwordInput.required = true;
    form.appendChild(passwordInput);

    // Create the login button
    const loginBtn = document.createElement('button');
    loginBtn.type = 'submit';
    loginBtn.id = 'loginBtn';
    loginBtn.textContent = 'ʟᴏɢɪɴ';
    form.appendChild(loginBtn);

    // Create the forgot password link
    const forgotPasswordLink = document.createElement('a');
    forgotPasswordLink.href = '#';
    forgotPasswordLink.classList.add('forgot-password');
    forgotPasswordLink.textContent = 'Forgot password?';
    form.appendChild(forgotPasswordLink);

    // Create a styled separator line
    const separator = document.createElement('hr');
    separator.classList.add('form-separator'); // Add a class for styling
    form.appendChild(separator); // Append the separator to the form

    // Create the create new account button
    const createAccountBtn = document.createElement('button');
    createAccountBtn.type = 'button';
    createAccountBtn.classList.add('create-account');
    createAccountBtn.textContent = 'ᴄʀᴇᴀᴛᴇ ɴᴇᴡ ᴀᴄᴄᴏᴜɴᴛ';
    form.appendChild(createAccountBtn);

    // Append the form to the form container
    formContainer.appendChild(form);

    // Append form container to the right div
    rightDiv.appendChild(formContainer);

    // Set the background image for the right section with low opacity
    rightDiv.style.backgroundImage = 'url("https://media.istockphoto.com/id/1145349711/vector/blue-line-vector-background.jpg?s=612x612&w=0&k=20&c=RRxdcR1O0YSiMXuojwQ4ZZjCEnCsfdOmWO6IAK_XYOQ=")';
    rightDiv.style.backgroundSize = 'cover'; // Cover the entire div
    rightDiv.style.backgroundPosition = 'center'; // Center the background image
    rightDiv.style.opacity = '0.8'; // Low opacity for the background image
    rightDiv.style.display = 'flex';
    rightDiv.style.justifyContent = 'center';
    rightDiv.style.alignItems = 'center';
    rightDiv.style.height = '100vh'; // Full height of the viewport

    // Append left and right divs to the login container
    loginContainer.appendChild(leftDiv);
    loginContainer.appendChild(rightDiv);

    // Append the entire login container to the root div
    root.appendChild(loginContainer);
});
