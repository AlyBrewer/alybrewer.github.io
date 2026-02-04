document.addEventListener("DOMContentLoaded", () => { // Wait for the DOM to fully load before running the script to avoid targeting null elements
    const dropdown = document.getElementById("category"); // Select the category dropdown menu from the DOM
  
    dropdown.addEventListener("change", (event) => { // Listen for a 'change' event when the user selects a new category
      const selected = event.target.value;
      const photos = document.querySelectorAll(".photo-gallery img");
  
      photos.forEach((photo) => {
        const category = photo.dataset.category;
        
        // Logic: Show photo if it matches the selection or if 'all' is chosen
        if (selected === "all" || category === selected) {
          photo.style.display = "block";
        } else {
          photo.style.display = "none";
        }
      });
    });
  });
  