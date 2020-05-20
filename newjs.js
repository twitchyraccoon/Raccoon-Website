/*
 ______                                           _____ _______ 
|   __ \.---.-.----.----.-----.-----.-----.     _|     |     __|
|      <|  _  |  __|  __|  _  |  _  |     |    |       |__     |
|___|__||___._|____|____|_____|_____|__|__|    |_______|_______|

very cool stuff                                                                
*/

var raccoonEmoji = document.getElementsByClassName('BigRaccoon');
var loader = document.getElementById('PageLoader');
var angle = 720;

raccoonEmoji[0].style.opacity = '1';

/* Page Loader */
var spin = setInterval(() => {
    raccoonEmoji[0].style.transform = 'rotate(' + angle + 'deg)';
    if (angle > 2000) {
        clearInterval(spin);
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 1000);
    }
    if (angle > 1300) {
        raccoonEmoji[0].insertAdjacentElement('afterend', raccoonEmoji[0].cloneNode(true));
        raccoonEmoji[1].style.transform = 'translateX(200px)';
    }
    angle = angle + 360;
}, 800);

requestAnimationFrame()