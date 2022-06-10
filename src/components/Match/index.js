import React, { useState } from 'react';

import { PlayerIMG, Wrapper } from './Match.styles';

const Match = ({game, players}) => {
  const team1 = players.filter(player => game.homeTeam.teamId === player.teamId);
  const team2 = players.filter(player => game.awayTeam.teamId === player.teamId);

  console.log('team1', team1)

  let [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  }

  return (
    <Wrapper>
      <div onClick={handleClick}>
        <PlayerIMG src={team1[0].playerImage160} alt='player image' className={`${selected ? "active" : ""}`} />
        <h4>{team1[0].shortName}</h4>
      </div>
      <h3>VS.</h3>
      <div onClick={handleClick}>
        <PlayerIMG src={team2[0].playerImage160} alt='player image' className={`${!selected ? "active" : ""}`} />
        <h4>{team2[0].shortName}</h4>
      </div>
      <button>Replace Fight</button>
    </Wrapper>
  )
};

export default Match;