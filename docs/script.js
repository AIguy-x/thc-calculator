// Your existing strainsList and fetch logic...

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

  // Make sure the dropdown is visible when there are matching options
  if (filteredStrains.length > 0) {
    strainSelect.size = Math.min(filteredStrains.length, 5); // Adjust size based on matches, up to a max of 5
    strainSelect.style.display = 'block'; // Ensure the select dropdown is visible
  } else {
    strainSelect.size = 0;
    strainSelect.style.display = 'none'; // Hide the select dropdown if no matches
  }
}

// Event listener for the strainSearch input
document.getElementById('strainSearch').addEventListener('input', filterStrains);

// Your existing calculateDosage function...
// Your existing strainsList and fetch logic...

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
  
    // Make sure the dropdown is visible when there are matching options
    if (filteredStrains.length > 0) {
      strainSelect.size = Math.min(filteredStrains.length, 5); // Adjust size based on matches, up to a max of 5
      strainSelect.style.display = 'block'; // Ensure the select dropdown is visible
    } else {
      strainSelect.size = 0;
      strainSelect.style.display = 'none'; // Hide the select dropdown if no matches
    }
  }
  
  // Event listener for the strainSearch input
  document.getElementById('strainSearch').addEventListener('input', filterStrains);
  
  // Your existing calculateDosage function...
  