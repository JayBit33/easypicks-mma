import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  max-width: var(--bodyMaxWidth);
  margin: 0 auto;
  background-color: pink;

  @media screen and (max-width: 1400px) {
    margin: 0 6rem;
  }
`;

