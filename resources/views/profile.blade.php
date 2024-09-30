<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile Page</title>
    <link rel="stylesheet" href="{{ asset('css/profile.css') }}">
</head>
<body>

    <header>
        <nav>
            <div class="logo">
                <a href="/">Urian Society</a>
            </div>
            <ul class="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/settings">Settings</a></li>
                <li><a href="/logout">Logout</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="profile-container">
            <div class="profile-card">
                <h1>Edit Profile</h1>
                <form id="profileForm">
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" value="Marconi Dominyx G. Asis" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" value="marconidominyx@gmail.com" required>
                    </div>
                    <div class="form-group">
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" value="marconidominyx" required>
                    </div>
                    <div class="form-group">
                        <label for="location">Location:</label>
                        <input type="text" id="location" name="location" value="Butuan City, Philippines" required>
                    </div>
                    <button type="submit">Save Changes</button>
                </form>
                <p id="successMessage" style="color: green; display: none;">Profile updated successfully!</p>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Urian Society. All rights reserved.</p>
    </footer>

    <script>
        document.getElementById('profileForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Collect form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const username = document.getElementById('username').value;
            const location = document.getElementById('location').value;

            // Here you can send the data to your server using AJAX or fetch (not implemented in this simple example)
            // For now, we'll just display a success message
            document.getElementById('successMessage').style.display = 'block';

            // Optionally, you could clear the form or reset it
            this.reset();
        });
    </script>

</body>
</html>
