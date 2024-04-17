

document.addEventListener('DOMContentLoaded', function() {
    const fonts = ['raleway', 'pacifico', 'redditmono', 'rubikscribble', 'EduNSWACTFoundation'];
    let currentIndex = 0;
    const textElement = document.getElementById('cngtxt');

    function changeFont() {
        textElement.style.fontFamily = fonts[currentIndex];
        currentIndex = (currentIndex + 1) % fonts.length;
    }

    changeFont();

    setInterval(changeFont, 900);
});