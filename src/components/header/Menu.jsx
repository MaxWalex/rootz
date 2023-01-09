import React from 'react'

function Menu() {
  const menu = [
    {name: 'Home', isActive: true, id: 1, link: '#home'},
    {name: 'Our mission', isActive: false, id: 2, link: '#mission'},
    {name: 'Places', isActive: false, id: 3, link: '#places'},
    {name: 'Team', isActive: false, id: 4, link: '#team'}
  ]

  return (
    <nav>
      <ul>
        {menu.map(({name, isActive, id}) => {
          return <li key={id} className={`${isActive}`}><a href="#">{name}</a></li>
        })}
      </ul>
    </nav>
  )
}

export default Menu