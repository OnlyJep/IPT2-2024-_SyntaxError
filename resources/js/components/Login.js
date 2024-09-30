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

    // Append left and right divs to the login container
    loginContainer.appendChild(leftDiv);
    loginContainer.appendChild(rightDiv);

    // Append the entire login container to the root div
    root.appendChild(loginContainer);

    // Create the modal structure (hidden initially)
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.style.display = 'none'; // Hidden by default

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const closeModalBtn = document.createElement('span');
    closeModalBtn.classList.add('close');
    closeModalBtn.innerHTML = '&times;'; // Close button (×)

    const modalFormTitle = document.createElement('h2');
    modalFormTitle.textContent = 'Register New Account';

    // Create the registration form
    const registerForm = document.createElement('form');
    registerForm.classList.add('login-form');
    registerForm.innerHTML = `
        <div class="name-container">
            <input type="text" placeholder="First Name" required>
            <input type="text" placeholder="Last Name" required>
        </div>
        <input type="email" placeholder="Email" required>
        <input type="password" placeholder="Password" required>
        <input type="password" placeholder="Confirm Password" required>
        <div class="gender-container">
            <select required>
                <option value="" disabled selected>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
        </div>
        <button type="submit">Register</button>
    `;

    // Append form elements to modal content
    modalContent.appendChild(closeModalBtn);
    modalContent.appendChild(modalFormTitle);
    modalContent.appendChild(registerForm);
    modal.appendChild(modalContent);

    // Append the modal to the root div
    root.appendChild(modal);

    // Show modal when "Create New Account" is clicked
    createAccountBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Close modal when "×" is clicked
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside of the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
