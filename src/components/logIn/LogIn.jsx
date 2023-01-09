import React from 'react'

import leave1 from '../../images/leave1.svg'
import leave4 from '../../images/leave4.svg'

import './logIn.scss';

function LogIn() {
  return (
    <section className='login'>
        <div className="container">
            <div className="login_inner">
                <div className="login_left">
                    <h2 className='main_title'>Get started today!</h2>
                    <p>Learn more about how you can save our planet's nature. From smart consumption to switching to renewable energy, each of us can do our part to save the planet. </p>
                </div>
                <div className="login_right">
                    <form>
                        <h3 className='main_title'>Log In</h3>
                        <input placeholder='Name' />
                        <input placeholder='Email' />
                        <button className='main_button'>Book a Demo</button>
                        <div className='login_right-leaves'>
                            <img src={leave1} />
                            <img src={leave4} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LogIn