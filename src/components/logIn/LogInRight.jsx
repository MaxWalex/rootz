import { useState, useRef } from 'react';

import leave1 from '../../images/leave1.svg'
import leave4 from '../../images/leave4.svg'

function LogInRight() {
    const [nameText, setNameText] = useState('')
    const [emailText, setEmailText] = useState('')
    const [dangerTextName, setDangerTextName] = useState('')
    const [dangerTextEmail, setDangerTextEmail] = useState('')

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

  return (
    <div className="login_right" data-aos="fade-left" data-aos-duration="1500">
        <form onSubmit={e => handleSubmit(e)}>
            <h3 className='main_title'>Log In</h3>

            <input data-aos-delay="300" data-aos="fade-left" data-aos-duration="1500" className='input_name' placeholder='Name' onChange={e => setNameText(e.target.value)} value={nameText} />
            {dangerTextName && <div className='danger_text'>{dangerTextName}</div>}

            <input data-aos-delay="600" data-aos="fade-left" data-aos-duration="1500" className='input_email' placeholder='Email' onChange={e => setEmailText(e.target.value)} value={emailText} />
            {dangerTextEmail && <div className='danger_text'>{dangerTextEmail}</div>}

            <button className='main_button' data-aos-delay="900" data-aos="fade-left" data-aos-duration="1500">Book a Demo</button>
            <div className='login_right-leaves'>
                <img src={leave1} data-speed="1" />
                <img src={leave4} data-speed="-1" />
            </div>
        </form>
    </div>
  )
}

export default LogInRight