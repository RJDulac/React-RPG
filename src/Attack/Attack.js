import React from "react";

//use with ternary to avoid repeative code
const turnConfig = {
  player: {
    health: 100,
    turn: true
  },
  monster: {
    health: 100,
    turn: true
  }
};
const Attack = ({ playerTurn }) => {
  //const whoseHealth = turn ? "PlayerHealth" : "monsterHealth";
  //make dynamic later
  const { health, turn } = turnConfig["player"]; //gives us object we can destructure
  const onHandleAttack = health => {
    console.log(playerTurn);
  };
  return (
    <div>
      <button onClick={onHandleAttack}>Hit</button>
    </div>
  );
};

export default Attack;
