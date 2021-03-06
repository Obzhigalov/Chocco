var md = new MobileDetect(window.navigator.userAgent),
isMobile = md.mobile();

let ops = function() {
    const sections = $(".section")
    const sectionWrap = $(".section-wrap")
    let inscroll = false;

    let transform = function(sectionNdx) {

        if(!inscroll) {
            inscroll = true;
        
        let position = sectionNdx*-100 + "%";


        sections
        .eq(sectionNdx)
        .addClass("is-active")
        .siblings()
        .removeClass("is-active");

        $(".pagination__item")
        .eq(sectionNdx)
        .addClass("pagination__item--active")
        .siblings()
        .removeClass("pagination__item--active");

        sectionWrap.css({
            transform: `translateY(${position})`,
            "-webkit-transform": `translateY(${position})`
        });

        setTimeout(function() {

            inscroll = false;

        }, 700)
        };
    };

    let defineSections = function(sections) {
        let activeSection = sections.filter(".is-active");

        return {
            activeSection: activeSection,
            nextSection: activeSection.next(),
            prevSection: activeSection.prev()
        };
    };


    let scrollTo = function(direction) {

        let section = defineSections(sections);

        let modalActive = document.querySelector('.order-modal-wrap--active');
        let navActive = document.querySelector('.nav--active');

        if(direction === "up" && section.nextSection.length && !modalActive && !navActive) {
            transform(section.nextSection.index());
        }

        if(direction === "down" && section.prevSection.length && !modalActive && !navActive) {
            transform(section.prevSection.index());
        }
    }

    $(".wrapper").on({
        wheel:function(e) {
            const deltaY = e.originalEvent.deltaY;
            console.log(deltaY);
            const direction = deltaY > 0 ? "up" : "down";

            scrollTo(direction);
        },
        touchmove: e => e.preventDefault()
        
    });

    if(isMobile) {
        $(window).swipe({
            swipe: (event, direction) => {
                scrollTo(direction);
            }
            
        });
    };

    $("[data-scroll-to]").on('click', function(e) {
        e.preventDefault();
        transform(parseInt($(e.target).data("scroll-to")))
    });
};

ops();
var xStart, yStart = 0; 

