function Menu() {

  const menu = [
    {name: 'Home', isActive: true, id: 1, aosDelay: '300'},
    {name: 'Our mission', isActive: false, id: 2, aosDelay: '600'},
    {name: 'Places', isActive: false, id: 3, aosDelay: '900'},
    {name: 'Team', isActive: false, id: 4, aosDelay: '1100'}
  ]

  return (
    <nav>
      <ul>
        {menu.map(({name, isActive, id, aosDelay}) => {
          return <li 
                    data-aos="fade-down" 
                    data-aos-duration="1500" 
                    data-aos-delay={aosDelay} 
                    key={id} 
                    className={isActive ? 'active' : ''}>
                      <a href='#'>{name}</a>
                    </li>
        })}
      </ul>
    </nav>
  )
}

export default Menu