import React, { useState } from 'react';

import { PlayerIMG, Wrapper } from './Game.styles';

// Store 
import useStore from '../../store';

const Game = ({game, players, buttonText, isSelectable, replaceFight, onSelect }) => {
  
  const [homeIsSelected, setHomeIsSelected] = useState(true);
  const [awayIsSelected, setAwayIsSelected] = useState(true);
  
  const initialLineups = useStore(state => state.initialLineups)
  const selectedLineups = useStore(state => state.selectedLineups)
  const updateSelectedLineups = useStore(state => state.updateSelectedLineups)
  const deselectedIds = useStore(state => state.deselectedIds)
  const setDeselectedIds = useStore(state => state.setDeselectedIds)

  const homeTeam = players.filter(player => game.homeTeam.teamId === player.teamId)[0];
  const awayTeam = players.filter(player => game.awayTeam.teamId === player.teamId)[0];

  const setSelected = (team, e) => {
    e.stopPropagation(); 
    console.log('homeTeam', homeTeam)
    switch (team) {
      case 'home':
        if (homeIsSelected && isSelectable) {
          if (awayIsSelected) {
            setHomeIsSelected(false);
            const res = selectedLineups.map((player) => {
              let shouldAdd = true
              player.forEach(p => {
                if(p.teamId === homeTeam.teamId) shouldAdd = false
              })
              if (shouldAdd) return player
            })
            updateSelectedLineups(res.filter(r => r !== undefined))
            setDeselectedIds([...deselectedIds, homeTeam.teamId])
          }
        }
        else {
          setHomeIsSelected(true)
          const newIds = deselectedIds.filter(id => id !== homeTeam.teamId)
          setDeselectedIds(newIds)
    
          const res = initialLineups.map((lineup) => {
            let shouldAdd = false
            lineup.every(p => {
              if(p.teamId === homeTeam.teamId) shouldAdd = true
              if (deselectedIds.includes(p.teamId) && p.teamId !== homeTeam.teamId) { return false; }
            })
            if (shouldAdd) return lineup
          })
          const reAddedLineups = res.filter(r => r !== undefined)
          updateSelectedLineups([...reAddedLineups, ...selectedLineups])
        }
        
        
        break;
        case 'away':
          if (awayIsSelected && isSelectable) {
            if (homeIsSelected) {
              setAwayIsSelected(false);
              const res = selectedLineups.map((player) => {
                let shouldAdd = true
                player.forEach(p => {
                  if(p.teamId === awayTeam.teamId) shouldAdd = false
                })
                if (shouldAdd) return player
              })
              updateSelectedLineups(res.filter(r => r !== undefined))
            }
          }
          else {
            setAwayIsSelected(true)
            const res = initialLineups.map((lineup) => {
              let shouldAdd = false
              lineup.forEach(p => {
                if(p.teamId === awayTeam.teamId) shouldAdd = true
              })
              if (shouldAdd) return lineup
            })
            const reAddedLineups = res.filter(r => r !== undefined)
            updateSelectedLineups([...reAddedLineups, ...selectedLineups])
          } 
        break;
      default:
        break;
    }
  }

  return (
    <Wrapper>
      <div onClick={(e) => setSelected('home', e)}>
        <PlayerIMG src={homeTeam.playerImage160} alt='player image' className={`${homeIsSelected ? "active" : ""}`} />
        <h4>{homeTeam.shortName.substring(0, 11)}</h4>
      </div>
      <h3>VS.</h3>
      <div onClick={(e) => setSelected('away', e)}>
        <PlayerIMG src={awayTeam.playerImage160} alt='player image' className={`${awayIsSelected ? "active" : ""}`} />
        <h4>{awayTeam.shortName.substring(0, 11)}</h4>
      </div>
      <button onClick={ isSelectable ? replaceFight : () => onSelect(game)}>{buttonText}</button>
    </Wrapper>
  )
};

export default Game;