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
        document.getElementById("predictedPrice").innerHTML = "Price: INR " + price;
    });
}
