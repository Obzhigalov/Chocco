let left = document.querySelector('.slider-switch--left');
let right = document.querySelector('.slider-switch--right');
let slider = document.querySelector('.slider');
let sliderarray = document.querySelectorAll('.slider-elem');
let position = parseInt(getComputedStyle(slider).left, 10);

left.addEventListener('click', function() {
    event.preventDefault();
        console.log(position);
        if (position == 0) {
            left.classList.toggle('slider-switch--denied-left');
            function deny() {
                left.classList.toggle('slider-switch--denied-left');
            };
            setTimeout(deny, 500);
        } else {
            position = position + 100;
            slider.style.left = position + '%';
        }
});

console.log(sliderarray.length)
let sliderArrayL = sliderarray.length*(-100)+100

right.addEventListener('click', function() {
    event.preventDefault();
    console.log(position);
        if (position == sliderArrayL) {
            right.classList.toggle('slider-switch--denied-right');
            function deny() {
                right.classList.toggle('slider-switch--denied-right');
            };
            setTimeout(deny, 500);
        } else {
            position = position - 100;
            slider.style.left = position + '%';
        }
});