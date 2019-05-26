(function(){

    // Open a video player when the user clicks the 'Video' button
    const makeLightboxesFunctional = () => {
        let vidBtns = document.querySelectorAll('.btn--open-vid');
        console.log(vidBtns);
        
        // Open lightbox when any video button's clicked
        vidBtns.forEach(function(vidBtn){
            vidBtn.onclick = function() {
                let vidName = this.dataset.videoToOpen;
                let lightbox = document.getElementById(`lightbox-${vidName}`);
                let video = document.getElementById(`demo-video-${vidName}`);

                console.log(`${vidName}`);
                console.log(lightbox);
                console.log(video);


                lightbox.classList.add('flex');
                allowLightboxToClose(lightbox, video);
            }
        });
    }
    
    const allowLightboxToClose = (lightbox, video) => {
        // console.log(lightbox);
        // console.log(video);

        // Close lightbox when user clicks outside of video
        lightbox.onclick = function(e) {
            if (e.target != video){
                console.log('You clicked outside the video');
                video.pause();
                lightbox.classList.remove('flex');
            } else {
                console.log('You clicked inside the video');
            }
        }
    }
    setTimeout(function(){
        makeLightboxesFunctional();
    }, 1000);
})();