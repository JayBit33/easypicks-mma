import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: var(--medGrey);
  color: white;
  padding: 0 20px;
  margin-top: 7rem;
  margin-bottom: 14rem;

  ${props => props.blur ?
    `filter: blur(1rem);
     opacity: .7;` : `filter: none; opacity: 1;`
  }

  .save {
    // float: right;
    // margin-right: 11rem;
    // position: absolute;
    // left: 50%;
    // transform: translate(-50%, -50%);
    // margin-top: 3rem;
    font-size: 1.25rem;
    padding: 1rem;
    border: none;
    cursor: pointer;
    transition: .3s;
    background-color: green;

    :hover {
      background-color: #21b522;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1900px;
  padding: 20px;
  margin: 0 auto;
  margin-top: 4rem;
  position: relative;

  .resultCount {
    position: absolute;
    right: 13.5rem;
    top: -2rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: auto auto;
  // grid-row-gap: 1rem;
  grid-column-gap: 0rem;
  margin: 0 auto;
  background-color: black;
  
  .clear {
    width: 100%;
    margin: 0 auto;
    font-size: 1.25rem;
    color: white;
    border: none;
    background-color: #981918;
    transition: .3s;
    cursor: pointer;
    
    :hover {
      // filter: hue-rotate(30deg);
      filter: contrast(1.4);
    }
  }
  .save {
    width: 100%;
    margin: 0 auto;
    color: white;
    grid-column-start: 2;
    grid-column-end: 3;
    background-color: #21b522;

    :hover {
      background-color: green;
    }
  }
`;