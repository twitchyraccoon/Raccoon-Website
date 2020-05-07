/*
 ______                                           _____ _______ 
|   __ \.---.-.----.----.-----.-----.-----.     _|     |     __|
|      <|  _  |  __|  __|  _  |  _  |     |    |       |__     |
|___|__||___._|____|____|_____|_____|__|__|    |_______|_______|
                                                                
*/

var raccoonEmoji = document.getElementById('BigRaccoon');
var loader = document.getElementById('PageLoader');
var angle = 360;

var spin = setInterval(() => {
    raccoonEmoji.style.transform = 'rotate(' + angle + 'deg)';
    console.log('rotated!');
    if (angle > 2000) {
        clearInterval(spin);
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 1000);
    }
    angle = angle + 360;
}, 1000);