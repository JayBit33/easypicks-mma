import React, { useState } from 'react';

import { PlayerIMG, Wrapper } from './Game.styles';

// Store 
import useStore from '../../store';

const Game = ({game, players, buttonText, isSelectable, replaceFight, onSelect, isGameList }) => {
  
  const [homeIsSelected, setHomeIsSelected] = useState(true);
  const [awayIsSelected, setAwayIsSelected] = useState(true);
  const [selectedGameIds, setSelectedGameIds] = useState([]); // handles initial selections in SelectionModal so background changes color when selected
  
  const deselectedIds = useStore(state => state.deselectedIds)
  const setDeselectedIds = useStore(state => state.setDeselectedIds)
  const chosenGames = useStore(state => state.chosenGames)
  const setAllSelected = useStore(state => state.setAllSelected)
  const setOnlySelectedShown = useStore(state => state.setOnlySelectedShown)

  const homeTeam = players.filter(player => game.homeTeam.teamId === player.teamId)[0];
  const awayTeam = players.filter(player => game.awayTeam.teamId === player.teamId)[0];
  const markedSelected = selectedGameIds.includes(game.id) || chosenGames.map(game => game.id).includes(game.id) && !isGameList

  const setSelected = (team, e) => {
    console.log('setSelected called')
    
    e.stopPropagation(); 
    switch (team) {
      case 'home':
        if (homeIsSelected && isSelectable) {
          if (awayIsSelected) {
            setHomeIsSelected(false);
            setDeselectedIds([...deselectedIds, homeTeam.teamId])
          }
        }
        else {
          setHomeIsSelected(true)
          const newIds = deselectedIds.filter(id => id !== homeTeam.teamId)
          setDeselectedIds(newIds)
          setDeselectedIds(deselectedIds.filter(id => id !== homeTeam.teamId))
        }
        // setAllSelected(false)
        setOnlySelectedShown(false)

        break;
        case 'away':
          if (awayIsSelected && isSelectable) {
            if (homeIsSelected) {
              setAwayIsSelected(false);
              setDeselectedIds([...deselectedIds, awayTeam.teamId])
            }
          }
          else {
            setAwayIsSelected(true)
            setDeselectedIds(deselectedIds.filter(id => id !== awayTeam.teamId))
          } 
          // setAllSelected(false)
          setOnlySelectedShown(false)
        break;
      default:
        break;
    }
  }

  return (
    <Wrapper style={{ backgroundColor: markedSelected ? '#181A1B' : ''}}>
      <div onClick={(e) => setSelected('home', e)}>
        <PlayerIMG src={homeTeam.playerImage160} alt='player image' className={`${homeIsSelected ? "active" : ""}`} />
        <h4>{homeTeam.shortName.substring(2)}</h4>
      </div>
      <h3>VS.</h3>
      <div onClick={(e) => setSelected('away', e)}>
        <PlayerIMG src={awayTeam.playerImage160} alt='player image' className={`${awayIsSelected ? "active" : ""}`} />
        <h4>{awayTeam.shortName.substring(2)}</h4>
      </div>
      <button style={{ backgroundColor: markedSelected ? 'rgb(227,76,75)' : ''}} onClick={ isSelectable ? replaceFight : () => onSelect(game, setSelectedGameIds)}>{!markedSelected ? buttonText : 'Unselect Match'}</button>
    </Wrapper>
  )
};

export default Game;