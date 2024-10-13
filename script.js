// Function to fetch user data from API
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API URL
    const dataContainer = document.getElementById('api-data'); // Selecting the data container

    try {
        // Fetch the data from the API
        const response = await fetch(apiUrl);
        
        // Convert the response to JSON
        const users = await response.json();
        
        // Clear the "Loading..." message
        dataContainer.innerHTML = '';
        
        // Create a <ul> element to store the list of users
        const userList = document.createElement('ul');
        
        // Loop through the users array
        users.forEach(user => {
            // Create a <li> element for each user
            const listItem = document.createElement('li');
            
            // Set the <li> content to the user's name
            listItem.textContent = user.name;
            
            // Append the <li> to the <ul>
            userList.appendChild(listItem);
        });
        
        // Append the <ul> to the dataContainer
        dataContainer.appendChild(userList);
        
    } catch (error) {
        // Handle errors
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Function to validate the registration form
function validateRegistrationForm() {
    const form = document.getElementById('registration-form');
    const feedback = document.getElementById('form-feedback');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the form from submitting
        
        let isValid = true;
        feedback.innerHTML = '';  // Clear previous feedback
        feedback.style.display = 'none';  // Hide feedback initially
        
        // Trim values to remove leading/trailing spaces
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Username Validation: Must be at least 3 characters after trimming
        if (username.length < 3) {
            feedback.innerHTML += '<p>Username must be at least 3 characters long.</p>';
            isValid = false;
        }

        // Email Validation: Basic pattern for email format
        const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (!emailPattern.test(email)) {
            feedback.innerHTML += '<p>Please enter a valid email address.</p>';
            isValid = false;
        }

        // Password Validation: Must be at least 8 characters after trimming
        if (password.length < 8) {
            feedback.innerHTML += '<p>Password must be at least 8 characters long.</p>';
            isValid = false;
        }

        // Show feedback if form is invalid
        if (!isValid) {
            feedback.style.color = '#d8000c';  // Red for error
            feedback.style.backgroundColor = '#ffbaba';  // Light red background
            feedback.style.display = 'block';
        } else {
            // Show success message if form is valid
            feedback.style.color = '#4F8A10';  // Green for success
            feedback.style.backgroundColor = '#DFF2BF';  // Light green background
            feedback.innerHTML = '<p>Registration successful!</p>';
            feedback.style.display = 'block';
        }
    });
}

// Run the necessary scripts when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    fetchUserData();  // Fetch user data and display it
    validateRegistrationForm();  // Validate the registration form
});
