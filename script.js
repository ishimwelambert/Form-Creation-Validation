// Function to fetch user data from API
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API URL
    const dataContainer = document.getElementById('api-data'); // Selecting the data container
    const messages = []; // Array to hold error or success messages

    try {
        // Fetch the data from the API
        const response = await fetch(apiUrl);
        
        // Convert the response to JSON
        const users = await response.json();
        
        // Clear the "Loading..." text
        dataContainer.innerHTML = '';
        
        // Create a <ul> element to store the list of users
        const userList = document.createElement('ul');
        
        // Loop through the users array
        users.forEach(user => {
            // Create a <li> element for each user
            const listItem = document.createElement('li');
            
            // Set the <li> content to the user's name
            listItem.textContent = user.name;
            
            // Add the <li> to the <ul>
            userList.appendChild(listItem);
        });

        // Add the <ul> to the dataContainer
        dataContainer.appendChild(userList);

        // Push a success message to the messages array
        messages.push('User data successfully fetched and displayed.');
        
    } catch (error) {
        // Handle errors
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
        
        // Push an error message to the messages array
        messages.push('Error fetching user data.');
    }

    // Log all messages
    console.log(messages);
}

// Function to validate the registration form
function validateRegistrationForm() {
    const form = document.getElementById('registration-form');
    const feedback = document.getElementById('form-feedback');
    const messages = []; // Array to store form validation messages

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
            messages.push('Username must be at least 3 characters long.');
            isValid = false;
        }

        // Email Validation: Basic pattern for email format
        const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (!emailPattern.test(email)) {
            messages.push('Please enter a valid email address.');
            isValid = false;
        }

        // Password Validation: Must be at least 8 characters after trimming
        if (password.length < 8) {
            messages.push('Password must be at least 8 characters long.');
            isValid = false;
        }

        // Show feedback if form is invalid
        if (!isValid) {
            feedback.style.color = '#d8000c';  // Red for error
            feedback.style.backgroundColor = '#ffbaba';  // Light red background
            feedback.style.display = 'block';
            feedback.innerHTML = messages.join('<br>'); // Display the error messages
        } else {
            // Push a success message if the form is valid
            messages.push('Registration successful!');
            feedback.style.color = '#4F8A10';  // Green for success
            feedback.style.backgroundColor = '#DFF2BF';  // Light green background
            feedback.innerHTML = '<p>Registration successful!</p>';
            feedback.style.display = 'block';
        }
        
        // Log all messages
        console.log(messages);
    });
}

// Run the necessary scripts when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    fetchUserData();  // Fetch user data and display it
    validateRegistrationForm();  // Validate the registration form
});
