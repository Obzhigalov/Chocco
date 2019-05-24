let menu = function(elems) {
    let burger = document.querySelector(elems.burger);
    let nav = document.querySelector(elems.nav);
    let link = document.querySelector(elems.link);
    let navlist = document.querySelector(elems.navlist);

    let _togglenav = function() {
        burger.classList.toggle('burger--active');
        nav.classList.toggle('nav--active');
    };

    let menuevent = function() {
        burger.addEventListener('click', _togglenav);
        navlist.addEventListener('click', function(click){
            target = click.target;

            if (target.classList.contains('nav-list__link')) {
                _togglenav();
            }
        })
    };

    return {
        navexist: menuevent
    }
}({
    burger: '.burger',
    nav: '.nav',
    navlist: '.nav-list',
    link:'.nav-list__link'
});

menu.navexist();