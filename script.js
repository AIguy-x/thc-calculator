document.addEventListener('DOMContentLoaded', function () {
  var cannabisTypes = {
    general: { thc: 10, cbd: 1 },
    schwag: { thc: 5, cbd: 0.5 },
    mids: { thc: 10, cbd: 1 },
    topShelf: { thc: 20, cbd: 2 },
    shakeTrim: { thc: 10, cbd: 1 },
    hash: { thc: 40, cbd: 2 },
    kief: { thc: 50, cbd: 2 },
    concentrates: { thc: 60, cbd: 2 },
    shatter: { thc: 70, cbd: 2 },
    bho: { thc: 80, cbd: 2 },
    distillate: { thc: 90, cbd: 2 },
    rso: { thc: 60, cbd: 10 },
    whiteWidow: { thc: 18, cbd: 0.2 },
    girlScoutCookies: { thc: 28, cbd: 0.2 },
    chemdawg: { thc: 32, cbd: 0.1 },
    superLemonHaze: { thc: 25, cbd: 0.1 },
    amnesiaHaze: { thc: 21, cbd: 1 },
    blueDream: { thc: 20, cbd: 2 },
    acdc: { thc: 1, cbd: 20 },
    charlottesWeb: { thc: 1, cbd: 17 },
  };

  var cannabisTypeSelect = document.querySelector('#cannabisType');
  Object.keys(cannabisTypes).forEach(function (type) {
    var option = document.createElement('option');
    option.value = type;
    option.innerText = type;
    cannabisTypeSelect.append(option);
  });

  cannabisTypeSelect.addEventListener('change', function (event) {
    var thcPercentageInput = document.querySelector('#thcPercentage');
    var cbdPercentageInput = document.querySelector('#cbdPercentage');
    var selectedType = event.target.value;
    thcPercentageInput.value = cannabisTypes[selectedType].thc;
    cbdPercentageInput.value = cannabisTypes[selectedType].cbd;
  });

  document.querySelector('#calculator').addEventListener('submit', function (event) {
    event.preventDefault();
    var calculatedValue; // Replace this with your actual calculation logic
    document.querySelector('#result').innerText = calculatedValue;
  });

  document.querySelector('#weightOneEighth').addEventListener('click', function () {
    document.querySelector('#cannabisWeight').value = 3.5;
  });

  document.querySelector('#weightOneFourth').addEventListener('click', function () {
    document.querySelector('#cannabisWeight').value = 7;
  });

  document.querySelector('#weightOneHalf').addEventListener('click', function () {
    document.querySelector('#cannabisWeight').value = 14;
  });

  document.querySelector('#weightOneOz').addEventListener('click', function () {
    document.querySelector('#cannabisWeight').value = 28;
  });
});