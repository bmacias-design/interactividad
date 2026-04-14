

let red=0 , green = 0, blue=0;


document.body.addEventListener('click', changeColor);
 
function changeColor() {
    const random = Math.random() * 255;
    const rgb = "rgb(" + red + "," + green + "," + blue + ")";
    document.body.style.backgroundColor = rgb;
}
