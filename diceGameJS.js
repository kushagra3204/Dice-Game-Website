randomNumber1=Math.floor(Math.random()*6)+1; //Random number from 1 to 6
randomNumber2=Math.floor(Math.random()*6)+1; //Random number from 1 to 6
// console.log(randomNumber1
var d1Loc="Images/dice"+randomNumber1+".png";
var d2Loc="Images/dice"+randomNumber2+".png";
document.querySelector("img.img1").setAttribute("src",d1Loc);
document.querySelector("img.img2").setAttribute("src",d2Loc);


if(randomNumber1>randomNumber2)
  document.querySelector("h1").textContent="🚩Player 1 Wins";
else if(randomNumber1<r andomNumber2)
  document.querySelector("h1").textContent="Player 2 Wins🚩";
else
  document.querySelector("h1").textContent="Draw";
