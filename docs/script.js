// Paths to your JSON data files
const strainsCleanedPath = 'https://aiguy-x.github.io/thc-calculator/strains_cleaned.json';

// Fetch and populate the strain dropdown
fetch(strainsCleanedPath)
  .then(response => response.json())
  .then(strains => {
    const strainSelect = document.getElementById('strainSelect');
    strains.forEach(strain => {
      const option = document.createElement('option');
      option.value = strain.Name;
      option.textContent = strain.Name;
      strainSelect.appendChild(option);
    });
  })
  .catch(error => console.error('Error loading strains:', error));

// Event listener for the strain selection change
document.getElementById('strainSelect').addEventListener('change', function(event) {
  const selectedStrainName = event.target.value;
  const thcInput = document.getElementById('thcInput');
  const cbdInput = document.getElementById('cbdInput');

  // Fetch again or use cached data
  fetch(strainsCleanedPath)
    .then(response => response.json())
    .then(strains => {
      const selectedStrain = strains.find(strain => strain.Name === selectedStrainName);
      if (selectedStrain) {
        thcInput.value = selectedStrain['THC%'].match(/\d+/) ? selectedStrain['THC%'].match(/\d+/)[0] : 'N/A';
        cbdInput.value = selectedStrain['Other_Cannabinoids'].match(/\d+/) ? selectedStrain['Other_Cannabinoids'].match(/\d+/)[0] : 'N/A';
      }
    })
    .catch(error => console.error('Error finding selected strain data:', error));
});
