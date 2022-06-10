// Store
import { useEffect, useState } from 'react';
import useStore from '../../store';

// Styles
import { PlayerIMG, Table, Wrapper } from './LineupTable.styles'

// Icons
import { AiFillDelete } from "react-icons/ai";

const LineupTable = ({ isPicksList, savedLineups, setErrorMessage }) => {
  // const [allSelected, setAllSelected] = useState(false)
  // const [onlySelectedShown, setOnlySelectedShown] = useState(false)
  const [shownLineups, setShownLineups] = useState([])

  const displayedLineups = useStore(state => state.displayedLineups)
  const updateDisplayedLineups = useStore(state => state.updateDisplayedLineups)
  const selectedLineups = useStore(state => state.selectedLineups)
  const updateSelectedLineups = useStore(state => state.updateSelectedLineups)
  const deselectedIds = useStore(state => state.deselectedIds)
  const setNumberOfLineupsShown = useStore(state => state.setNumberOfLineupsShown)
  const allSelected = useStore(state => state.allSelected)
  const setAllSelected = useStore(state => state.setAllSelected)
  const onlySelectedShown = useStore(state => state.onlySelectedShown)
  const setOnlySelectedShown = useStore(state => state.setOnlySelectedShown)

  const selectAll = (e) => {
    e.stopPropagation()
    if (!allSelected) {
      setAllSelected(true)
      updateSelectedLineups([...shownLineups])
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
      const shown = displayedLineups.filter(l => {
        let filterOut = true
        l.teams.forEach(team => {
          if(deselectedIds.includes(team.teamId)) {
            filterOut = false
          }
        }); 
        return filterOut 
      });
      setShownLineups(shown)
      setOnlySelectedShown(false) 
      setNumberOfLineupsShown(shown.length) 
    } else {
      if (selectedLineups.length === 0) {
        setErrorMessage('No Lineups Are Currently Selected')
        setTimeout(() => setErrorMessage(null) , 3000);
      } else {
        // store off all current displayedLineups in a state variable before updating displayedLineups to show only selected lineups
        const shown = displayedLineups.filter(lineup => selectedLineups.map(lu => lu.id).includes(lineup.id))
        setShownLineups(shown)
        setOnlySelectedShown(true)
        setNumberOfLineupsShown(shown.filter(lineup => selectedLineups.map(lu => lu.id).includes(lineup.id)).length)
      }
    }
  }

  // remove any lineup containing a teamId that is in deselectedIds.
  useEffect(() => {
    const res = displayedLineups.filter(l => {
      let filterOut = true
      l.teams.forEach(team => {
        if(deselectedIds.includes(team.teamId)) {
          filterOut = false
        }
      }); 
      return filterOut 
    });
    setShownLineups(res)
    setNumberOfLineupsShown(res.length)
  },[deselectedIds, displayedLineups])

  return (
    <Wrapper className="table">
      <Table onClick={(e) => e.stopPropagation()} isPicksList={isPicksList}>
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
            <th><button onClick={showOnlySelected}>{ isPicksList ? 'Delete Selected' : (onlySelectedShown ? 'Show All' : 'Show Only Selected') }</button></th>
          </tr>
        </thead>
        <tbody>
          { !isPicksList ? shownLineups.map((lineup) => {
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
          }) :
          savedLineups.map((lineup) => {
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
          })
          }
        </tbody>
      </Table>
    </Wrapper>
  )
};

export default LineupTable;