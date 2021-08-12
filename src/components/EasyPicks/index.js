import React, { useEffect, useState } from 'react';

// Components
import lineups from '../../fighters';
import GameList from '../GameList';
import LineupTable from '../LineupTable';
import SelectionModal from '../SelectionModal';

// Store
import useStore from '../../store'

// Utils
import compute from '../../probabilities/pick6';

// Styles
import { Wrapper, Content, Grid } from './EasyPicks.styles';

const EasyPicks = () => {
    const [players, setPlayers] = useState([]);
    const [games, setGames] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(true);
    const chosenGames = useStore(state => state.chosenGames);
    const selectedLineups = useStore(state => state.selectedLineups);
    const updateChosenGames = useStore(state => state.updateChosenGames);
    const updateInitialLineups = useStore(state => state.updateInitialLineups);
    const updateSelectedLineups = useStore(state => state.updateSelectedLineups);

    console.log('chosenGames', chosenGames)

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

      setPlayers(playerInfos);
      setGames(gameInfo);
    }, [])

    // Runs on initial render and anytime chosenGames is updated
    useEffect(() => {
      const teamIds = chosenGames.map(game => {
        return [game.homeTeam.teamId, game.awayTeam.teamId]
      })

      const lineupIds = compute(teamIds);
      const idsToPlayers = lineupIds.map(lineup => {
        let res = []
        lineup.forEach(id => {
          res.push(players.find(p => p.teamId === id))
        })
        return res
      })

      updateInitialLineups(idsToPlayers)
      updateSelectedLineups(idsToPlayers)
    }, [chosenGames])

    const replaceGame = (selectedGame) => {
      const selectionsMinusRemoval = chosenGames.filter(game => game.id !== selectedGame.id)
      updateChosenGames(selectionsMinusRemoval)
      setIsModalOpen(!isModalOpen)
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
            toggleModal={toggleModal}
          />
        }
        <Wrapper blur={isModalOpen} onClick={toggleModal}>
          <Content>
            <h3 className="resultCount"># of Results: {selectedLineups.length}</h3>
            <Grid>
              <GameList 
                games={games} 
                players={players} 
                replaceFight={replaceGame}
              />
              <LineupTable className="table" />
            </Grid>
          </Content>
        </Wrapper>
      </>
    )
};

export default EasyPicks;