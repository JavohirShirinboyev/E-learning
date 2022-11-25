import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom"
import { CourseState } from "../CourseState";
// Animation
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

const CourseDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;

    const [courses, setCourses] = useState(CourseState);
    const [course, setCourse] = useState(null);

    useEffect(() => {
        const currentCourse = courses.filter((stateCourse) => stateCourse.url === url);
        setCourse(currentCourse[0]);
    }, [courses, url])
    return (
        <>
            {course && (
                <Details exit="exit" variants={pageAnimation} initial="hidden" animate="show">
                    <Header>
                        <h2>{course.title}</h2>
                        <img src={course.mainImg} alt="course" />
                    </Header>
                    <Awards>
                        {
                            course.awards.map((award) => (
                                <Award title={award.title} description={award.description} key={award.title}/>
                            ))
                        }
                    </Awards>
                    <ImageDisplay>
                        <img src={course.secondaryImg} alt="developer" />
                    </ImageDisplay>
                </Details>
            )}
        </>
    )
}

const Details = styled(motion.div)`
    color: #fff;
`
const Header = styled.div`
    min-height: 90vh;
    position: relative;
    padding: 20vh 10rem 2rem 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        margin-bottom: 2rem;
    }
    img {
        height: 70vh;
    }
`

const Awards = styled.div`
    min-height: 70vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem 10rem;
`

const StyledAward = styled.div`
    padding: 2rem;
    h3 {
        margin-bottom: 1rem;
        font-size: 1.7rem;
    }
    .line {
        width: 100%;
        height: 0.2rem;
        background-color: #30bee1;
        margin-bottom: 1rem;
    }
`

const ImageDisplay = styled.div`
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`
// Award Component
const Award = ({title, description}) => {
    return (
        <StyledAward>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </StyledAward>
    )
}
export default CourseDetail;

