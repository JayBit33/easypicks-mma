import React, { useEffect, useState } from 'react';

// Components
import lineups from '../../fighters';
import GameList from '../GameList';
import LineupTable from '../LineupTable';
import SelectionModal from '../SelectionModal';
import Toast from '../Toast';

// Store
import useStore from '../../store'

// Utils
import compute from '../../probabilities/pick6';

// Styles
import { Wrapper, Content, Grid } from './EasyPicks.styles';

// SessionStorage Keys
const PLAYER_KEY= 'players';

const EasyPicks = () => {
    const sessionPlayerData = sessionStorage.getItem('players');
    let playersState = sessionPlayerData && sessionPlayerData !== [] ? JSON.parse(sessionPlayerData) : []

    const [players, setPlayers] = useState(playersState);
    const [games, setGames] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isReplacing, setIsReplacing] = useState(false);
    const [toastMessage, setToastMessage] = useState('')

    const chosenGames = useStore(state => state.chosenGames);
    const updateChosenGames = useStore(state => state.updateChosenGames);
    const updateInitialLineups = useStore(state => state.updateInitialLineups);
    const updateDisplayedLineups = useStore(state => state.updateDisplayedLineups);
    const selectedLineups = useStore(state => state.selectedLineups);
    const updateSelectedLineups = useStore(state => state.updateSelectedLineups)
    const savedPicks = useStore(state => state.savedPicks);
    const updateSavedPicks = useStore(state => state.updateSavedPicks);
    const numberOfLineupsShown = useStore(state => state.numberOfLineupsShown);
    const setAllSelected = useStore(state => state.setAllSelected)

    useEffect(() => {

      // players will be an array of player objects that contains the following
      const playerInfos = lineups.classicLineup.draftables.map(draft => {
        return {
          teamId: draft.teamId,
          displayName: draft.displayName,
          shortName: draft.shortName,
          playerImage50: draft.playerImage50,
          playerImage160: draft.playerImage160,
          salary: draft.salary,
          competitionName: draft.competition.name
        }
      });

      const gameInfo = lineups.classicLineup.competitions.map(comp => {
        return {
          id: comp.competitionId,
          awayTeam: { teamId: comp.awayTeam.teamId, name: comp.awayTeam.teamName },
          homeTeam: { teamId: comp.homeTeam.teamId, name: comp.homeTeam.teamName }
        }
      })

      // Handle page refresh so that player and chosenGames state is not lost
      if (window.performance) {
        if (performance.navigation.type == 1) {
          // This page has been reloaded
          setIsModalOpen(false)
        } else {
          // This page is not reloaded
          sessionStorage.setItem(PLAYER_KEY, [])
          setIsModalOpen(true)
        }
      }

      setPlayers(playerInfos);
      setGames(gameInfo);
    }, [])

    // anytime players is updated update players in sessionStorage
    useEffect(() => {
      sessionStorage.setItem(PLAYER_KEY, JSON.stringify(players))
    },[players])


    // Runs on initial render and anytime chosenGames is updated
    useEffect(() => {
      const maxSalary = 50000
      const teamIds = chosenGames.map(game => {
        return [game.homeTeam.teamId, game.awayTeam.teamId]
      })

      // compute lineups returns array of player ids
      const lineupIds = compute(teamIds);
      // convert array of ids to array of players
      const idsToPlayers = lineupIds.map(lineup => {
        let res = []
        lineup.forEach(id => {
          res.push(players.find(p => p.teamId === id))
        })
        return res
      })

      console.log('idsToPlayers', idsToPlayers)
      // create new object for each lineup that contains a unique id
      const finalLineups = idsToPlayers.map(lineup => {
        return {
          id: lineup.reduce((acc, item) => acc + item.teamId, ''),
          teams: lineup,
          totalSalary: lineup.reduce((acc, item) => acc + item.salary, 0)
        }
      })
      // Remove lineups with totalSalary over maxSalary
      updateInitialLineups(finalLineups.filter(l => l.totalSalary <= maxSalary))
      updateDisplayedLineups(finalLineups.filter(l => l.totalSalary <= maxSalary))

      // anytime chosenGames is updated update chosenGames in sessionStorage
      sessionStorage.setItem('chosenGames', JSON.stringify(chosenGames))

    }, [chosenGames, players, updateDisplayedLineups])
    
    const replaceAll = (e) => {
      e.stopPropagation()
      resetTable(false)
      updateChosenGames([])
      updateDisplayedLineups([])
    }

    const replaceGame = (selectedGame) => {
      const selectionsMinusRemoval = chosenGames.filter(game => game.id !== selectedGame.id)
      updateChosenGames(selectionsMinusRemoval)
      resetTable(true)
      console.log('updateChosenGames called from EasyPicks')
    }

    const resetTable = (isBeingReplaced) => {
      setIsReplacing(isBeingReplaced)
      setAllSelected(false)
      setIsModalOpen(!isModalOpen)
      updateSelectedLineups([])
      updateInitialLineups([])
    }

    const savePicks = (e) => {
      e.stopPropagation()
      if (selectedLineups.length > 0) {
        updateSavedPicks([...savedPicks, ...selectedLineups])
        setToastMessage('Your Lineup Selections Have Been Saved')
        setTimeout(() => setToastMessage(null) , 2500);
      } else {
        setToastMessage('No Lineups Are Currently Selected')
        setTimeout(() => setToastMessage(null) , 2500);
      }
    }

    const toggleModal = () => {
      setIsModalOpen(!isModalOpen)
    }

    return (
      <>
        { isModalOpen && 
          <SelectionModal 
            games={games} 
            players={players} 
            isReplacing={isReplacing}
            toggleModal={toggleModal}
          />
        }
        <Wrapper blur={isModalOpen} onClick={toggleModal}>
          {
            toastMessage && <Toast msg={toastMessage} />
          }
          <Content>
            <h3 className="resultCount"># of Results: {numberOfLineupsShown}</h3>
            <Grid>
              <GameList 
                games={games} 
                players={players} 
                replaceFight={replaceGame}
              />
              <LineupTable setErrorMessage={setToastMessage} />
              <button className="clear" onClick={e => replaceAll(e)}>Replace All</button>
              <button className="save" onClick={e => savePicks(e)}>Add Selected Lineup's To Picks</button>
            </Grid>
          </Content>
        </Wrapper>
      </>
    )
};

export default EasyPicks;