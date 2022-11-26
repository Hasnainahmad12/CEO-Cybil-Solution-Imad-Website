import React,{ useState, useEffect} from 'react'
import { motion } from "framer-motion"
import ReactTooltip from "react-tooltip"

import AppWrap from '../Wrapper/AppWrap'
import { urlFor, client } from '../../client'
import "../Styles/Skills.css"

const Skills = () => {
  const [experiances, setExperiences] = useState([])
  const [skills, setskills] = useState([])

  useEffect(() => {
    //Data can be stored in experiences Schema 
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery)
      .then((data) => {
        setskills(data);
      });

  }, []);
  
  return (
    <>
      <h2 className='head-text'> Skills & Experiance</h2>

      <div className='app__skills-container'>
          <motion.div className='app__skills-list'>
             {skills?.map((skill) =>(
              <motion.div
              whileInView={{opacity : [ 0 , 1]}}
              transition={{duration : [0.5]}}
              className="app__skills-item app__flex"
              key={skill.name}
              >

              <div className='app__flex' style={{ backgroundColor: skill.bgColor}}>
                  <img src={urlFor(skill.icon)} alt={skill.name}/>
              </div>
              <p className='p-text'>{skill.name}</p>
              </motion.div>
             ))} 
          </motion.div>

          {/* Experences Page */}
          <motion.div className='app__skills-exp'>
              {experiances?.map((experiance) => (
                <motion.div
                  className='app__skills-exp-item'
                  key={experiance.year}
                >
                  <div className='app__skills-exp-year'>
                    {/* this experience as a parameter not a usestate */}
                    <p className='bold-text'>{experiance.year}</p>
                  </div>
                  <motion.div className='app__skills-exp-works'>
                    {experiance.works.map((work) => (
               <>
               <motion.div
                whileInView={{opacity : [ 0 , 1]}}
                transition={{duration : [0.5]}}
                className="app__skills-exp-work"
                data-tip
                data-for={work.name}
                key={work.name}   
               >
                {/* This work as a parameter */}
                <h4 className='bold-text'>{work.name}</h4>
                <p className='p-text'>{work.company}</p>
                </motion.div>

                <ReactTooltip
                  id={work.name}
                  effect="solid"
                  arrowColor='#fff'
                  className='skills-tooltip'
                >
                    {work.desc}
                </ReactTooltip>
               </>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
          </motion.div>
      </div>
    </>
  )
}

export default AppWrap(Skills , 'skills')

