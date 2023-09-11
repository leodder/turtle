import React, { useState } from 'react';

function Lottery() {
  // Initialize the quantities of each prize
  const [firstPrize, setFirstPrize] = useState(1);
  const [secondPrize, setSecondPrize] = useState(1);
  const [thirdPrize, setThirdPrize] = useState(2);
  const [fourthPrize, setFourthPrize] = useState(5);
  const [fifthPrize, setFifthPrize] = useState(11);

  const [lotteryResult, setLotteryResult] = useState(""); // State to store the lottery result

  const handleButtonClick = () => {
    // Generate a random number between 1 and 1000 to simulate a random lottery draw
    const draw = Math.floor(Math.random() * 1000) + 1;

    if (draw === 1 && firstPrize > 0) {
      console.log("Won first prize");
      setFirstPrize(firstPrize - 1);
      setLotteryResult("Congratulations! You won the first prize!");
    } else if (draw > 1 && draw <= 24 && secondPrize > 0) {
      console.log("Won second prize");
      setSecondPrize(secondPrize - 1);
      setLotteryResult("Congratulations! You won the second prize!");
    } else if (draw > 24 && draw <= 154 && thirdPrize > 0) {
      console.log("Won third prize");
      setThirdPrize(thirdPrize - 1);
      setLotteryResult("Congratulations! You won the third prize!");
    } else if (draw > 154 && draw <= 334 && fourthPrize > 0) {
      console.log("Won fourth prize");
      setFourthPrize(fourthPrize - 1);
      setLotteryResult("Congratulations! You won the fourth prize!");
    } else if (draw > 334 && draw <= 584 && fifthPrize > 0) {
      console.log("Won fifth prize");
      setFifthPrize(fifthPrize - 1);
      setLotteryResult("Congratulations! You won the fifth prize!");
    } else {
      console.log("Sorry, no win this time.");
      setLotteryResult("Sorry, you didn't win this time.");
    }

    console.log(draw);
    console.log(
      "First prize remaining: " + firstPrize,
      "Second prize remaining: " + secondPrize,
      "Third prize remaining: " + thirdPrize,
      "Fourth prize remaining: " + fourthPrize,
      "Fifth prize remaining: " + fifthPrize
    );
  };

  return (
    <div>
      <button className="btn" onClick={handleButtonClick}>
        Start Lottery
      </button>
      <p>{lotteryResult}</p>
    </div>
  );
}

export default Lottery;
