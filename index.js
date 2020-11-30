var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";// change dice image from dice 1 - dice 6
var randomImageSource = "images/" + randomDiceImage;// images/dice1.png to images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML ="🚩Its your lucky day Player 1! You win!";
}
else if (randomNumber2 > randomNumber1)
{
  document.querySelector("h1").innerHTML = "🚩Its your lucky day Player 2! You win!";
}
else
{
  document.querySelector("h1").innerHTML = "Ahh Better luck next time, its a draw";
}
