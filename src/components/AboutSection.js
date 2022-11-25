import React from 'react'
// import img
import homeIntro from '../assets/about_intro.jpg'
// import Styled Component
import styled from 'styled-components'
import {About, Description, Hide, Image} from '../styles'
// Framer motion
import { motion } from 'framer-motion'

export default function AboutSection() {
    const titleAnim = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: {duration: 1}},
    }
    const container = {
        hidden: {x: 100},
        show: {x: 0, transition: {duration: 1, ease: "easeOut"}, staggerChildren: 1, when: "beforeChildren"},
    }
  return (
    <About>
        <Description>
            <motion.div variants={container} initial="hidden" animate="show" className="title">
                <Hide>
                    <motion.h2 variants={titleAnim} initial="hidden" animate="show">Be educated so that</motion.h2>
                </Hide>
                <Hide>
                    <motion.h2 variants={titleAnim}>you <span>can change</span></motion.h2>
                </Hide>
                <Hide>
                    <motion.h2 variants={titleAnim}>the world.</motion.h2>
                </Hide>
            </motion.div>
            <p>An educated mind can teach many. An educated mind is better than ampty one.</p>
            <button>About Us</button>
        </Description>
        <Image>
            <img src={homeIntro} alt="man reading a book" />
        </Image>
    </About>
  )
}
