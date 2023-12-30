// Paths to your JSON data files
const strainsCleanedPath = 'https://aiguy-x.github.io/thc-calculator/strains_cleaned.json';

// Fetch and populate the strain dropdown
fetch(strainsCleanedPath)
  .then(response => response.json())
  .then(strains => {
    const strainSelect = document.getElementById('strainSelect');
    strains.forEach(strain => {
      const option = document.createElement('option');
      option.value = strain.Name; // Assuming 'Name' is the key for the strain name
      option.textContent = strain.Name; // The text shown in the dropdown
      strainSelect.appendChild(option);
    });
  })
  .catch(error => console.error('Error loading strains:', error));

// Event listener for the strain selection change
document.getElementById('strainSelect').addEventListener('change', function(event) {
  const selectedStrainName = event.target.value;
  const thcInput = document.getElementById('thcPercentage');
  const cbdInput = document.getElementById('cbdPercentage');

  // Fetch again or use cached data
  fetch(strainsCleanedPath)
    .then(response => response.json())
    .then(strains => {
      const selectedStrain = strains.find(strain => strain.Name === selectedStrainName);
      if (selectedStrain) {
        // Update THC and CBD percentages
        thcInput.value = selectedStrain['THC%'].match(/\d+/) ? selectedStrain['THC%'].match(/\d+/)[0] + '%' : 'N/A';
        cbdInput.value = selectedStrain['Other_Cannabinoids'].match(/\d+/) ? selectedStrain['Other_Cannabinoids'].match(/\d+/)[0] + '%' : 'N/A';
      }
    })
    .catch(error => console.error('Error finding selected strain data:', error));
});

// Event listener for the calculator form submission
document.getElementById('calculator').addEventListener('submit', function(event) {
  event.preventDefault();
  // Here, you would call the function that performs the calculation based on user inputs
  // Example: calculateDosage();
});

// Example function for calculation (to be implemented)
function calculateDosage() {
  // Your calculation logic here
  // Example: Update the result element with the calculated dosage
  const resultElement = document.getElementById('result');
  resultElement.textContent = 'Calculated Dosage: ...'; // Replace with actual result
  // You'll need to retrieve the values from the input fields and perform your calculation logic
}
