import React from "react";
// import style
import styled from 'styled-components'
import { motion } from "framer-motion";
// import React Router
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Nav = () => {
    const { pathname } = useLocation();
    return (
        <StyleNav> 
            <h1>
                <Link id="logo" to="/">e-Learning</Link>
            </h1>
            <ul>
                <li>
                    <Link to="/">About us</Link>
                    <Line 
                        transition={{duration: 0.75}} 
                        initial={{width: "0%"}} 
                        animate={{width: pathname === "/" ? "100%" : "0%"}}
                    />
                </li>
                <li>
                    <Link to="/courses">Courses</Link>
                    <Line 
                        transition={{duration: 0.75}} 
                        initial={{width: "0%"}} 
                        animate={{width: pathname === "/courses" ? "100%" : "0%"}}
                    />
                </li>
                <li>
                    <Link to="/contact">Contact us</Link>
                    <Line 
                        transition={{duration: 0.75}} 
                        initial={{width: "0%"}} 
                        animate={{width: pathname === "/contact" ? "100%" : "0%"}}
                    />
                </li>
            </ul>
        </StyleNav>
    )
}

const StyleNav = styled.nav`
    min-height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 10rem;
    background-color: #383e47;

    #logo {
        font-family: 'Silkscreen', cursive;
        font-weight: lighter;
        font-size: 1.5rem;
    }

    a {
        color: #fff;
        text-decoration: none;
    }

    ul {
        display: flex;
        list-style: none;
        gap: 3rem;
        li {
            position: relative;
        }
    }
`

const Line = styled(motion.div)`
    height: 0.2rem;
    background-color: #30bee1;
    width: 0%;
    position: absolute;
    bottom: -50%;
    left: 0%;
`

export default Nav;