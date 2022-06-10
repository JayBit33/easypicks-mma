import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 2fr 1fr 2fr;
  grid-row-gap: .25rem;
  align-items: center;
  max-width: 340px;
  // border-bottom: 1px solid lightgrey;
  // border-left: 1px solid lightgrey;
  padding: 1.5rem 2rem 1.5rem 2rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    h4 {
      width: 95px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;
      color: white;
    }
  }
  h3 {
    margin-top: 7.125rem;
    text-align: center;
    color: white;
  }

  button {
    grid-column-start: 1;
    grid-column-end: 4;
    background-color: green;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    padding: .25rem;
    border: none;

    :hover {
      background-color: #21b522;
    }
  }

  .active {
    opacity: 1;
    filter: brightness(110%);
    transition: .7s;
    background-color: #222222;
  }
`;

export const PlayerIMG = styled.img`
width: 90px;
height: 95px;
opacity: .5;
background-color: #222222;
border-radius: 50%;
`;