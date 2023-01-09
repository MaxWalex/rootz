import Header from '../header/Header';
import FirstScreenContent from './FirstScreenContent';

import './firstScreen.scss';

function FirstScreen() {
  return (
    <section className='first_screen'>
        <Header />

        <FirstScreenContent />
    </section>
  )
}

export default FirstScreen