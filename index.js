// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateTimeInput = document.querySelector("#dateTime");
var $countryInput = document.querySelector("#country");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $shapeInput = document.querySelector("#shape");
var $durationInput = document.querySelector("#duration");
var $commentsInput = document.querySelector("#comments");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredData to sight data initially
var filteredData = sightingData;

// renderTable renders the filteredData to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {
    // Get get the current sight data object and its fields
    var sightData = filteredData[i];
    var fields = Object.keys(sightData);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the sight data  object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = sightData[field];
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var dateTimeInput = $dateTimeInput ? $dateTimeInput.value.trim().toLowerCase() : '';
  var cityInput = $cityInput ? $cityInput.value.trim().toLowerCase() : '';
  var stateInput = $stateInput ? $stateInput.value.trim().toLowerCase() : '';
  var countryInput = $countryInput ? $countryInput.value.trim().toLowerCase() : '';
  var shapeInput = $shapeInput ? $shapeInput.value.trim().toLowerCase() : '';
  var durationInput = $durationInput ? $durationInput.value.trim().toLowerCase() : ''; 
  var commentsInput = $commentsInput ? $commentsInput.value.trim().toLowerCase() : '';

  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  filteredData = sightingData.filter(x=> (x['datetime'] === dateTimeInput || dateTimeInput === '')).
  filter(y=> (y['city'] === cityInput || cityInput === '')).filter(z=> (z['state'] === stateInput || stateInput === '')).
  filter(m=>(m['country'] === countryInput || countryInput === '')).filter(n=>(n['shape'] === shapeInput 
  || shapeInput === '')).filter(r=> (r['durationMinutes'] === durationInput || durationInput === '')).filter(w=>(w['comments'] === commentsInput || commentsInput === ''));
  renderTable();
}

// Render the table for the first time on page load
renderTable();
