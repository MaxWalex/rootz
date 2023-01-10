import { useEffect } from 'react';

import Header from '../header/Header';
import FirstScreen from '../firstScreen/FirstScreen';
import OurTeam from '../ourTeam/OurTeam';
import LogIn from '../logIn/LogIn';
import GetStarted from '../getStarted/GetStarted';
import Carousel from '../carousel/Carousel';
import Footer from '../footer/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.scss';

function App() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <Header />
      <FirstScreen />
      <OurTeam />
      <LogIn />
      <GetStarted />
      <Carousel />
      <Footer />
    </>
  );
}

export default App;
