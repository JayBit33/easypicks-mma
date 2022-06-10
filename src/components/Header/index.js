import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo_whitebg.png';
import { Wrapper, Content, Nav, LogoImg } from './Header.styles';

// Store
import useStore from '../../store'


const Header = () => {
  const savedPicks = useStore(state => state.savedPicks);

  return (
    <Wrapper>
      <Content>
          <Link to='/'>
              <LogoImg src={Logo} alt='easypicks-logo' />
          </Link>
          <Nav>
            {/* <li><Link to='/'>
              <p>Home</p>
            </Link></li> */}
            <li><Link to='/easy-picks'>
              <p>Easy Picker</p>
            </Link></li>
            <li><Link to='/picks'>
              <p>Picks<span className="badge">{savedPicks.length}</span></p>
            </Link></li>
            <li><Link to='/account'>
              <p>Account</p>
            </Link></li>
          </Nav>
      </Content>
    </Wrapper>
)};

export default Header;