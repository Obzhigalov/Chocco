let menu = function(elems) {
    let burgerwrap = document.querySelector(elems.burgerwrap);
    let burger = document.querySelector(elems.burger);
    let nav = document.querySelector(elems.nav);
    let navlist = document.querySelector(elems.navlist);
    let body = document.querySelector(elems.body);


    let _togglenav = function() {
        event.preventDefault();
        burger.classList.toggle('burger--active');
        nav.classList.toggle('nav--active');
        body.classList.toggle('body--menu');
    };

    let _removenav = function() {
        burger.classList.remove('burger--active');
        nav.classList.remove('nav--active');
        body.classList.remove('body--menu');
    };

    let menuevent = function() {
        burgerwrap.addEventListener('click', _togglenav);
        navlist.addEventListener('click', function(click){
            target = click.target;

            if (target.classList.contains('nav-list__link')) {
                _removenav();
            }
        })
    };

    return {
        navexist: menuevent
    }
}({
    burgerwrap: '.burger-wrap',
    burger: '.burger',
    nav: '.nav',
    navlist: '.nav-list',
    body: '.body'
});

menu.navexist();
