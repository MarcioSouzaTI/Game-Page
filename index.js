document.addEventListener("DOMContentLoaded", function() {
    let dropdownToggles = document.querySelectorAll('[data-toggle="dropdown"]');
    
    dropdownToggles.forEach(function(toggle) {
        toggle.addEventListener("click", function(event) {
            event.preventDefault(); // Previne o comportamento padrão do link
            
            let dropdown = this.nextElementSibling;
            if (dropdown.style.display === "block") {
                dropdown.style.display = "none";
            } else {
                dropdown.style.display = "block";
            }
        });
    });
    
    // Esconder o dropdown quando clicar fora dele
    document.addEventListener("click", function(event) {
        if (!event.target.closest('.nav-link')) {
            let dropdowns = document.querySelectorAll('.dropdown-menu');
            dropdowns.forEach(function(dropdown) {
                dropdown.style.display = "none";
            });
        }
    });
});
