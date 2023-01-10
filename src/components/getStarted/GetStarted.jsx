import Accordeon from './Accordeon';

import './getStarted.scss';

function GetStarted() {
    
    const accordionData = [
        {
            name: 'What can I do to protect our planet?',
            content: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources',
            id: 1
        },
        {
            name: 'How to save nature ecology?',
            content: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources',
            id: 2
        },
        {
            name: 'What is nature conservation?',
            content: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources',
            id: 3
        }
    ]

    const accordContent = accordionData.map(({name, content, id}) => {
        return <Accordeon key={id} name={name} content={content} id={id} />
    })

  return (
    <section className='get_started' id="mission">  
        <div className="container">
            <div className='get_started-inner'>
                <div className='get_started-left'>
                    <h2 className='main_title' data-aos="fade-right" data-aos-duration="1000">Ready to Get started?</h2>
                    <p data-aos="fade-right" data-aos-duration="1300">When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints on interior fabrics.</p>
                    <div className='main_buttun-wrapp' data-aos="fade-right" data-aos-duration="1500">
                        <a href="#" className='main_button'>Contact Us</a>
                    </div>
                </div>
                <div className='get_started-right'>
                    {accordContent}
                </div>
            </div>
        </div>
    </section>
  )
}

export default GetStarted