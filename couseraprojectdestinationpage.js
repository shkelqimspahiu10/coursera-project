const destinationList = document.getElementById('destinationList');

fetch('/recommendations', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(preferences)
})
  .then(response => response.json())
  .then(data => {
    data.forEach(destination => {
      const li = document.createElement('li');
      li.textContent = destination.name;
      destinationList.appendChild(li);
    });
  })
  .catch(error => console.error(error));
