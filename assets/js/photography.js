document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.getElementById("category");
  
    dropdown.addEventListener("change", (event) => {
      const selected = event.target.value;
      const photos = document.querySelectorAll(".photo-gallery img");
  
      photos.forEach((photo) => {
        const category = photo.dataset.category;
  
        if (selected === "all" || category === selected) {
          photo.style.display = "block";
        } else {
          photo.style.display = "none";
        }
      });
    });
  });
  