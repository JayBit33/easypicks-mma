import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: black;
  border: 1px solid white;
  width: 85%;
  max-width: 1600px;
  z-index: 9;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 3rem;

  h1 {
    font-family: 'Times New Roman', serif;
    text-align: center;
    text-transform: uppercase;
  }

  .submit {
    background-color: green;
    font-size: 1.25rem;
    text-transform: uppercase;
    cursor: pointer;
    padding: 1rem 1rem .75rem 1rem;
    display: block;
    margin: 0 auto;
    border: none;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fill, auto);
  grid-template-columns: auto auto auto auto;
  grid-row-gap: .5rem;
  grid-column-gap: .75rem;
  align-items: center;
  padding: 1.5rem 2rem 0 2rem;
  height: 800px;
  overflow-y: scroll;
  scrollbar-width: thin;
`;