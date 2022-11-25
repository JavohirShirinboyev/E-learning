import React, { useState } from 'react';
// import styles
import styled from 'styled-components';
import { About } from '../styles';
import { AnimateSharedLayout } from 'framer-motion';
// Toggle
import Toggle from './Toggle';

export default function FaqSection() {

  return (
    <Faq>
        <h2>Any Questions <span>FAQ</span></h2>
        <AnimateSharedLayout>
            <Toggle title="Can I learn programming from 0 on your platform?">
                <div className="question">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, cumque?</p>
                    </div>
                </div>
            </Toggle>
            <Toggle title="Can I learn programming from 0 on your platform?">
                <div className="question">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, cumque?</p>
                    </div>
                </div>
            </Toggle>
            <Toggle title="Can I learn programming from 0 on your platform?">
                <div className="question">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, cumque?</p>
                    </div>
                </div>
            </Toggle>
            <Toggle title="Can I learn programming from 0 on your platform?">
                <div className="question">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, cumque?</p>
                    </div>
                </div>
            </Toggle>
        </AnimateSharedLayout>
    </Faq>
  )
}

const Faq = styled(About)`
    display: block;
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }

    .question {
        padding: 3rem 0;
        cursor: pointer;
    }
    .answer {
        padding: 1rem 0;
        p {
            padding: 1rem 0;
            color: #fff;
            font-size: 1.2rem;
        }
    }
    .line {
        width: 100%;
        height: 0.2rem;
        background-color: #ccc;
        margin: 1rem 0;
    }
`
