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

// Ensure that the fetchUserData function runs only after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
