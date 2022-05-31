
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
    carouselImage.style.backgroundPositionY = offset * 0.3 + 'px';
})

// collage
let pictures = document.querySelectorAll('.image');
var tiggle = false;
pictures.forEach (pic => {
    pic.addEventListener('click', () => {
        if(tiggle == false) {
            tiggle = true;
            pic.style.transform = "scale(1.5)";
            pic.style.transition = "transform 0.50s ease";
            pic.innerHTML = `<p class="grid-p"> text to show when clicked </p>`
        }
        else {
            tiggle = false;
            pic.style.transform = "scale(1)";
            pic.style.transition = "transform 0.50s ease";
            pic.innerHTML = ``
        }
    })
})


// pokemon area
var input = ""
var pokis = document.querySelectorAll('.poke');

pokis.forEach(poke => {
    poke.addEventListener('mouseover', () => {
        if(poke.innerHTML == "Farfetch'd") {
            poke.innerHTML = "Farfetchd"
            input = poke.innerHTML.toLowerCase();
        }
        else {
        }
        input = poke.innerHTML.toLowerCase();
        catchEmAll()
    })

// getting the pokemon info
async function catchEmAll() {
    let PokeApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    let Pokemon = await PokeApi.json();
    console.log(input);
    console.log(Pokemon);
    let div = document.createElement('div');
    let img = document.createElement('img')
    img.setAttribute('id', 'toolTip');
    img.src = `${Pokemon.sprites.front_default}`
    if (input == 'pidgeot') {
        let pokOne = document.getElementById('pokOne');
        pokOne.append(img);
    }
    else if(input == 'magikarp'){
        let pokTwo = document.getElementById('pokTwo');
        pokTwo.append(img);
    }
    else if (input == 'slowpoke'){
        let pokThree = document.getElementById('pokthree');
        pokThree.append(img);
    }
    else if (input == 'farfetchd'){
        let pokFour = document.getElementById('pokFour');
        pokFour.append(img);
    }
    poke.addEventListener('mouseout', () => {
        img.setAttribute('hidden', '');
        img.remove()
    })

}
})

// chaser circle
let box = document.querySelector('.box');
let chaser = document.querySelector('.chaser');

box.addEventListener('mousemove', (e) => {
    let left = e.offsetX;
    let top = e.offsetY;
    chaser.style.left = `${left - 30}px`
    chaser.style.top = `${top - 20}px`

})

// runner circle
let runnerBox = document.querySelector('.box2');
let runner = document.querySelector('.runner');

runner.addEventListener('mouseenter', (i) => {
    let left = i.offsetX;
    let top = i.offsetY;
    runner.style.left = `${left + Math.floor(Math.random() * 300 )}px`
    runner.style.top = `${top + Math.floor(Math.random() * 300 )}px`

})

// the letters

let letters = document.querySelectorAll('.letter');
letters.forEach(letter => {
    letter.addEventListener('mouseover', () => {
        console.log(letter);
        letter.style.transform = `rotate(900deg)`;
    })
})





