import React, { useEffect } from 'react';

// Components
import Game from '../Game';

// Store
import useStore from '../../store';

// Styles
import { Wrapper, Grid } from './SelectionModal.styles';

const SelectionModal = ({ games, players, toggleModal }) => {
  let selections = [];
  const chosenGames = useStore(state => state.chosenGames);
  const updateChosenGames = useStore(state => state.updateChosenGames);

  useEffect(() => {
    if (updateChosenGames.length > 0) selections = chosenGames 
  },[])

  const addPlayers = (game) => {
    selections.push(game)
    console.log('selections', selections)
  }

  const updateSelections = () => {
    updateChosenGames(selections)
    toggleModal()
  }

  return (
    <Wrapper>
      <h1>Select 6 Games</h1>
      <Grid>
      {games.map(game => {
            return (
              <div key={game.competitionId}>
                { 
                <Game 
                  game={game}  
                  players={players} 
                  buttonText="Select Match" 
                  isSelectable={false} 
                  onSelect={addPlayers}
                />
                }
              </div>
            )
          })}
      </Grid>
      <button onClick={updateSelections} className="submit" >Submit</button>
    </Wrapper>
  )
}

export default SelectionModal;