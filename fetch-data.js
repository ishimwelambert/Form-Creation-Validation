// Initialize the Async Function
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API endpoint
    const dataContainer = document.getElementById('api-data'); // Select the data container

    try {
        // Fetch data using the fetch API
        const response = await fetch(apiUrl); // Get response from the API
        
        // Check if the response is OK (status in the range 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        // Convert the response to JSON
        const users = await response.json(); // Parse JSON data

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a <ul> element for user list
        const userList = document.createElement('ul');

        // Loop through the users array
        users.forEach(user => {
            // Create a <li> element for each user
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set <li> text to user's name

            // Append the <li> to the <ul>
            userList.appendChild(listItem);
        });

        // Append the <ul> to the data container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle errors
        dataContainer.innerHTML = 'Failed to load user data.'; // Display error message
        console.error('Error fetching user data:', error); // Log error to the console
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    fetchUserData(); // Call the function to fetch user data when the DOM is fully loaded
});

