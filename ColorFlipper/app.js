const colors = ["green", "red", "blue", "purple","grey","pink"]
const btn = document.getElementById('btn')
const color = document.querySelector('.color')
const hexDigits = "0123456789ABCDEF"

function generateHexColor() {
    var hexColor= '#';
    var randomNum;
    for(let i = 0; i < 6 ; i++){
        randomNum =+ Math.floor(Math.random()*hexDigits.length);
        hexColor += hexDigits[randomNum];
    }
    return hexColor;
}


function simpleColor() {
    btn.addEventListener('click', function(){
        const randomNum = Math.floor(Math.random()*colors.length);
        document.body.style.backgroundColor = colors[randomNum];
        color.textContent =  colors[randomNum]
    }) 
}

function hexColor() {
    btn.addEventListener('click', function(){
        let newColor = generateHexColor();
        document.body.style.backgroundColor = newColor;
        color.textContent =  newColor;
    }) 
}


if ( window.location.pathname.includes('index')){
    simpleColor()
} else {
    hexColor()
}