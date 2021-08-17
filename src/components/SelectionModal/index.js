import React, { useEffect, useState } from 'react';

// Components
import Game from '../Game';

// Store
import useStore from '../../store';

// Styles
import { Wrapper, Grid } from './SelectionModal.styles';

const SelectionModal = ({ games, players, isReplacing, toggleModal }) => {
  const [selections, updateSelections] = useState([]);

  const chosenGames = useStore(state => state.chosenGames);
  const updateChosenGames = useStore(state => state.updateChosenGames);
  const updateDisplayedLineups = useStore(state => state.updateDisplayedLineups);

  useEffect(() => {
    if (chosenGames.length > 0) updateSelections(chosenGames) 
    console.log('chosen games updated', chosenGames)
    console.log('selections from useEffect', selections)
  },[chosenGames])

  const addOrReplaceGame = (game, setIsSelected) => {
    setIsSelected(true)
    if (isReplacing) {
      updateChosenGames([...selections, game])
      updateDisplayedLineups([])
      toggleModal()
    } else updateSelections([...selections, game])
    
    console.log('selections', selections)
  }

  const updateSelectedGames = () => {
    updateChosenGames(selections)
    toggleModal()
  }

  return (
    <Wrapper>
      <h1>Select Games</h1>
      <h4>Choose the 6 matches you believe will contain the players with the highest fantasy points.</h4>
      <Grid>
      {games.map(game => {
            return (
              <div key={game.id}>
                { 
                <Game 
                  game={game}  
                  players={players} 
                  buttonText="Select Match" 
                  isSelectable={false} 
                  onSelect={addOrReplaceGame}
                />
                }
              </div>
            )
          })}
      </Grid>
      <button onClick={updateSelectedGames} className="submit" >Submit</button>
    </Wrapper>
  )
}

export default SelectionModal;