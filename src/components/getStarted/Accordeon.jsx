import { useState } from 'react'

function Accordeon({name, content}) {
    const [isActive, setIsActive] = useState(false);

  return (
    <div className={`get_started-item ${isActive ? 'opened' : ''}`}>
        <div className='get_started-item_top' onClick={() => setIsActive(!isActive)}>
            <h3 className='main_title'>{name}</h3>
            <div className='get_started-item_top-btn'></div>
        </div>

        <div className="get_started-item_content">
            {content}
        </div>
    </div>
  )
}

export default Accordeon