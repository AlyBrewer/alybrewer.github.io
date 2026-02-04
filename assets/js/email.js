document.addEventListener("DOMContentLoaded", function () { // Wait for the DOM to be ready before attaching logic to the form
    emailjs.init("XbvHB_ZQEvpO8lCwL"); // Initialize the EmailJS service
  
    const form = document.getElementById("contact-form");
    const response = document.getElementById("form-response");
  
    form.addEventListener("submit", function (e) { // Listen for the form's submit event
      e.preventDefault();
      
      // Log submission data to the console for debugging
      console.log('Sending email with:', {
        service: "service_555pobi",
        template: "contact_form",
        publicKey: "XbvHB_ZQEvpO8lCwL",
      });
      
  
      emailjs.sendForm("service_555pobi", "contact_form", this) // Use the EmailJS SDK to send the form content
        .then(function () { // Success callback
          response.textContent = "Thanks! Your message has been sent.";
          response.style.color = "green";
          form.reset();
        }, function (error) { // Error callback
          response.textContent = "Oops! Something went wrong.";
          response.style.color = "red";
          console.error("EmailJS error:", error);
        });
    });
  });
  