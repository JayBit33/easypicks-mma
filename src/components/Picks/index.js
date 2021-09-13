import React from 'react';

// Styles
import { Wrapper, Content, Grid, Table, PlayerIMG } from './Picks.styles';

// Icons
import { AiFillDelete } from "react-icons/ai";

// Components
import LineupTable from '../LineupTable';

// Store
import useStore from '../../store';

const Picks = () => {

  const savedPicks = useStore(state => state.savedPicks)

  return (
  <Wrapper>
    <Content>
      <h1>Picks</h1>
      <Grid>
        <div className="nav">
          <ul>
            <li>Current Picks</li>
            <li>Picks History</li>
            <li>UFC 250</li>
            <li>UFC FN Sep 18</li>
            <li>UFC FN Sep 25</li>
            <li>UFC 251</li>
            <li>UFC FN Oct 24</li>
            <li>UFC FN Oct 31</li>
            <li>UFC FN Nov 7</li>
          </ul>
        </div>
        <LineupTable isPicksList={true} savedLineups={savedPicks} />
      </Grid>
    </Content>
  </Wrapper>
)};

export default Picks;