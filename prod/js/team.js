let team = function() {
	let linkswitch = document.querySelectorAll('.team-grid__switch');


			linkswitch.forEach(function(itemname) {

				itemname.addEventListener('click', function(e) {

					e.preventDefault();
						if (e.target.className != 'team-grid__switch') return; 
            let activeItem = document.querySelector('.team-grid__item--active');
						let currentItem = e.target.closest('.team-grid__item');
            
            if (!activeItem) {
              currentItem.classList.add('team-grid__item--active');
              return;
            }
            if (activeItem == currentItem) {
              currentItem.classList.remove('team-grid__item--active'); 
              return;
            }
            activeItem.classList.remove('team-grid__item--active');
            currentItem.classList.add('team-grid__item--active');
					// e.preventDefault();

					// let activeitem = document.querySelector('.team-grid__item--active');

					// if (activeitem) {
					// 	activeitem.classList.remove('team-grid__item--active');
					// }
					
					// let currentitem = e.target.closest('.team-grid__item');


					// if (!activeitem) {

					// 	currentitem.classList.remove('team-grid__item--active');

					// } else {

					// 		currentitem.classList.add('team-grid__item--active')

					// 	}

// 						e.preventDefault();

// 						let activeitem = document.querySelector('.team-grid__item--active');
					
// 						if(activeitem){
// 							activeitem.classList.remove('team-grid__item--active');
// 						}

// 						if(!activeitem || activeitem.querySelector('.team-grid__title') != e.target){
// 							let currentitem = e.target.closest('.team-grid__item');
// 							currentitem.classlist.add('team-grid__item--active');

// 						}
				});

			});
};
team();