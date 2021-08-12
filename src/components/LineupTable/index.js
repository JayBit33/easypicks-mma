// Store
import { useEffect, useState } from 'react';
import useStore from '../../store';

// Styles
import { PlayerIMG, Table, Wrapper } from './LineupTable.styles'

// Icons
import { AiFillDelete } from "react-icons/ai";

const LineupTable = () => {
  const selectedLineups = useStore(state => state.selectedLineups)

  return (
    <Wrapper className="table">
      <Table onClick={(e) => e.stopPropagation()}>
        <thead>
          <tr>
            <th><input type="checkbox" onClick={(e) => e.stopPropagation()} /></th>
            <th>Pick 1</th>
            <th>Pick 2</th>
            <th>Pick 3</th>
            <th>Pick 4</th>
            <th>Pick 5</th>
            <th>Pick 6</th>
            <th>Total Salary</th>
            <th><button >Show Only Selected</button></th>
          </tr>
        </thead>
        <tbody>
          {selectedLineups.map((lineup, i) => {
            return (
            <tr key={i}>
              <td><input type="checkbox" onClick={(e) => e.stopPropagation()} /></td>
                {lineup.map(player => (
                  <td key={player.teamId}>        
                    <PlayerIMG src={player.playerImage160} alt='player image' className={`${true ? "active" : ""}`} />
                  </td>
                ))}
              <td>$47,000</td>
              <td className="actions">
                <button>Select</button>
                <AiFillDelete className="deleteBtn" />
              </td>
            </tr>
            )
          })}
        </tbody>
      </Table>
    </Wrapper>
  )
};

export default LineupTable;