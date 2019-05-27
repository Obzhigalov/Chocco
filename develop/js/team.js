let team = function(elems) {
    let title = document.querySelector(elems.title);
    let linkswitch = document.querySelector(elems.linkswitch);
    let subtitle = document.querySelector(elems.subtitle);
    let descr = document.querySelector(elems.descr);

    let toggleteam = function() {
        
        event.preventDefault();
        linkswitch.classList.toggle('team-grid__switch--active');
        subtitle.classList.toggle('team-grid__subtitle--active');
        descr.classList.toggle('team-grid__descr--active');
    };

    let teamevent = function() {
        console.log('lol');
        linkswitch.addEventListener('click', toggleteam);
    };

    return {
        teampopup: teamevent
    }
}({
    title: '.team-grid__title',
    linkswitch: '.team-grid__switch',
    subtitle: '.team-grid__subtitle',
    descr: '.team-grid__descr'
});

team.teampopup();