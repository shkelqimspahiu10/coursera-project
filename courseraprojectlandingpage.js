const form = document.getElementById('preferenceForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const preferences = {
    interests: form.interests.value,
    budget: form.budget.value,
    travelStyle: form.travelStyle.value
  };

  // Send preferences to server for recommendations
  // ...
});
