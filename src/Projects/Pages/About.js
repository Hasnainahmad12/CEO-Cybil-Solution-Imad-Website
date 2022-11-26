import React, {useState, useEffect} from 'react'
import { motion } from "framer-motion"
import "../Styles/About.css";

import AppWrap from '../Wrapper/AppWrap';
import { images } from "../Constants/IndexImages"
import { urlFor , client } from '../../client';

// const abouts = [
//   {title: "Web Development", description: "I am a Good React Developer", imgUrl: images.about01},
//   {title: "Flutter Developer", description: "I am Flutter Developer", imgUrl: images.about02},
//   {title: "Graphics Designer", description: "I am a Graphics Designer", imgUrl: images.about03},
//   {title: "UI/UX Designer", description: "I am a UI/UX Designer", imgUrl: images.about04},
// ];

const About = () => {
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
    .then((data) => setAbouts(data))
  }, [])
  
  return (
    <>
      <h2 className='head-text'>I Know That <span> Flutter Developer</span><br /> Means<span> Good Freelancer</span></h2>

        <div className='app__profiles'>
            {abouts.map((about, index) =>(
              <motion.div
                whileInView={{ opacity: 1}}
                whileHover={{scale: 1.1}}
                transition={{duration: 0.5 , type: 'tween'}}
                className="app__profile-item"
                // this title we already defined in multi dinemsional array
                key={about.title + index}
              >
                <img src={urlFor(about.imgUrl)} alt={about.title}/>
                <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
                <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
              </motion.div>
            ))}
        </div>
    </>
  )
}

export default AppWrap(About, 'about')