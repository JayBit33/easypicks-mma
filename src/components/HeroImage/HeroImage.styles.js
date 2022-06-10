import styled from 'styled-components';

export const Wrapper = styled.div`
  ${(props) => `
  background-image: url('${props.image}')`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 900px;
  // max-width: var(--maxWidth);
  position: relative;
  margin: 0 auto;
  // animation: animateHeroimage 1s;

  // @keyframes animateHeroimage {
  //   from {
  //     opacity: 0;
  //   }
  //   to {
  //     opacity: 1;
  //   }
  // }
`;

export const Content = styled.div`
  padding: 20px;
  max-width: var(--maxWidth);
  margin: 0 auto;
`;

export const Text = styled.div`
  z-index: 100;
  text-align: center;
  padding-top: 4rem;
  color: var(--white);
  
  h1 {
    font-family: "Open Sans", "Segoe UI", Tahoma, sans-serif;
    font-size: var(--fontSuperBig);
    text-transform: capitalize;
    text-align: center;

    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }

  p {
    color: var(--white);
    font-family: "Open Sans", "Segoe UI", Tahoma, sans-serif;
    font-size: var(--fontBig);
  
    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }

  @media screen and (max-width: 720px) {
    max-width: 100%;
  }
`;
