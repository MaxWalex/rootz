import Logo from './Logo';
import Menu from './Menu';

import { useScrollspy } from '../../hooks/useScrollspy';

import './header.scss';

function Header() {
  useScrollspy(['#home', '#mission'], 100)
  return (
    <header>
        <div className='container_fluid'>
            <div className='header_inner'>
                <Logo />
                <Menu />
                <a href="#" className='header_button'>Apply</a> 
            </div>   
        </div>
    </header>
  )
}

export default Header