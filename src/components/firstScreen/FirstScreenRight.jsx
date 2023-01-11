import { useEffect, useState } from 'react'

import parrotBlock from '../../images/parrotCard.png';
import parrot from '../../images/parrot.png';
import leave1 from '../../images/leave1.svg';
import leave2 from '../../images/leave2.svg';
import leave3 from '../../images/leave3.svg';
import leave4 from '../../images/leave4.svg';
import leave5 from '../../images/leave5.svg';

function Counter({ val, time }) {
    const [ currVal, setCurrVal ] = useState(0);
  
    useEffect(() => {
      currVal !== val && setTimeout(setCurrVal, time, currVal + 1);
    }, [ currVal ]);
  
    Number.prototype.toDivide = function() {
        let int = String(Math.trunc(this))
  
        if(int.length <= 3) return int;
  
        let space = 0;
        let number = '';
    
        for(var i = int.length - 1; i >= 0; i--) {
            if(space === 3) {
                number = ' ' + number;
                space = 0;
            }
            number = int.charAt(i) + number;
            space++;
        }
    
        return number;
    }
  
    return <p>{currVal.toDivide()}</p>;
  }

function FirstScreenRight({parrotRef}) {
  return (
    <div className='first_screen-right' ref={parrotRef} >
                    <div className='parrot' data-speed="8">
                        <img src={parrot} />
                    </div>
                    <div className='parrot_leaves'>
                        <img src={leave1} data-speed="-3" className='parrot_leaves-1' />
                        <img src={leave2} data-speed="2" className='parrot_leaves-2' />
                        <img src={leave3} data-speed="-5" className='parrot_leaves-3' />
                        <img src={leave4} data-speed="6" className='parrot_leaves-4' />
                        <img src={leave5} data-speed="-1" className='parrot_leaves-5' />
                    </div>
                    <div className='parrot_card' data-speed="-4" style={{
                        backgroundImage: `url(${parrotBlock})`
                    }}>
                        <div className='parrot_card-icon'>
                            <svg width="48" height="56" viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M46.0001 25.2532C43.1808 12.8408 40.2699 0 22.2209 0C9.96887 0 0 10.0492 0 22.4V56H33.3314V47.6H36.109C39.1727 47.6 41.6643 45.0884 41.6643 42V33.6H48C48 33.6 46.3612 26.8576 46.0001 25.2532ZM22.2209 33.5664C22.2209 33.5664 11.1105 25.424 11.1105 19.3872C11.1105 13.6556 19.7516 11.1636 22.2209 18.6928C24.6902 11.1664 33.3314 13.6556 33.3314 19.3872C33.3314 25.424 22.2209 33.5664 22.2209 33.5664Z" fill="white"/>
                            </svg>
                        </div>
                        <div className='parrot_card-members'>
                            <p>Members</p>
                            <Counter val={29128} time={0} />
                        </div>
                    </div>
                </div>
  )
}

export default FirstScreenRight