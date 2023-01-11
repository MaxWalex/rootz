
import { useRef } from 'react'

import FirstScreenLeft from './FirstScreenLeft';
import FirstScreenRight from './FirstScreenRight';



import './firstScreen.scss';

function FirstScreen() {
  const parrotRef = useRef()

  const handleOnMouseMove = e => {
      const leaves = parrotRef.current.querySelectorAll('.parrot_leaves img')
      const parrot = parrotRef.current.querySelectorAll('.parrot')
      const parrotCard = parrotRef.current.querySelectorAll('.parrot_card')

      const parallax = (data) => {
          data.forEach(layer => {
              const speed = layer.attributes[1].value;
  
              const x = (window.innerWidth - e.pageX*speed)/100
              const y = (window.innerHeight - e.pageY*speed)/100
  
              layer.style.transform = `translate(${x}px, ${y}px)`
          })
      }

      parallax(leaves)
      parallax(parrot)
      parallax(parrotCard)
  }

  return (
    <section className='first_screen' id="home">
        <div className='container' onMouseMove={e => handleOnMouseMove(e)} data-aos="fade-up">
            <div className='first_screen-inner'>
                <FirstScreenLeft />

                <FirstScreenRight parrotRef={parrotRef} />
            </div>
        </div>
    </section>
  )
}

export default FirstScreen