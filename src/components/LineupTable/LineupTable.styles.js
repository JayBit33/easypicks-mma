import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 1400px;
  overflow-y: scroll;

  @media only screen and (min-width: 1778px) {
    height: 700px;
  }
`;

export const Table = styled.table`
border-spacing: 0;
border-collapse: collapse;
max-height: 900px;
min-width: 860px;
position: relative;

  thead {
    position: sticky;
    top: 0;
    z-index: 9;
    background-color: black;
    padding: 1rem;
    margin-bottom: 2rem;
    
    th {
      padding: 1rem 1rem;
    }

    button {
      background-color: green;
      min-width: 155px;
      :hover {
        background-color: #21b522;
      }
    }
  }

  tbody {
    
    td {
      padding: .75rem .25rem;
      text-align: center;
    }

    tr:nth-child(even) {
      background-color: lightgrey;\
    }

    tr:nth-child(odd) {
      // background: brown;

      // button {
      //   background-color: green;
  
      //   :hover {
      //     background-color: #21b522;
      //   }
      // }
    }
  }

  input[type=checkbox] {
    transform: scale(1.5);
  }

  .active {
    opacity: 1;
    filter: brightness(110%);
    transition: .7s;
    background-color: black;
  }

  button {
    padding: 1rem;
    border: none;
    cursor: pointer;
    transition: .3s;
    background-color: pink;

      :hover {
        background-color: #21b522;
      }
    }
  }

  .actions {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.25rem;
    margin-right: 3rem;

    .selected {
      background-color: green;

      :hover {
        background-color: #21b522;
      }
    }

    .deleteBtn {
      position: absolute;
      right: 3rem;
      font-size: 1.5rem;
      cursor: pointer;
      transition: .3s;
  
      :hover {
        color: pink;
      }
    }
  }
`;

export const PlayerIMG = styled.img`
  width: 80px;
  height: 85px;
  opacity: .5;
  background-color: #dddddd;
  border-radius: 50%;
`;