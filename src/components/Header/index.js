import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo_whitebg.png';
import { Wrapper, Content, Nav, LogoImg } from './Header.styles';

const Header = () => (
    <Wrapper>
      <Content>
          <Link to='/'>
              <LogoImg src={Logo} alt='easypicks-logo' />
          </Link>
          <Nav>
            <li><Link to='/'>
              <p>Home</p>
            </Link></li>
            <li><Link to='/easy-picks'>
              <p>Make Picks</p>
            </Link></li>
          </Nav>
      </Content>
    </Wrapper>
);

export default Header;