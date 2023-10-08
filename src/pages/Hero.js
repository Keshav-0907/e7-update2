
import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import Services from './OurServices';
import Why from './Why';
import '../App.css'
import Testimonials from './Testimonials';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import c1 from '../Assets/image1.jpg'
import c2 from '../Assets/image2.jpg'
import c3 from '../Assets/image3.jpg'
import c4 from '../Assets/image4.jpg'
import c5 from '../Assets/image5.jpg'
import c6 from '../Assets/image6.jpg'


const Hero = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the currentSlide to move to the next one
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 6); // Assumes you have 6 slides
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>

      <div className="">
      <Carousel showStatus={false}
          showThumbs={false}
          showIndicators={false}
          infiniteLoop={true}
          selectedItem={currentSlide} // Control the selected slide using state
          onChange={(index) => setCurrentSlide(index)} >
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
  <div style={{ position: 'relative' }}>
    <img src={c4} alt='err' />
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
    <img src={c5} alt='err' />
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
    <img src={c3} alt='err' />
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
    <img src={c6} alt='err' />
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