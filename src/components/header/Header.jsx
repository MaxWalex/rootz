import Logo from './Logo';
import Menu from './Menu';

import './header.scss';

function Header() {
  return (
    <header>
        <div className='container_fluid'>
            <div className='header_inner'>
                <Logo />
                <Menu />
                <div className='header_button-wrapp' data-aos="fade-left" data-aos-duration="1500">
                  <a href="#" className='header_button'>Apply</a> 
                </div>
            </div>   
        </div>
    </header>
  )
}

export default Header