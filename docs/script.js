// Event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
  const content = document.getElementById("content");

  const links = document.querySelectorAll("#sidebar a");
  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      loadContent(this.id);  // Function to load new content based on clicked link
    });
  });
});

// Placeholder function to load new content based on clicked link
function loadContent(id) {
  // Your code to replace content goes here. This could involve fetching
  // another HTML file or otherwise replacing the content of the "content" div.
}

document.addEventListener("DOMContentLoaded", function() {
  fetch('pages/about-me.html')
    .then(response => response.text())
    .then(text => {
      document.getElementById('about-me-section').innerHTML = text;
    });
});
