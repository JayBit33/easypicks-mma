import React from 'react';
import HeroImage from '../HeroImage';
import Image from '../../images/HeaderImage.png';
import { Wrapper } from './Home.styles';
const Home = () => {

    return (
        <>
          <HeroImage image={Image} title='View all Possible Lineups' text='Use filters to create your lineups and save your pick history'/>
          <Wrapper>
              <h3>Home</h3>
          </Wrapper>
        </>
    )
};

export default Home;