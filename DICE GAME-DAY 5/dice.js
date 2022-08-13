//For generating random numbers on dice from 1 to 6
var randomNum1 = Math.floor(Math.random() * 6) + 1;

//for player 01
//For mapping images in folder for player 1
var play1 = "Dices/dice" + randomNum1 + ".jpg";

var image1 =  document.querySelectorAll("img")[0];  //Player1
//for this image to connect to random numbered image using setAttribute
image1.setAttribute("src", play1);


//For player 02
var randomNum2 = Math.floor(Math.random() * 6) + 1;
var play2 = "Dices/dice" + randomNum2 + ".jpg";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",play2);



//Fpr Player 03
var randomNum3 = Math.floor(Math.random() * 6) + 1;

var play3 = "Dices/dice" + randomNum3 + ".jpg";

var image3 = document.querySelectorAll("img")[2];
image3.setAttribute("src",play3);


//Main logic to decide the winner
if(randomNum1>randomNum2 && randomNum1>randomNum3)
{
  document.querySelector("h1").innerHTML="Player 01 WINS !!"
}
else if(randomNum2>randomNum1 && randomNum2>randomNum3)
{
  document.querySelector("h1").innerHTML="Player 02 WINS !!"
}
else if(randomNum3>randomNum1 && randomNum3>randomNum2)
{
  document.querySelector("h1").innerHTML="Player 03 WINS !!"
}
else{
  document.querySelector("h1").innerHTML="Draw!!"
}
