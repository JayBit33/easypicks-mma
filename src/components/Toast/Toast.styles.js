import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 70%;
  position: absolute;
  left: 50%;
  top: 4%;
  transform: translateX(-50%);
  margin-top: 4rem;
  margin-bottom: 2rem;
  `;
  
  export const Content = styled.div`
  h4 {
    font-size: 1.25rem;
    text-align: center;
    background: rgba(255, 255, 0, .7);
    padding: 2rem;
    color: black;
    margin: .75rem;
    opacity: 1;
    z-index: 99;
  }
`;