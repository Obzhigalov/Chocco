let feedback = function() {
    let slideswitch = document.querySelectorAll('.feedback-grid__switch')

    slideswitch.forEach(function(slideshow) {

        slideshow.addEventListener('click', function(e) {
            
            let activeslideswitch = document.querySelector('.feedback-grid__switch--active');
            let slideswitch1 = document.querySelector('.feedback-grid__switch--1');
            let slideswitch2 = document.querySelector('.feedback-grid__switch--2');
            let slideswitch3 = document.querySelector('.feedback-grid__switch--3');
            let currentslideswitch = e.target.closest('.feedback-grid__switch')
            let slide1 = document.querySelector('.feedback-card--1');
            let slide2 = document.querySelector('.feedback-card--2');
            let slide3 = document.querySelector('.feedback-card--3');
						let activeslide = document.querySelector('.feedback-card--active');

            if (currentslideswitch == activeslideswitch) {
                return;
						};

						if (currentslideswitch.className.search(/--1/) != -1) {
							slideswitch1.classList.add('feedback-grid__switch--active');
							activeslideswitch.classList.remove('feedback-grid__switch--active');
							activeslide.classList.remove('feedback-card--active');
							slide1.classList.add('feedback-card--active');
							return;
						}

						if (currentslideswitch.className.search(/--2/) != -1) {
							slideswitch2.classList.add('feedback-grid__switch--active');
							activeslideswitch.classList.remove('feedback-grid__switch--active');
							activeslide.classList.remove('feedback-card--active');
							slide2.classList.add('feedback-card--active');
							return;
						}

						if (currentslideswitch.className.search(/--3/) != -1) {
							slideswitch3.classList.add('feedback-grid__switch--active');
							activeslideswitch.classList.remove('feedback-grid__switch--active');
							activeslide.classList.remove('feedback-card--active');
							slide3.classList.add('feedback-card--active');
							return;
						}
        });
    });
};
feedback();