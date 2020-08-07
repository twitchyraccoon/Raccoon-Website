var loader = document.getElementById('PageLoader');
var angle = 720;
var raccoonEmoji = document.getElementById('BigRaccoon');
raccoonEmoji.style.opacity = '1';

/* Page Loader */

window.addEventListener('load', () => {
    var spin = setInterval(() => {
        raccoonEmoji.style.transform = 'rotate(' + angle + 'deg)';
        angle = angle + 360;
    }, 1000);
    setTimeout(() => {
        loader.style.opacity = 1;
    }, 800);
});