// JavaScript code here
// Fetch options for each dropdown on page load
window.onload = function() {
    fetchOptions('/bedrooms', 'beds');
    fetchOptions('/bathrooms', 'baths');
    fetchOptions('/sizes', 'size');
    fetchOptions('/zip_codes', 'zip_code');
};

// JavaScript function to send data and receive predicted price
function sendData() {
    const form = document.getElementById('predictionForm');
    const formData = new FormData(form);

    fetch('/predict', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(price => {
        const predictedPriceElement = document.getElementById("predictedPrice");
        predictedPriceElement.innerHTML = "Price: INR " + price;
        
        // Add dynamic features and Bootstrap styles
        predictedPriceElement.classList.remove("animate__fadeInDown"); // Remove animation class
        predictedPriceElement.style.backgroundColor = "#007bff"; // Change background color
        predictedPriceElement.style.color = "#fff"; // Change text color
        predictedPriceElement.style.padding = "15px"; // Add padding
        predictedPriceElement.style.borderRadius = "5px"; // Add border radius
        predictedPriceElement.classList.add("animate__fadeInDown"); // Add animation class back
    });
}

// Function to fetch options for dropdowns
function fetchOptions(endpoint, dropdownId) {
    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            const dropdown = document.getElementById(dropdownId);
            dropdown.innerHTML = '<option value="" disabled selected>Select an option</option>';
            data.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                dropdown.appendChild(optionElement);
            });
        });
}
