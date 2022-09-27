var randomNumber1 = Math.floor(Math.random() * 6) + 1; //gives between 1 and 6

var randomDiceImage = "dice" + randomNumber1 + ".png";  //dice1.png to dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice2.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource); // replacing source with random image source




var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


if(randomNumber1 > randomNumber2 )
{
 document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if (randomNumber1===randomNumber2) {
 document.querySelector("h1").innerHTML = "It's a Draw";

}
else{
document.querySelector("h1").innerHTML = "Player 2 wins";
}
