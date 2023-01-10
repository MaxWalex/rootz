import { useState, useRef } from 'react';

import leave1 from '../../images/leave1.svg'
import leave4 from '../../images/leave4.svg'

import './logIn.scss';

function LogIn() {
    const [nameText, setNameText] = useState('')
    const [emailText, setEmailText] = useState('')
    const [dangerTextName, setDangerTextName] = useState('')
    const [dangerTextEmail, setDangerTextEmail] = useState('')

    const logInRef = useRef()

    const handleSubmit = e => {
        e.preventDefault()

        if (nameText.length <= 3) {
            return setDangerTextName('At least 3 characters')
        } else {
            setDangerTextName('')
        }

        if (!/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(emailText)) {
            return setDangerTextEmail('Enter correct email')
        } else {
            setDangerTextEmail('')
        }

        setNameText('')
        setEmailText('')
    }

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
                <div className="login_left">
                    <h2 className='main_title'>Get started today!</h2>
                    <p>Learn more about how you can save our planet's nature. From smart consumption to switching to renewable energy, each of us can do our part to save the planet. </p>
                </div>
                <div className="login_right">
                    <form onSubmit={e => handleSubmit(e)}>
                        <h3 className='main_title'>Log In</h3>

                        <input className='input_name' placeholder='Name' onChange={e => setNameText(e.target.value)} value={nameText} />
                        {dangerTextName && <div className='danger_text'>{dangerTextName}</div>}

                        <input className='input_email' placeholder='Email' onChange={e => setEmailText(e.target.value)} value={emailText} />
                        {dangerTextEmail && <div className='danger_text'>{dangerTextEmail}</div>}

                        <button className='main_button'>Book a Demo</button>
                        <div className='login_right-leaves'>
                            <img src={leave1} data-speed="1" />
                            <img src={leave4} data-speed="-1" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LogIn