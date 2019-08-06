let productmenu = function() {
    let menulink = document.querySelectorAll('.menu-grid__item-title')

    menulink.forEach(function(productname) {
        productname.addEventListener('click', function(e) {
            e.preventDefault();

            let activeproduct = document.querySelector('.menu-grid__item--active');
            let currentproduct = e.target.closest('.menu-grid__item');

            if (activeproduct == currentproduct) {
                activeproduct.classList.remove('menu-grid__item--active');
                return;
            }

            if (!activeproduct) {
                currentproduct.classList.add('menu-grid__item--active')
                return;
            } 
            activeproduct.classList.remove('menu-grid__item--active');
            currentproduct.classList.add('menu-grid__item--active');
        });
    });
};

productmenu();