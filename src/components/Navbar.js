import React from 'react'
import { Logo, Menuicon, Menulist, Navbarsection, Overlayscreen, Triangle } from './styled/Sunnyside.styled';
import menuicon from './images/icon-hamburger.svg';

export const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <Navbarsection>
        <Logo/>
        <ul>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
        <Menuicon src={menuicon} alt='menuicon' onClick={()=>setToggleMenu(true)} />
        {toggleMenu && (
        <>
          <Overlayscreen/>
          <Menulist>
            <Triangle/>
            <Menuicon src={menuicon} alt='menuicon' onClick={()=>setToggleMenu(false)} />
              <ul>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Contact</li>
              </ul>
          </Menulist>
        </>
      )}
    </Navbarsection>
  )
}
