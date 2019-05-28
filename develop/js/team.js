let team = function() {
    let linkswitch = document.querySelectorAll('.team-grid__switch');

				linkswitch.forEach(function(itemname) {

					itemname.addEventListener('click', function(e) {

						e.preventDefault();

						let activeitem = document.querySelector('.team-grid__item--active');
						
						if(activeitem){
							activeitem.classList.remove('.team-grid__item--active');
						}

						if(!activeitem || activeitem.querySelector('.team-grid__switch') != e.target){

							let currentitem = e.target.closest('.team-grid__item');
							currentitem.classlist.add('.team-grid__item--active');

						}
					})

				})
};
team();
