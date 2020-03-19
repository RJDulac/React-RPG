import React from "react";

const HealthBar = ({ health, name }) => {
  return (
    <div>
      {name} health is: {health}
    </div>
  );
};

export default HealthBar;
