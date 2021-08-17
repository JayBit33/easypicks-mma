import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--white);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1480px;
  padding: 20px;
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