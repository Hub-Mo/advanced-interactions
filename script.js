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
        carouselImage.style.backgroundImage = `url("${imageArray[index]}")`;
    }
    else {
        index = 0;
        carouselImage.style.backgroundImage = `url("${imageArray[0]}")`;
    }
}, 5000)

// parallax 
window.addEventListener('scroll', () => {
    let offset = window.pageYOffset;
    carouselImage.style.backgroundPositionY = offset * 0.2 + 'px';
})

// collage
let pictures = document.querySelectorAll('.image');
var tiggle = false;

pictures.forEach (pic => {
    pic.addEventListener('click', () => {
        if(tiggle == false) {
            tiggle = true;
            pic.style.transform = "scale(1.5)";
            pic.style.transition = "transform 0.25s ease";
            console.log(pic.style.transform);
        }
        else {
            tiggle = false;
            pic.style.transform = "scale(1)";
            pic.style.transition = "transform 0.25s ease";
        }
    })
})