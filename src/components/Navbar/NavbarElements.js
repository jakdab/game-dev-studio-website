import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
    background: #050009;
    witdh: 100%;
    height: 130px;
    display: flex;
    justify-content: space-between;
    z-index: 10;
    max-width: 1080px;
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    // &.active {
    //     color: #F82949;
    // }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: --24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(Link) `
    border-radius: 40px;
    background: transparent;
    padding: 1.25rem 2rem;
    color: #fff;
    border: 2px solid #F82949;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out; 
        background: #010606;
    }
`

/* -------------------------------- */
/* -------- Filled Variant -------- */
/* -------------------------------- */

// export const NavBtnLink = styled(Link) `
//     border-radius: 42px;
//     background: #F82949;
//     padding: 10px 22px;
//     color: #fff;
//     border: none;
//     outline: none;
//     cursor: pointer;
//     transition: all 0.2s ease-in-out;
//     text-decoration: none;

//     &:hover {
//         transition: all 0.2s ease-in-out; 
//         background: #010606;
//     }
// `