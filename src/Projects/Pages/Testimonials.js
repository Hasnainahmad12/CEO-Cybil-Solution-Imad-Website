import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import AppWrap from '../Wrapper/AppWrap';
import { urlFor, client } from '../../client';
import "../Styles/Testimonials.css";
import { images } from "../Constants/IndexImages"

const Testimonials = () => {
  const [brands, setBrands] = useState([]);
  const [Testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    //Data can be stored in experiences Schema 
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery)
      .then((data) => {
        setBrands(data);
      });

  }, []);
  
  return (
    <>
    {Testimonials.length && (
      <>
        <div className='app__testimonial-item app__flex'>
            <img src={urlFor(Testimonials[currentIndex].imgurl)} alt="Testimonial"/>
            <p className='head-text'>hasnans</p>
        </div>
      </>
    )}
    </>
  )
}

export default AppWrap(Testimonials , 'Testimonials')