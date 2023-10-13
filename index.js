// document.addEventListener("DOMContentLoaded", function() {

//     function closeAllDropdowns(exceptId) {
//         let dropdowns = document.querySelectorAll('.dropdown-menu');
//         dropdowns.forEach(function(dropdown) {
//             if (dropdown.id !== exceptId) {
//                 dropdown.style.display = "none";

//                 // Assegura que a seta volte ao estado original quando o dropdown é fechado
//                 let arrowImg = dropdown.previousElementSibling.querySelector('img');
//                 if (arrowImg) {
//                     arrowImg.classList.remove('arrow-rotate');
//                 }
//             }
//         });
//     }

//     let navItems = document.querySelectorAll('.nav-item');
//     navItems.forEach(function(navItem) {
//         navItem.addEventListener("click", function(event) {
//             // Verifica se o item do menu é um dropdown
//             if (this.hasAttribute("data-toggle")) {
//                 event.preventDefault();  // Previne a ação padrão apenas para dropdowns

//                 let targetId = this.getAttribute("data-target");
//                 let dropdown = document.querySelector(targetId);
//                 let arrowImg = this.querySelector('img');

//                 if (dropdown.style.display === "block") {
//                     dropdown.style.display = "none";
//                     arrowImg.classList.remove('arrow-rotate');
//                 } else {
//                     closeAllDropdowns(targetId);
//                     dropdown.style.display = "block";
//                     arrowImg.classList.add('arrow-rotate');
//                 }
//             }

//             // Remove a classe 'active' de todos os itens do menu
//             navItems.forEach(function(item) {
//                 item.classList.remove('active');
//             });

//             // Adiciona a classe 'active' ao item do menu que foi clicado
//             this.classList.add('active');

//         });
//     });

//     // Fechar dropdowns ao clicar fora deles
//     document.addEventListener("click", function(event) {
//         if (!event.target.closest('.nav-link')) {
//             closeAllDropdowns();
//         }
//     });
// });

// Novo teste
document.addEventListener("DOMContentLoaded", function() {

    function closeAllDropdowns(exceptId) {
        let dropdowns = document.querySelectorAll('.dropdown-menu');
        dropdowns.forEach(function(dropdown) {
            if (dropdown.id !== exceptId) {
                dropdown.style.display = "none";

                // Assegura que a seta volte ao estado original quando o dropdown é fechado
                let arrowImg = dropdown.previousElementSibling.querySelector('img');
                if (arrowImg) {
                    arrowImg.classList.remove('arrow-rotate');
                }
            }
        });
    }

    let navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(function(navItem) {
        navItem.addEventListener("click", function(event) {
            // Verifica se o item do menu é um dropdown toggle
            if (this.hasAttribute("data-toggle")) {
                event.preventDefault();  // Previne a ação padrão apenas para os dropdown toggles

                let targetId = this.getAttribute("data-target");
                let dropdown = document.querySelector(targetId);
                let arrowImg = this.querySelector('img');

                if (dropdown.style.display === "block") {
                    dropdown.style.display = "none";
                    arrowImg.classList.remove('arrow-rotate');
                } else {
                    closeAllDropdowns(targetId);
                    dropdown.style.display = "block";
                    arrowImg.classList.add('arrow-rotate');
                }
            }

            // Remove a classe 'active' de todos os itens do menu
            navItems.forEach(function(item) {
                item.classList.remove('active');
            });

            // Adiciona a classe 'active' ao item do menu que foi clicado
            this.classList.add('active');
        });
    });

    // Fechar dropdowns ao clicar fora deles
    document.addEventListener("click", function(event) {
        if (!event.target.closest('.nav-link')) {
            closeAllDropdowns();
        }
    });
});


// Área do Main


