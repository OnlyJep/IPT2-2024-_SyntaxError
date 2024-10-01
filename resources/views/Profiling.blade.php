<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ asset('css/profiling.css') }}">
    <title>Profiling Form</title>
</head>
<body>
<div class="background" id="background1" style="background-image: url('../urianzr.jpg');"></div>
<div class="background hidden" id="background2" style="background-image: url('../bap.jpg');"></div>

    <div class="container">
        <form>
            <div class="form-section">
                <div class="left">
                    <h2>STUDENT PROFILE</h2>
                    <label for="family-name">* Family Name</label>
                    <input type="text" id="family-name" required>

                    <label for="given-name">Given Name</label>
                    <input type="text" id="given-name">

                    <label for="middle-name">Middle Name</label>
                    <input type="text" id="middle-name">

                    <label for="dob">* Date of Birth (mm/dd/year)</label>
                    <input type="date" id="dob" required>

                    <label for="place-of-birth">* Place of Birth</label>
                    <input type="text" id="place-of-birth" required>

                    <label for="address">House#/Street Name & Barangay</label>
                    <input type="text" id="address">

                    <label for="region">Region</label>
                    <input type="text" id="region">

                    <label for="province">Province</label>
                    <input type="text" id="province">

                    <label for="municipality">Municipality</label>
                    <input type="text" id="municipality">

                    <label for="religion">Religion</label>
                    <input type="text" id="religion">

                    <label for="citizenship">Citizenship</label>
                    <input type="text" id="citizenship">

                    <label for="contact-number">Contact Number(s) Phone</label>
                    <input type="tel" id="contact-number">

                    <label for="language-spoken">Language Spoken</label>
                    <input type="text" id="language-spoken">

                    <label for="email">E-mail</label>
                    <input type="email" id="email">
                </div>

                <div class="right">
                    <label for="gender">Gender</label>
                    <input type="text" id="gender">

                    <label for="blood-type">* Blood Type</label>
                    <input type="text" id="blood-type" required>

                    <label for="height">Height</label>
                    <input type="text" id="height">

                    <label for="civil-status">Civil Status</label>
                    <input type="text" id="civil-status">

                    <label for="address2">House#/Street Name & Barangay</label>
                    <input type="text" id="address2">

                    <label for="region2">Region</label>
                    <input type="text" id="region2">

                    <label for="province2">Province</label>
                    <input type="text" id="province2">

                    <label for="municipality2">Municipality</label>
                    <input type="text" id="municipality2">

                    <label for="mobile-number">Mobile #</label>
                    <input type="tel" id="mobile-number">

                    <label for="sms-option">Option: (To receive SMS Broadcast)</label>
                    <input type="checkbox" id="sms-option">
                </div>
            </div>

            <!-- Move the school sections to be directly below the profile section -->
            <div class="form-section">
                <div class="left">
                    <h2>SCHOOL LAST ATTENDED IN ELEMENTARY</h2>
                    <label for="elem-school-name">Name of School</label>
                    <input type="text" id="elem-school-name">

                    <label for="elem-address">Address</label>
                    <input type="text" id="elem-address">

                    <label for="elem-year-graduated">Year Graduated</label>
                    <input type="text" id="elem-year-graduated">

                    <label for="elem-type">Type of School</label>
                    <input type="text" id="elem-type">
                </div>

                <div class="right">
                    <h2>SCHOOL LAST ATTENDED IN SENIOR HIGH SCHOOL</h2>
                    <label for="senior-high-name">Name of School</label>
                    <input type="text" id="senior-high-name">

                    <label for="senior-high-address">Address</label>
                    <input type="text" id="senior-high-address">

                    <label for="senior-high-year-graduated">Year Graduated</label>
                    <input type="text" id="senior-high-year-graduated">

                    <label for="senior-high-type">Type of School</label>
                    <input type="text" id="senior-high-type">
                </div>
            </div>

            <div class="form-section">
                <div class="left">
                    <h2>SCHOOL LAST ATTENDED IN JUNIOR HIGH SCHOOL</h2>
                    <label for="junior-high-name">Name of School</label>
                    <input type="text" id="junior-high-name">

                    <label for="junior-high-address">Address</label>
                    <input type="text" id="junior-high-address">

                    <label for="junior-high-year-graduated">Year Graduated</label>
                    <input type="text" id="junior-high-year-graduated">

                    <label for="junior-high-type">Type of School</label>
                    <input type="text" id="junior-high-type">
                </div>

                <div class="right">
                    <h2>SCHOOL LAST ATTENDED IN COLLEGE AND MASTER'S DEGREE SCHOOL</h2>
                    <label for="college-name">Name of School</label>
                    <input type="text" id="college-name">

                    <label for="college-address">Address</label>
                    <input type="text" id="college-address">

                    <label for="college-year-graduated">Year Graduated</label>
                    <input type="text" id="college-year-graduated">

                    <label for="college-type">Type of School</label>
                    <input type="text" id="college-type">
                </div>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>

    <script>
    let current = 0;
    const backgrounds = ['url("../urianzr.jpg")', 'url("../bap.jpg")'];
    const backgroundElements = document.querySelectorAll('.background');

    // Initialize the background images
    backgroundElements.forEach((bg, index) => {
        bg.style.backgroundImage = backgrounds[index % backgrounds.length];
        if (index === 0) {
            bg.classList.add('show'); // Start with the first image shown
        }
    });

    // Function to change the background
    function changeBackground() {
        // Fade out the current background
        backgroundElements[current].classList.remove('show');

        // Update the current index
        current = (current + 1) % backgrounds.length;

        // Show the next background and fade in
        backgroundElements[current].classList.add('show'); // Fade in the next image
    }

    // Change background every 15 seconds (10 seconds for display + 5 seconds for transition)
    setInterval(changeBackground, 15000); // Adjusted to 15 seconds for each transition
    </script>
</body>
</html>