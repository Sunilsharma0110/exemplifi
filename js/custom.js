

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const toggleIcon = document.getElementById('toggleIcon');

    toggleButton.addEventListener('click', function() {
     
        if (toggleIcon.textContent === '☰') {
            toggleIcon.textContent = '✖'; 
        } else {
            toggleIcon.textContent = '☰'; 
        }
    });
});





document.addEventListener('DOMContentLoaded', function () {
const megaMenus = document.querySelectorAll('.megamenu');

megaMenus.forEach(function (megamenu) {

const dropdownMenu = megamenu.querySelector('.dropdown-menu');


// Open on hover for larger screens (hover only on desktop)
if (window.innerWidth > 767) {
  megamenu.addEventListener('mouseenter', function () {
    dropdownMenu.classList.add('show');
  });

  megamenu.addEventListener('mouseleave', function () {
    dropdownMenu.classList.remove('show');
  });
}

// Open on click for mobile (click only for mobile)
megamenu.addEventListener('click', function () {
  if (window.innerWidth <= 767) {

    dropdownMenu.classList.toggle('show');
  }
});
});
});

