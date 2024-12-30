const radioButtons = document.querySelectorAll('input[type="radio"]');
const labels = document.querySelectorAll('.query-label');

// Add a click event listener to each radio button
radioButtons.forEach((radio) => {
  radio.addEventListener('change', () => {
    // Remove the "active" class from all labels
    labels.forEach((label) => label.classList.remove('active'));
    
    // Add the "active" class to the selected radio button's parent label
    if (radio.checked) {
      radio.parentElement.classList.add('active');
    }
  });
});
