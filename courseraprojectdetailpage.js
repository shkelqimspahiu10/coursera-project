
const destinationId = 'destination1';

fetch(`/destinations/${destinationId}`)
  .then(response => response.json())
  .then(data => {
    // Populate the detail page with data
  })
  .catch(error => console.error(error));
