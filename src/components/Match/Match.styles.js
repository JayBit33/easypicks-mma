import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto auto auto auto auto auto;
  grid-template-columns: 2fr 1fr 2fr;
  grid-row-gap: .25rem;
  align-items: center;
  border: 1px solid lightgrey;
  border-bottom: none;
  padding: 1.5rem 2rem 0 2rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h3 {
    margin-top: 7.125rem;
    text-align: center;
  }

  button {
    grid-column-start: 1;
    grid-column-end: 4;
  }

  .active {
    opacity: 1;
    filter: brightness(110%)
  }
`;


export const PlayerIMG = styled.img`
width: 90px;
height: 95px;
opacity: .5;
background-color: #dddddd;
border-radius: 50%;
`;