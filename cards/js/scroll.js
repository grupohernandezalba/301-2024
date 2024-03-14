    document.addEventListener("DOMContentLoaded", function(event) {

        const navbar = document.getElementById("navbar");
        window.onscroll = function() {revisarScroll()};

        function revisarScroll() {
            if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
                navbar.setAttribute("data-bs-theme", "dark"); 
            } else {
                navbar.setAttribute("data-bs-theme", "light"); 
            }
        }

    });
