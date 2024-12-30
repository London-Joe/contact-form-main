document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("input-form");
  const errorMessages = document.querySelectorAll(".error-message");
  const successToast = document.querySelector(".success-message");
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  const labels = document.querySelectorAll('.query-label');

  
  radioButtons.forEach((radio) => {
    radio.addEventListener("change", () => {
      labels.forEach((label) => label.classList.remove("active"));
      if (radio.checked) {
        radio.closest(".query-label").classList.add("active");
      }
    });
  });

  
  errorMessages.forEach((error) => (error.style.display = "none"));

  form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    let hasErrors = false;

    
    form.querySelectorAll("input, textarea").forEach((input) => {
      const errorMessage = input.closest(".field-group, .query-group")?.querySelector(".error-message");

      if (input.type === "radio") {
        const radioGroup = form.querySelectorAll(`input[name="${input.name}"]`);
        const isChecked = [...radioGroup].some((radio) => radio.checked);

        if (!isChecked) {
          errorMessage.style.display = "block";
          hasErrors = true;
        } else {
          errorMessage.style.display = "none";
        }
      } else if (input.type === "checkbox") {
        if (!input.checked) {
          errorMessage.style.display = "block";
          hasErrors = true;
        } else {
          errorMessage.style.display = "none";
        }
      } else {
        if (!input.value.trim()) {
          errorMessage.style.display = "block";
          hasErrors = true;
        } else {
          errorMessage.style.display = "none";
        }
      }
    });

    if (!hasErrors) {
      showSuccessToast();
      form.reset(); 

      
      labels.forEach((label) => label.classList.remove("active"));
    }
  });

  
  function showSuccessToast() {
    successToast.classList.add("show");
    setTimeout(() => {
      successToast.classList.remove("show");
    }, 3000); 
  }
});
