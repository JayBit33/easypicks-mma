import React from 'react';

// Components
import Match from '../Match';
import Game from '../Game';

// Store
import useStore from '../../store';

// Styles
import { Grid } from './GameList.styles';

const GameList = ({ games, players, replaceFight }) => {
    const chosenGames = useStore(state => state.chosenGames);

    const systemOneOn = true
    return (
      <Grid>
        {chosenGames.map(game => {
          return (
            <div key={game.competitionId}>
              { systemOneOn ? 
              <Game 
                game={game} 
                players={players} 
                buttonText="Replace Fight" 
                isSelectable={true} 
                replaceFight={() => replaceFight(game)} 
              /> :
              <Match 
                game={game} 
                players={players}  
              />
              }
            </div>
          )
        })}
      </Grid>
    )
}

export default GameList;