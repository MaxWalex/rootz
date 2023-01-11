import { useState } from 'react';

import Logo from './Logo';
import Menu from './Menu';

import './header.scss';

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleMenu = () => {
    setToggleMenu(!toggleMenu)

    document.querySelector('html').classList.toggle('lock')

  }

  return (
    <header>
        <div className='container_fluid'>
            <div className='header_inner'>
                <Logo />
                <Menu toggleMenu={toggleMenu} />
                <div className='header_button-wrapp' data-aos="fade-left" data-aos-duration="1500">
                  <a href="#" className='header_button'>Apply</a> 
                </div>
                <div className={`burger ${toggleMenu ? 'active' : ''}`} onClick={() => handleMenu()}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
            </div>   
        </div>
    </header>
  )
}

export default Header