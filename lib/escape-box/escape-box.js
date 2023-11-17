function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var x, y, cur_x, cur_y;
const box = document.getElementById("escape-box");

box.addEventListener('mouseover', function handleMouseOver(event) {
    x = getRandomInt(90);
    y = getRandomInt(90);

    box.style.top = y + '%';
    box.style.left = x + '%';

});