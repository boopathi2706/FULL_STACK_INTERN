import React from "react";
import Score from "./Score";
import Current from "./Current";

const User = ({
  classNames,
  current_className,
  current_id,
  player_name,
  real_score_id,
  curr,
  real_score,
  curr_score
}) => {
  return (
    <div className={classNames}>
      <div className="player_name">
        <h2>{player_name}</h2>
        <h1 id={real_score_id}>{real_score}</h1>
      </div>
      <Current
        classNamees={current_className}
        ids={current_id}
        current_score_id={curr}
        current_score={curr_score}
      />
    </div>
  );
};

export default User;
