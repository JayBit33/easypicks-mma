import React from 'react';

// Components
import Match from '../Match';
import Game from '../Game';

// Store
import useStore from '../../store';

// Styles
import { Grid } from './GameList.styles';

const GameList = ({ players, replaceFight }) => {
    const chosenGames = useStore(state => state.chosenGames);

    console.log('chosen games', chosenGames)

    const systemOneOn = true
    return (
      <Grid>
        {chosenGames.map(game => {
          return (
            <div key={game.id}>
              { systemOneOn ? 
              <Game 
                game={game} 
                players={players} 
                buttonText="Replace Fight" 
                isSelectable={true} 
                replaceFight={() => replaceFight(game)} 
                isGameList={true}
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