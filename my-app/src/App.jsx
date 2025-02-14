import React from 'react';
import Home from './components/home/Home';
import AboutUs from './components/about_us/AboutUs';
import Fields from './components/fields/Fields';
import Trainings from './components/training/Trainings';
import Events from './components/events/Events';
import Members from './components/members/Members';
import FAQ from './components/FAQ/FAQ';
import ContactUs from './components/contactus/ContactUs';
import Footer from './components/footer/Footer';

import './App.css';

function App() {
  return (
    <>
      <Home />
      <AboutUs />
      <Members />
      <Fields />
      <Trainings />
      <Events /> 
      <FAQ />
      <ContactUs/>
      <Footer />
    </>
  );
}

export default App;
