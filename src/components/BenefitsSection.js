import React from 'react'
import BenefitImg from '../assets/about_intro2.jpg'
// import styles
import styled from 'styled-components'
import { About, } from '../styles'

export default function BenefitsSection() {
  return (
    <Benefits>
        <div className='description'>
            <h2>High-Quality Learning System</h2>
            <div className="benefit">
                <h3>Online platform</h3>
                <h3>High experienced and talented mentors</h3>
                <h3>Fast learning system</h3>
                <h3>Offline school for children</h3>
            </div>
        </div>
        <img src={BenefitImg} alt="a girl studying" />
    </Benefits>
  )
}

const Benefits = styled(About)`
  flex-direction: row-reverse;
  gap: 5rem;
  .description {
    h2 {
      color: #30bee1;
      margin-bottom: 3rem;
    }
    h3 {
      font-size: 1.2rem;
      padding: 1rem;
      background-color: #fff;
      color: #000;
      margin: 1rem 0;
      font-weight: 400;
      border-radius: 3px;
      width: 70%;
      clip-path: polygon(0 10%, 100% 0%, 100% 91%, 0% 100%);
      border-left: 4px solid #30bee1;
    }
  }
  img {
    height: 90vh;
  }
`
