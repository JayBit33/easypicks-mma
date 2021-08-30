import React, { useState } from 'react';

import { PlayerIMG, Wrapper } from './Game.styles';

// Store 
import useStore from '../../store';

const Game = ({game, players, buttonText, isSelectable, replaceFight, onSelect }) => {
  
  const [homeIsSelected, setHomeIsSelected] = useState(true);
  const [awayIsSelected, setAwayIsSelected] = useState(true);
  
  const initialLineups = useStore(state => state.initialLineups)
  const displayedLineups = useStore(state => state.displayedLineups)
  const updateDisplayedLineups = useStore(state => state.updateDisplayedLineups)
  const deselectedIds = useStore(state => state.deselectedIds)
  const setDeselectedIds = useStore(state => state.setDeselectedIds)
  const [isSelected, setIsSelected] = useState(false);


  const homeTeam = players.filter(player => game.homeTeam.teamId === player.teamId)[0];
  const awayTeam = players.filter(player => game.awayTeam.teamId === player.teamId)[0];

  const setSelected = (team, e) => {
    console.log('setSelected called')
    
    e.stopPropagation(); 
    switch (team) {
      case 'home':
        if (homeIsSelected && isSelectable) {
          if (awayIsSelected) {
            setHomeIsSelected(false);
            // const res = displayedLineups.map(lineup => {
            //   let shouldAdd = true
            //   lineup.teams.forEach(p => {
            //     if(p.teamId === homeTeam.teamId) shouldAdd = false
            //   })
            //   if (shouldAdd) return lineup
            // })
            // updateDisplayedLineups(res.filter(r => r !== undefined))
            setDeselectedIds([...deselectedIds, homeTeam.teamId])
          }
        }
        else {
          setHomeIsSelected(true)
          const newIds = deselectedIds.filter(id => id !== homeTeam.teamId)
          setDeselectedIds(newIds)
    
          // const res = initialLineups.map(lineup => {
          //   let shouldAdd = false
          //   lineup.teams.every(p => {
          //     if(p.teamId === homeTeam.teamId) shouldAdd = true
          //     if (deselectedIds.includes(p.teamId) && p.teamId !== homeTeam.teamId) { return false; }
          //   })
          //   if (shouldAdd) return lineup
          // })
          // const reAddedLineups = res.filter(r => r !== undefined)
          // updateDisplayedLineups([...reAddedLineups, ...displayedLineups])
          setDeselectedIds(deselectedIds.filter(id => id !== homeTeam.teamId))
        }
        
        
        break;
        case 'away':
          if (awayIsSelected && isSelectable) {
            if (homeIsSelected) {
              setAwayIsSelected(false);
              setDeselectedIds([...deselectedIds, awayTeam.teamId])

              // const res = displayedLineups.map(lineup => {
              //   let shouldAdd = true
              //   lineup.teams.forEach(p => {
              //     if(p.teamId === awayTeam.teamId) shouldAdd = false
              //   })
              //   if (shouldAdd) return lineup
              // })
              // updateDisplayedLineups(res.filter(r => r !== undefined))
            }
          }
          else {
            setAwayIsSelected(true)
            setDeselectedIds(deselectedIds.filter(id => id !== awayTeam.teamId))

            // const res = initialLineups.map(lineup => {
            //   let shouldAdd = false
            //   lineup.teams.forEach(p => {
            //     if(p.teamId === awayTeam.teamId) shouldAdd = true
            //   })
            //   if (shouldAdd) return lineup
            // })
            // const reAddedLineups = res.filter(r => r !== undefined)
            // updateDisplayedLineups([...reAddedLineups, ...displayedLineups])
          } 
        break;
      default:
        break;
    }
  }

  return (
    <Wrapper style={{ backgroundColor: isSelected ? '#181A1B' : ''}}>
      <div onClick={(e) => setSelected('home', e)}>
        <PlayerIMG src={homeTeam.playerImage160} alt='player image' className={`${homeIsSelected ? "active" : ""}`} />
        <h4>{homeTeam.shortName.substring(2)}</h4>
      </div>
      <h3>VS.</h3>
      <div onClick={(e) => setSelected('away', e)}>
        <PlayerIMG src={awayTeam.playerImage160} alt='player image' className={`${awayIsSelected ? "active" : ""}`} />
        <h4>{awayTeam.shortName.substring(2)}</h4>
      </div>
      <button onClick={ isSelectable ? replaceFight : () => onSelect(game, setIsSelected)}>{buttonText}</button>
    </Wrapper>
  )
};

export default Game;