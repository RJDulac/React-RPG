import React from "react";

const HealthBar = ({ health, name }) => {
  const healthColor = () => {
    if (health < 25) {
      return "low-health";
    } else if (health < 50) {
      return "medium-health";
    } else {
      return "high-health";
    }
  };
  return (
    <div
      className={`
    ${healthColor()} health-bar`}
    >
      {name} health is: {health}
    </div>
  );
};

export default HealthBar;
