//your JS code here. If required.
 function setBodyBackground() {
            const body = document.body;
            const portraitImage = "https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Portrait-en-orientation-portrait.jpg";
            const landscapeImage = "https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Paysage-en-orientation-paysage.jpg";

            if (window.innerHeight > window.innerWidth) {
                // Portrait mode
                body.style.backgroundImage = `url('${portraitImage}')`;
            } else {
                // Landscape mode
                body.style.backgroundImage = `url('${landscapeImage}')`;
            }
        }

        // Initial call to set background on page load
        setBodyBackground();
  window.addEventListener('orientationchange', setBodyBackground);
        window.addEventListener('resize', setBodyBackground);