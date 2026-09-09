import React from 'react'
import HeroSection from '../Components/Home/HeroSection';
import Main from '../Components/Home/Main';
import Statistics from '../Components/Home/Statistics';
import Whychoose from '../Components/Home/Whychoose';
import Opinions from '../Components/Home/Opinions';
import Questions from '../Components/Home/Questions';
import AboutSection from '../Components/About/AboutSection';
import Leadership from '../Components/About/Leadership';
import Video from '../Components/About/Video';
import Communication from '../Components/About/Communication.jsx';

export default function HomePage() {
  return (
    <>
        <HeroSection/>
        <Main/>
        <AboutSection/>
        <Leadership/>
        <Video/>
        <Whychoose/>
        <Statistics/>
        <Opinions/>
        <Questions/>
        <Communication/>
    </>
  )
}
