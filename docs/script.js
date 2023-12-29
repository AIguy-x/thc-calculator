// Paths to your JSON data files
const flavorVsEffectJsonPath = 'https://aiguy-x.github.io/thc-calculator/flavorvseffect.json';
const leaflyStrainDataJsonPath = 'https://aiguy-x.github.io/thc-calculator/leafly_strain_data.json';
const strainsCleanedJsonPath = 'https://aiguy-x.github.io/thc-calculator/strains_cleaned.json';

// Fetch and use the flavor vs effect data as an example
fetch(flavorVsEffectJsonPath)
  .then(response => response.json())
  .then(data => {
    // Example of what you might do with the data:
    const strainSelect = document.getElementById('strain');
    data.forEach(item => {
      const option = document.createElement('option');
      option.value = item.name; // Assuming your JSON has a 'name' field
      option.textContent = item.name;
      strainSelect.appendChild(option);
    });
    // Rest of your code that depends on this data
  })
  .catch(error => {
    console.error('Error fetching flavor vs effect data:', error);
  });

// Event listener for the calculator form submission
document.getElementById('calculator').addEventListener('submit', function(event) {
  event.preventDefault();
  // Call your calculation function here
  // For example:
  calculateDosage();
});

function calculateDosage() {
  // Implement your dosage calculation logic here
  // Update the result element with the calculated dosage
  const resultElement = document.getElementById('result');
  resultElement.textContent = 'Calculated Dosage: ...'; // Replace with actual result
}
