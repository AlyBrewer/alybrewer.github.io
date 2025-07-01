document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("XbvHB_ZQEvpO8lCwL"); // Replace with your public key
  
    const form = document.getElementById("contact-form");
    const response = document.getElementById("form-response");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      
      console.log('Sending email with:', {
        service: "service_555pobi",
        template: "contact_form",
        publicKey: "XbvHB_ZQEvpO8lCwL",
      });
      
  
      emailjs.sendForm("service_555pobi", "contact_form", this)
        .then(function () {
          response.textContent = "Thanks! Your message has been sent.";
          response.style.color = "green";
          form.reset();
        }, function (error) {
          response.textContent = "Oops! Something went wrong.";
          response.style.color = "red";
          console.error("EmailJS error:", error);
        });
    });
  });
  