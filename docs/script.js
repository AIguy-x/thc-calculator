// Paths to your JSON data files
const strainsCleanedPath = 'https://aiguy-x.github.io/thc-calculator/strains_cleaned.json';

let strainsList = []; // To store the strains data

// Fetch and populate the strain dropdown
fetch(strainsCleanedPath)
    .then(response => response.json())
    .then(strains => {
        strainsList = strains; // Store the strains data for later use
        const strainSelect = document.getElementById('strainSelect');
        strains.forEach(strain => {
            const option = document.createElement('option');
            option.value = strain.Name;
            option.textContent = strain.Name;
            strainSelect.appendChild(option);
        });
    })
    .catch(error => console.error('Error loading strains:', error));

// Function to filter the dropdown based on search input
function filterStrains() {
    const searchInput = document.getElementById('strainSearch').value.toLowerCase();
    const strainSelect = document.getElementById('strainSelect');

    // Clear previous options
    strainSelect.innerHTML = '';

    // Filter and repopulate options
    const filteredStrains = strainsList.filter(strain =>
        strain.Name.toLowerCase().includes(searchInput)
    );

    filteredStrains.forEach(strain => {
        const option = document.createElement('option');
        option.value = strain.Name;
        option.textContent = strain.Name;
        strainSelect.appendChild(option);
    });
}

// Event listener for the strainSearch input
document.getElementById('strainSearch').addEventListener('input', filterStrains);

// Function for calculating dosage
function calculateDosage() {
    // Get the values from the input fields
    const thcPercentage = parseFloat(document.getElementById('thcPercentage').value);
    const weightGrams = parseFloat(document.getElementById('weight').value);
    const numberOfServings = parseFloat(document.getElementById('servings').value);

    // Check if the values are valid and greater than zero
    if (isNaN(thcPercentage) || isNaN(weightGrams) || isNaN(numberOfServings) ||
        thcPercentage <= 0 || weightGrams <= 0 || numberOfServings <= 0) {
        alert('Please enter valid numbers for all fields.');
        return; // Exit the function if the input is not valid
    }

    // Calculate total THC in milligrams (1 gram = 1000 milligrams)
    const totalThcMg = (thcPercentage / 100) * weightGrams * 1000;

    // Calculate THC per serving
    const thcPerServingMg = totalThcMg / numberOfServings;

    // Update the result element with the calculated dosage
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Each serving contains approximately ${thcPerServingMg.toFixed(2)} mg of THC.`;
}
