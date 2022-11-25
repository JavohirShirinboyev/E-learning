import React from "react";
// import images
import javascript from "../assets/javascript.png"
import react from "../assets/react.jpg"
import reactnative from "../assets/reactnative.png"
// import styled
import styled from "styled-components";
// import react-router-dom { Link }
import { Link } from "react-router-dom";
// Animation
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

const Courses = () => {
    return (
        <StyledCourses exit="exit" variants={pageAnimation} initial="hidden" animate="show">
            <Course>
                <h2>JavaScript Courses</h2>
                <div className="line"></div>
                <Link to="/courses/javascript">
                    <img src={javascript} alt="javascript course" />
                </Link>
            </Course>

            <Course>
                <h2>Best React Courses</h2>
                <div className="line"></div>
                <Link to="/courses/react">
                    <img src={react} alt="react course" />
                </Link>
            </Course>

            <Course>
                <h2>React Native Courses</h2>
                <div className="line"></div>
                <Link to="/courses/reactnative">
                    <img src={reactnative} alt="reactnative course" />
                </Link>
            </Course>
        </StyledCourses>
    )
}

const StyledCourses = styled(motion.div)`
    min-height: 100vh;
    padding: 5rem 10rem;
`

const Course = styled.div`
    padding-bottom: 10rem;
    h2 {
        padding: 1rem 0;
    }
    .line {
        height: 0.5rem;
        background-color: #ccc;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
    }
`

export default Courses;