import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: black;
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1480px;
  padding: .25remj;
  margin: 0 auto;
`;

export const Nav = styled.ul`
  display: inherit;
  list-style-type: none;
  margin: 0;
  
  li {
    padding: 0 1rem;
    
    a {
      text-decoration: none;
    }
    
    p {
      font-size: var(--fontMed);
      color: white;
      line-height: 1.625rem;

      .badge {
        width: 1.5rem;
        height: 1.5rem;
        display: inline-block;
        border-radius: 50%;
        margin: 0 .25rem;
        background-color: green;
        color: white;
        font-family: 'Montserrat';
        font-size: 1rem;
        text-align: center;
        line-height: 1.625rem;
        position: relative;
        bottom: .5rem;
      }
    }
  }
  
  `;

export const LogoImg = styled.img`
  width: 200px;
  height: 80px;
  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;