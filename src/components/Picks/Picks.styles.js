import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 20px;
  margin-bottom: 4rem;
  `;
  
export const Content = styled.div`
  max-width: 1480px;
  margin: 0 auto;

  h1 {
    color: white;
  }
`;

export const Grid = styled.div`
  display: flex;
  margin-bottom: 19rem;
  
  .nav {
    color: white;
    font-family: 'Montserrat';
    margin-right: 10rem;
    ul {
      list-style-type: none;
      text-decoration: none;

      li {
        padding-top: 1rem;
      }
    }
  }
`;

export const PlayerIMG = styled.img`
  width: 75px;
  height: 80px;
  opacity: 1;
  background-color: #000000;
  border-radius: 50%;
`;
