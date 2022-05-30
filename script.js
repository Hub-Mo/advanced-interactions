Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

// dark/lightMode switcher
var toggle = false;
document.querySelector('.mode').addEventListener('click', () => {
    if (toggle == false){
        toggle = true;
        var body = document.querySelector('body');
        body.setAttribute('class', 'darkMode');
    }else{
        toggle = false;
        document.querySelector('body').setAttribute('class', 'lightMode');
    }
});

// carousel
let carouselImage = document.querySelector('.carouselContainer');
let imageArray = ['images/mountainwpaper.png', 'images/citywpaper.png', 'images/Boerwpaper.png']
index = 0;
setInterval(function() {
    if (index < imageArray.length - 1){
        index += 1;
        console.log(index);
        carouselImage.style.backgroundImage = `url("${imageArray[index]}")`;
        console.log(imageArray[index]);
        console.log(carouselImage);
        // carouselImage.setAttribute('src', imageArray[index]);
    }
    else {
        index = 0;
        console.log(index);
        carouselImage.style.backgroundImage = `url("${imageArray[0]}")`;
        // carouselImage.setAttribute('src', imageArray[0]);
    }
}, 5000)

// parallax 
window.addEventListener('scroll', () => {
    let offset = window.pageYOffset;
    console.log(offset);
    carouselImage.style.backgroundPositionY = offset * 0.8 + 'px';
})