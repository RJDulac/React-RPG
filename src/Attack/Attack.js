import React from "react";

const Attack = ({ playerTurn }) => {
  //const whoseHealth = turn ? "PlayerHealth" : "monsterHealth";
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
