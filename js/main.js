(function(){

    // Open a video player when the user clicks the 'Video' button
    const createLightboxFunctionality = () => {
        let vidBtns = document.querySelectorAll('.btn--open-vid');
        
        // Open lightbox when any video button's clicked
        vidBtns.forEach(function(vidBtn){
            vidBtn.onclick = function() {
                let vidName = this.dataset.videoToOpen;
                let lightbox = document.getElementById(`lightbox-${vidName}`);
                let video = document.getElementById(`demo-video-${vidName}`);

                lightbox.classList.add('flex');
                createLightboxCloseFunctionality(lightbox, video);
            }
        });
    }
    
    const createLightboxCloseFunctionality = (lightbox, video) => {
        console.log(lightbox);
        console.log(video);

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
    createLightboxFunctionality();
})();