window.onload = function() {
    let video =document.querySelector('.video');
    video.addEventListener('click', playStop);

    let playButtons = document.querySelectorAll('.play');
    for (let i = 0; i < playButtons.length; i++){
        playButtons[i].addEventListener('click', playStop);
    };

    let soundButton = document.querySelector('.sound__img');
    soundButton.addEventListener('click', soundOff);

    let durationControl = document.querySelector('.duration__range');
    durationControl.addEventListener('mousedown', stopInterval);
    durationControl.addEventListener('click', setVideoDuration)

    durationControl.min = 0;
    durationControl.value = 0;  

    
    let soundControl = document.querySelector('.sound__range');
    soundControl.addEventListener('mouseup', changeSoundVolume); 

    soundControl.min = 0;
    soundControl.max = 20;
    soundControl.value = 10;

    let videoPlayButton = document.querySelector('.video__play');
    let toolPlayButton = document.querySelector('.duration__play');

    video.addEventListener('ended', function(){
        videoPlayButton.classList.toggle('video__play--active');
        toolPlayButton.classList.toggle('duration__play--active');
        video.currentTime = 0;
    })

    let intervalId;
    function playStop() {
        videoPlayButton.classList.toggle('video__play--active');
        toolPlayButton.classList.toggle('duration__play--active');

        durationControl.max = video.duration;

        if(video.paused){
            video.play();
            intervalId = setInterval(updateDuration,1000/66)
            
        } else {
            video.pause();
            clearInterval(intervalId);
        };
    };

    function stopInterval(){
        video.pause();
        clearInterval(intervalId);
    };

    function setVideoDuration(){
        if (video.paused){
            video.play();
        } else {
            video.pause();  
        }
        video.currentTime = durationControl.value;
        intervalId = setInterval(updateDuration,1000/66);
    };

    function updateDuration(){    
        durationControl.value = video.currentTime;
    };

    function soundOff(){   


        if (video.volume === 0){
            video.volume = soundLevel;
            soundControl.value = soundLevel*20;
        }else{
            soundLevel = video.volume;
            video.volume = 0;
            soundControl.value = 0;
        }    
    };
    function changeSoundVolume(){
        video.volume = soundControl.value/20; 
        console.log(video.volume) 
    };
};

