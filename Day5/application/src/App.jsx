import { useState } from "react";
import "./App.css";
import User from "./Component/User";

function App() {
  const [real_s1, setReal_s1] = useState(0);
  const [real_s2, setReal_s2] = useState(0);
  const [curr_1, setCurr_1] = useState(0);
  const [curr_2, setCurr_2] = useState(0);
  const [count, setCount] = useState(1);

  const rollDice = () => {
    var play2 = document.getElementById("player_score2");
    var play1 = document.getElementById("player_score1");
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var num3 = document.getElementById("num3");
    var num4 = document.getElementById("num4");
    var num5 = document.getElementById("num5");
    var num6 = document.getElementById("num6");
    if (count % 2 == 1) {
      setReal_s2(real_s2 + curr_2);
      setCurr_2(0);
      var random = Math.trunc(Math.random() * 6) + 1;
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
        setCurr_1(curr_1 + random);
      } else {
        setCurr_1(0);
        setCount(count + 1);
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
      setReal_s1(real_s1 + curr_1);
      setCurr_1(0);
      var ran = Math.trunc(Math.random() * 6) + 1;
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
        setCurr_2(curr_2 + ran);
      } else {
        setCurr_2(0);
        setCount(count + 1);
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
  };

  const hold = () => {
    var play2 = document.getElementById("player_score2");
    var play1 = document.getElementById("player_score1");
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var num3 = document.getElementById("num3");
    var num4 = document.getElementById("num4");
    var num5 = document.getElementById("num5");
    var num6 = document.getElementById("num6");

    num6.style.display = "none";
    num1.style.display = "none";
    num3.style.display = "none";
    num4.style.display = "none";
    num5.style.display = "none";
    num2.style.display = "none";

    if (count % 2 == 1) {
      setReal_s1(real_s1 + curr_1);
      if (real_s1 >= 100) {
        alert("PLAYER-1 WIN");

        newgame();
        setCount(1);
        play2.style.border = "none";
        play1.style.border = "4px solid  rgba(39, 245, 12, 0.985)";
        return;
      }

      setCurr_1(0);
      setCount(count + 1);
      play1.style.border = "none";
      play2.style.border = "4px solid  rgba(39, 245, 12, 0.985)";
    } else {
      setReal_s2(real_s2 + curr_2);
      if (real_s2 >= 100) {
        alert("PLAYER-2 WIN");

        newgame();
        setCount(1);
        play2.style.border = "none";
        play1.style.border = "4px solid  rgba(39, 245, 12, 0.985)";
        return;
      }
      setCurr_2(0);
      setCount(count + 1);
      play2.style.border = "none";
      play1.style.border = "4px solid  rgba(39, 245, 12, 0.985)";
    }
  };
  const newgame = () => {
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var num3 = document.getElementById("num3");
    var num4 = document.getElementById("num4");
    var num5 = document.getElementById("num5");
    var num6 = document.getElementById("num6");
    num6.style.display = "none";
    num1.style.display = "none";
    num3.style.display = "none";
    num4.style.display = "none";
    num5.style.display = "none";
    num2.style.display = "none";

    setCurr_1(0);
    setCurr_2(0);
    setReal_s1(0);
    setReal_s2(0);
  };

  return (
    <div className="players_area">
      <User
        classNames="player player1"
        current_className="player_score player_score1"
        current_id="player_score1"
        player_name="PLAYER 1"
        real_score_id="real_1"
        curr="play_cur_1"
        real_score={real_s1}
        curr_score={curr_1}
      />
      <User
        classNames="player player2"
        current_className="player_score player_score2"
        current_id="player_score2"
        player_name="PLAYER 2"
        real_score_id="real_2"
        curr="play_cur_2"
        real_score={real_s2}
        curr_score={curr_2}
      />
      <div className="newgame" onClick={newgame}>
        🔄 NEW GAME
      </div>
      <div className="roll_area" id="roll_area "></div>
      <div className="dices_num" id="num1"></div>
      <div className="dices_num" id="num2"></div>
      <div className="dices_num" id="num3"></div>
      <div className="dices_num" id="num4"></div>
      <div className="dices_num" id="num5"></div>
      <div className="dices_num" id="num6"></div>
      <div className="rolldice" onClick={rollDice}>
        🎲 ROLL DICE
      </div>
      <div className="hold" onClick={hold}>
        ✋ HOLD
      </div>
    </div>
  );
}

export default App;
