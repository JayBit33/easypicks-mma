// Store
import { useEffect, useState } from 'react';
import useStore from '../../store';

// Styles
import { PlayerIMG, Table, Wrapper } from './LineupTable.styles'

// Icons
import { AiFillDelete } from "react-icons/ai";

const LineupTable = () => {
  const [allSelected, setAllSelected] = useState(false)
  const [onlySelectedShown, setOnlySelectedShown] = useState(false)

  const displayedLineups = useStore(state => state.displayedLineups)
  const updateDisplayedLineups = useStore(state => state.updateDisplayedLineups)
  const selectedLineups = useStore(state => state.selectedLineups)
  const updateSelectedLineups = useStore(state => state.updateSelectedLineups)

  const selectAll = (e) => {
    e.stopPropagation()
    if (!allSelected) {
      setAllSelected(true)
      updateSelectedLineups([...displayedLineups])
    } else {
      setAllSelected(false)
      updateSelectedLineups([])
    }
  }
  const select = (lineup, e) => {
    e.stopPropagation()
    if (!selectedLineups.includes(lineup)) {
      updateSelectedLineups([...selectedLineups, lineup])
      console.log('is lineup checked', selectedLineups)
      console.log('is lineup checked', selectedLineups.filter(sl => sl.id === lineup.id).length > 0)
    } else {
      updateSelectedLineups(selectedLineups.filter(sl => sl.id !== lineup.id))
    }
  }

  const removeLineup = (id) => {
    console.log('remove', id)
    updateDisplayedLineups(displayedLineups.filter(l => l.id !== id))
  }

  const showOnlySelected = () => {
    if (onlySelectedShown) {
      // updateDisplayedLineups(stored state variable)
      setOnlySelectedShown(false)
    } else {
      // store off all current displayedLineups in a state variable before updating displayedLineups to show only selected lineups
      updateDisplayedLineups(selectedLineups)
      setOnlySelectedShown(true)
    }
  }

  useEffect(() => {
    console.log('lineups changed', displayedLineups)
  },[displayedLineups])

  return (
    <Wrapper className="table">
      <Table onClick={(e) => e.stopPropagation()}>
        <thead>
          <tr>
            <th><input type="checkbox" onChange={ (e) => selectAll(e) } checked={allSelected} /></th>
            <th>Pick 1</th>
            <th>Pick 2</th>
            <th>Pick 3</th>
            <th>Pick 4</th>
            <th>Pick 5</th>
            <th>Pick 6</th>
            {/* <th>Total Salary</th> */}
            <th><button onClick={showOnlySelected}>{ onlySelectedShown ? 'Show All' : 'Show Only Selected' }</button></th>
          </tr>
        </thead>
        <tbody>
          {displayedLineups.map((lineup) => {
            {
              if (lineup.id !== '')
                return (
                  <tr key={lineup.id}>
                    <td><input type="checkbox" onChange={(e) => select(lineup, e)} checked={ selectedLineups.filter(sl => sl === lineup).length > 0 || allSelected} /></td>
                      {lineup.teams.map(player => (
                        <td key={player.teamId}>        
                          <PlayerIMG src={player.playerImage160} alt='player image' className={`${true ? "active" : ""}`} />
                        </td>
                      ))}
                    {/* <td>${lineup.totalSalary}</td> */}
                    <td className="actions">
                      <button onClick={(e) => select(lineup, e)} className={selectedLineups.filter(sl => sl === lineup).length > 0 ? 'selected' : ''}>{ selectedLineups.filter(sl => sl === lineup).length > 0 ? 'Selected' : 'Select' }</button>
                      <AiFillDelete className="deleteBtn" onClick={() => removeLineup(lineup.id)} />
                    </td>
                  </tr>
                )
            }
          })}
        </tbody>
      </Table>
    </Wrapper>
  )
};

export default LineupTable;