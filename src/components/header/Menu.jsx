import React from 'react'

// import { useScrollspy } from '../../hooks/useScrollspy';

function Menu() {
  // const sectionActive = useScrollspy(['home', 'mission', 'places', 'team'], 300)

  const menu = [
    {name: 'Home', isActive: true, id: 1, link: '#home'},
    {name: 'Our mission', isActive: false, id: 2, link: '#mission'},
    {name: 'Places', isActive: false, id: 3, link: '#places'},
    {name: 'Team', isActive: false, id: 4, link: '#team'}
  ]

  return (
    <nav data-aos="fade-down" data-aos-duration="1500">
      <ul>
        {menu.map(({name, isActive, id, link}) => {
          return <li key={id} className={isActive ? 'active' : ''}><a href='#'>{name}</a></li>
        })}
      </ul>
    </nav>
  )
}

export default Menu