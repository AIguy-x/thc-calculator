// Paths to your JSON data files
const strainsCleanedPath = 'https://aiguy-x.github.io/thc-calculator/strains_cleaned.json';

// Fetch and populate the strain dropdown
fetch(strainsCleanedPath)
  .then(response => response.json())
  .then(strains => {
    const strainSelect = document.getElementById('strainSelect'); // Ensure this is the correct ID for your select element
    strains.forEach(strain => {
      const option = document.createElement('option');
      option.value = strain.Name; // Use 'Name' from your 'strains_cleaned.json'
      option.textContent = strain.Name; // Use 'Name' for the dropdown text as well
      strainSelect.appendChild(option);
    });
  })
  .catch(error => console.error('Error loading strains:', error));

// Event listener for the strain selection change
document.getElementById('strainSelect').addEventListener('change', function(event) {
  const selectedStrainName = event.target.value;
  const thcInput = document.getElementById('thcInput'); // Make sure this is the correct ID for your THC input
  const cbdInput = document.getElementById('cbdInput'); // Make sure this is the correct ID for your CBD input
  
  // Find the selected strain data
  fetch(strainsCleanedPath)
    .then(response => response.json())
    .then(strains => {
      const selectedStrain = strains.find(strain => strain.Name === selectedStrainName);
      if (selectedStrain) {
        // Update THC and CBD percentages
        thcInput.value = selectedStrain['THC%'].match(/\d+/)[0]; // Extracts the number from strings like 'THC 23%'
        cbdInput.value = selectedStrain['Other_Cannabinoids'].match(/\d+/)[0] || '0'; // Extracts the number, defaults to '0' if not found
      }
    })
    .catch(error => console.error('Error finding selected strain data:', error));
});
