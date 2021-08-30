import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: black;
  border: none;
  width: 85%;
  max-width: 1600px;
  z-index: 9;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem 3rem;

  h1 {
    font-family: 'Arial', serif;
    text-align: center;
    text-transform: uppercase;
  }

  h4 {
    text-align: center;
    color: white;
  }

  .submit {
    background-color: green;
    font-size: 1.25rem;
    text-transform: uppercase;
    color: white;
    cursor: pointer;
    padding: 1rem 1rem .75rem 1rem;
    display: block;
    margin: 0 auto;
    border: none;

    :hover {
      background-color: #21b522;
    }
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