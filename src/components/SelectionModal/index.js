import React, { useEffect, useState } from 'react';

// Components
import Game from '../Game';
import Toast from '../Toast';

// Store
import useStore from '../../store';

// Styles
import { Wrapper, Grid } from './SelectionModal.styles';

const SelectionModal = ({ games, players, isReplacing, toggleModal }) => {
  const [selections, updateSelections] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

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
      console.log(selections)
      if (selections.filter(s => s.id === game.id).length > 0) {
        validateSelections(true, 'Match Already chosen.')
        return
      } else {
        updateChosenGames([...selections, game])
        updateDisplayedLineups([])
        toggleModal()
      }
    } else if (selections.length < 6) updateSelections([...selections, game])
    else validateSelections( true, 'Can only select 6 games. Too many games selected')

    // need to handle unselect
    
    console.log('selections', selections)
  }

  const updateSelectedGames = () => {
    updateChosenGames(selections)
    toggleModal()
  }

  const validateSelections = (hasError = false, errorMsg='') => {
    // write boundary checks
    if (selections.length < 6 && !isReplacing) {
      errorMsg = `Must select ${6 - selections.length} more games`
      hasError = true
    }
    if (hasError) setErrorMessage(errorMsg);
    else {
      updateSelectedGames();
    }
  }

  return (
    <Wrapper>
      {
        errorMessage && <Toast msg={errorMessage} />
      }
      <>
      <h1 style={ errorMessage ? {'visibility': 'hidden' } : {}}>UFC Fight Night Aug 20</h1>
      <h4 style={ errorMessage || isReplacing ?{'visibility': 'hidden' } : {}}>Choose the 6 matches you believe will contain the players with the highest fantasy points.</h4>
      </>
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
      <button onClick={() => validateSelections()} className="submit" >Submit</button>
    </Wrapper>
  )
}

export default SelectionModal;