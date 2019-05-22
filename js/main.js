// Open a video player when the user clicks the 'Video' button

    const openLightboxWhenVideoBtnClicked = () => {
        let vidBtn = document.getElementById('1ffc-vid--open');
        let lightbox = document.getElementById('lightbox--1ffc');

        vidBtn.onclick = function(){
            lightbox.classList.add('flex');
        }
    }
    
openLightboxWhenVideoBtnClicked();


