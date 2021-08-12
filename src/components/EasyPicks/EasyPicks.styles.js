import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--white);
  padding: 0 20px;

  ${props => props.blur ?
    `filter: blur(1rem);
    opacity: .7;` : ``
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: var(--maxWidth);
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
  grid-template-rows: auto;
  grid-template-columns: auto auto;
  grid-column-gap: 0rem;
  margin: 0 auto;
`;