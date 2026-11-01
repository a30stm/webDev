var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0]

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 is Fucking Dumb and Wrong!"
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 1 is Fucking Dumb and Wrong!"
}
else{
    document.querySelector("h1").innerHTML = "You guys are both dumb for using this to settle an argument. I hope you die."
    
}




//Auto Refresh Page While Working
//Remove Later
function autoRefresh(){
    window.location = window.location.href;
}
setInterval('autoRefresh()', 50000);