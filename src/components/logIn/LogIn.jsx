import { useRef } from 'react';

import LogInRight from './LogInRight';
import LogInLeft from './LogInLeft';

import './logIn.scss';

function LogIn() {
    const logInRef = useRef()

    const handleOnMouseMove = e => {
        const loginForm = logInRef.current  

        const parallax = (data) => {
            data.forEach(layer => {
                const speed = layer.attributes[1].value;
    
                const x = (window.innerWidth - e.pageX*speed)/100
                const y = (window.innerHeight - e.pageY*speed)/100
    
                layer.style.transform = `translate(${x}px, ${y}px)`
            })
        }

        parallax(Array.from(loginForm.querySelectorAll('.login_right-leaves img')))
    }

  return (
    <section className='login'>
        <div className="container">
            <div className="login_inner" ref={logInRef} onMouseMove={e => handleOnMouseMove(e)}>
                <LogInLeft />
                <LogInRight />
            </div>
        </div>
    </section>
  )
}

export default LogIn