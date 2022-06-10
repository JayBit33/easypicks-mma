import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fill, auto);
  grid-template-columns: auto;
  height: 1400px;
  background-color: black;
  
  @media only screen and (min-width: 1778px) {
    grid-template-columns: auto auto;
    height: 700px;
  }
`;