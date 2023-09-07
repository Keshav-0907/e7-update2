import React from 'react';
import { Button } from '@mui/material';
import Services from './OurServices';
import Why from './Why';
import '../App.css'
import Testimonials from './Testimonials';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import c2 from '../Assets/c2.png'
import c1 from '../Assets/c1.png'

const Hero = () => {
  return (
    <>

      <div className="">
      <Carousel showStatus={false} showThumbs={false} showIndicators={false} infiniteLoop={true}>
  <div style={{ position: 'relative' }}>
    <img src={c1} alt='err' />
    <Button
      sx={{
        position: 'absolute',
        top: '90%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#FF971E',
        color: '#fff',
        borderRadius: '10px',
        zIndex: 99,
        '&:hover': {
          backgroundColor: '#FFB55F',
          color: '#fff',
        },
      }}
      variant="contained"
    >
      <Link to='/contact' style={{ textDecoration: 'none', color: '#fff' }}>Get a Call from Us</Link>
    </Button>
  </div>
  <div style={{ position: 'relative' }}>
    <img src={c2} alt='err' />
    <Button
      sx={{
        position: 'absolute',
        top: '90%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#FF971E',
        color: '#fff',
        borderRadius: '10px',
        zIndex: 99,
        '&:hover': {
          backgroundColor: '#FFB55F',
          color: '#fff',
        },
      }}
      variant="contained"
    >
      <Link to='/contact' style={{ textDecoration: 'none', color: '#fff' }}>Get a Call from Us</Link>
    </Button>
  </div>
</Carousel>

        
      </div>
      <Services />
      <Testimonials />
      <Why />
    </>
  )
}

export default Hero