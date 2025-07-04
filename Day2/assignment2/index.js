// const dice = ['one.jpg', 'two.jpg', 'three.jpg', 'four.jpg', 'five.jpg', 'six.jpg'];
// var dice_div = document.getElementById("roll_area");
var curr_1 = document.getElementById("play_cur_1");
var curr_2 = document.getElementById("play_cur_2");
var real_1 = document.getElementById("real_1");
var real_2 = document.getElementById("real_2");
var play2 = document.getElementById("player_score2");
var play1 = document.getElementById("player_score1");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var num4 = document.getElementById("num4");
var num5 = document.getElementById("num5");
var num6 = document.getElementById("num6");
var count = 1;

const rollDice = () => {
  // let random = Math.trunc(Math.random() * 6) + 1;
  // console.log(random);
  // dice_div.style.backgroundImage = `url(${dice[random - 1]})`;
  time=setInterval(()=>{
    if (count % 2 == 1) {
    real_2.textContent =
      parseInt(real_2.textContent) + parseInt(curr_2.textContent);
    curr_2.textContent = "0";
    let random = Math.trunc(Math.random() * 6) + 1;
    console.log("random", random);
    switch (random) {
      case 1:
        num1.style.display = "flex";
        num2.style.display = "none";
        num3.style.display = "none";
        num4.style.display = "none";
        num5.style.display = "none";
        num6.style.display = "none";
        break;
      case 2:
        num1.style.display = "none";
        num2.style.display = "flex";
        num3.style.display = "none";
        num4.style.display = "none";
        num5.style.display = "none";
        num6.style.display = "none";
        break;
      case 3:
        num1.style.display = "none";
        num2.style.display = "none";
        num3.style.display = "flex";
        num4.style.display = "none";
        num5.style.display = "none";
        num6.style.display = "none";
        break;
      case 4:
        num4.style.display = "flex";
        num1.style.display = "none";
        num3.style.display = "none";
        num2.style.display = "none";
        num5.style.display = "none";
        num6.style.display = "none";
        break;
      case 5:
        num5.style.display = "flex";
        num1.style.display = "none";
        num3.style.display = "none";
        num4.style.display = "none";
        num2.style.display = "none";
        num6.style.display = "none";
        break;
      case 6:
        num6.style.display = "flex";
        num1.style.display = "none";
        num3.style.display = "none";
        num4.style.display = "none";
        num5.style.display = "none";
        num2.style.display = "none";
        break;
    }
    if (random != 1) {
      curr_1.textContent = parseInt(curr_1.textContent) + random;
    } else {
      // curr_1.textContent=parseInt(curr_1.textContent)+random;
      // real_1.textContent='0';
      curr_1.textContent = "0";
      count++;
      clearInterval(time);
      num6.style.display = "none";
        num1.style.display = "none";
        num3.style.display = "none";
        num4.style.display = "none";
        num5.style.display = "none";
        num2.style.display = "none";
      play2.style.border = "4px solid  rgba(39, 245, 12, 0.985)";
      play1.style.border = "none";
    }
  } else {
    real_1.textContent =
      parseInt(real_1.textContent) + parseInt(curr_1.textContent);
    curr_1.textContent = "0";
    let ran = Math.trunc(Math.random() * 6) + 1;
    console.log("ran", ran);
    switch (ran) {
      case 1:
        num1.style.display = "flex";
        num2.style.display = "none";
        num3.style.display = "none";
        num4.style.display = "none";
        num5.style.display = "none";
        num6.style.display = "none";
        break;
      case 2:
        num1.style.display = "none";
        num2.style.display = "flex";
        num3.style.display = "none";
        num4.style.display = "none";
        num5.style.display = "none";
        num6.style.display = "none";
        break;
      case 3:
        num1.style.display = "none";
        num2.style.display = "none";
        num3.style.display = "flex";
        num4.style.display = "none";
        num5.style.display = "none";
        num6.style.display = "none";
        break;
      case 4:
        num4.style.display = "flex";
        num1.style.display = "none";
        num3.style.display = "none";
        num2.style.display = "none";
        num5.style.display = "none";
        num6.style.display = "none";
        break;
      case 5:
        num5.style.display = "flex";
        num1.style.display = "none";
        num3.style.display = "none";
        num4.style.display = "none";
        num2.style.display = "none";
        num6.style.display = "none";
        break;
      case 6:
        num6.style.display = "flex";
        num1.style.display = "none";
        num3.style.display = "none";
        num4.style.display = "none";
        num5.style.display = "none";
        num2.style.display = "none";
        break;
    }
    if (ran != 1) {
     
      curr_2.textContent = parseInt(curr_2.textContent) + ran;
    } else {
      // curr_2.textContent=parseInt(curr_2.textContent)+ran;
      // real_2.textContent='0';
      curr_2.textContent = "0";
      count++;
      clearInterval(time);
      num6.style.display = "none";
        num1.style.display = "none";
        num3.style.display = "none";
        num4.style.display = "none";
        num5.style.display = "none";
        num2.style.display = "none";
      play2.style.border = "none";
      play1.style.border = "4px solid  rgba(39, 245, 12, 0.985)";
    }
  }
  },1500);
};

const newgame = () => {
  curr_1.textContent = "0";
  curr_2.textContent = "0";
  real_1.textContent = "0";
  real_2.textContent = "0";
  clearInterval(time);
   num6.style.display = "none";
        num1.style.display = "none";
        num3.style.display = "none";
        num4.style.display = "none";
        num5.style.display = "none";
        num2.style.display = "none";
};

const hold = () => {
  clearInterval(time);
  num6.style.display = "none";
        num1.style.display = "none";
        num3.style.display = "none";
        num4.style.display = "none";
        num5.style.display = "none";
        num2.style.display = "none";
  if (count % 2 == 1) {
    real_1.textContent =
      parseInt(real_1.textContent) + parseInt(curr_1.textContent);
    if (parseInt(real_1.textContent) >= 100) {
      alert("PLAYER-1 WIN");
      
      newgame();
      count = 1;
      play2.style.border = "none";
      play1.style.border = "4px solid  rgba(39, 245, 12, 0.985)";
      return;
    }

    curr_1.textContent = "0";
    count++;
    play1.style.border = "none";
    play2.style.border = "4px solid  rgba(39, 245, 12, 0.985)";
    
  } else {
    real_2.textContent =
      parseInt(real_2.textContent) + parseInt(curr_2.textContent);
    if (parseInt(real_2.textContent) >= 100) {
      alert("PLAYER-2 WIN");

      newgame();
      count = 1;
      play2.style.border = "none";
      play1.style.border = "4px solid  rgba(39, 245, 12, 0.985)";
      return;
    }
    curr_2.textContent = "0";
    count++; 
    play2.style.border = "none";
    play1.style.border = "4px solid  rgba(39, 245, 12, 0.985)";
    
  }
};
