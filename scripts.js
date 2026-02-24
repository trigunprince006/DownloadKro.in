const faqs = document.querySelectorAll(".faqs");

faqs.forEach(function(faq) {
  faq.addEventListener("click", function() {
    
    // Select the answer inside same parent
    const answer = faq.nextElementSibling;
    
    // Toggle answer
    answer.classList.toggle("ans");
    
    // Toggle question style
    faq.classList.toggle("Clickedfaqs");
    
    // Rotate arrow
    const arrow = faq.querySelector(".material-icons");
    arrow.classList.toggle("rotate");
  });
});