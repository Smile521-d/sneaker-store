// Select the button and the sneaker display container
const loadSneakersButton = document.getElementById('loadSneakers');
const sneakerList = document.getElementById('sneakerList');

// Attach event listener to the button
loadSneakersButton.addEventListener('click', async () => {
    try {
        // Fetch data from the API
        const response = await fetch('/api/sneakers');
        
        // Convert response into JSON format
        const sneakers = await response.json();

        // Clear previous content
        sneakerList.innerHTML = '';

        // Loop through sneakers and display them dynamically
        sneakers.forEach(sneaker => {
            const sneakerItem = document.createElement('div');
            sneakerItem.classList.add('sneaker-item'); // Add CSS class for styling

            // Populate sneaker information
            sneakerItem.innerHTML = `
                <img src="${sneaker.image}" alt="${sneaker.name}">
                <h3>${sneaker.name}</h3>
                <p><strong>Brand:</strong> ${sneaker.brand}</p>
                <p><strong>Size:</strong> ${sneaker.size}</p>
                <p>${sneaker.description}</p>
            `;

            // Append the sneaker item to the sneaker list container
            sneakerList.appendChild(sneakerItem);
        });
    } catch (error) {
        console.error('Error fetching sneakers:', error);
    }
});
