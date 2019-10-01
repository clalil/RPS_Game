import React from "react";

const ResetBtn = props => {
  return (
    <div>
      <button
        className="ui inverted black button"
        id="resetBtn"
        onClick={props.onClick()}
      >
        Reset scoreboard
      </button>
    </div>
  );
};
export default ResetBtn;
