import React, {useRef, useState} from "react";
import styled from "styled-components";
import {GiHamburgerMenu} from "react-icons/gi";

function Header({parentCallback, theme}) {
    const [hamburgerMenu, setHamburgerMenu] = useState(false);

    const handleHamburger = () => {
        setHamburgerMenu(hamburgerMenu ? !hamburgerMenu : !hamburgerMenu);
    };

    return (
        <>
            <MainWrapper>
                <HeaderBar>
                    <h2>Image Search</h2>
                    <SearchLinks>
                        <Search type="text" placeholder="Search" />
                        <div>
                            <ul>
                                <li>Explore</li>
                                <li>Collection</li>
                                <li>Community</li>
                            </ul>
                        </div>
                    </SearchLinks>
                    <HamBurger>
                        <GiHamburgerMenu onClick={handleHamburger} />
                    </HamBurger>
                    <Switch>
                        <label className="theme-switch" for="checkbox">
                            <input
                                type="checkbox"
                                id="checkbox"
                                onChange={() => {
                                    parentCallback(theme);
                                }}
                            />
                            <div className="slider round"></div>
                        </label>
                    </Switch>
                    <HamburgerMenu
                        className={`${
                            hamburgerMenu ? "toggleOn" : "toggleOff"
                        }`}
                        id="hamburgerMenu"
                    >
                        lalalal
                    </HamburgerMenu>
                </HeaderBar>
            </MainWrapper>
        </>
    );
}

export default Header;

const MainWrapper = styled.div`
    justify-content: center;
    display: flex;
`;
const HeaderBar = styled.div`
    padding: 0 20px;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 1350px;
`;
const SearchLinks = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 50px;
    align-items: center;
    flex-direction: row;
    width: 700px;
    transition: ease width 0.5s;
    div {
        ul {
            display: flex;
            gap: 30px;
            justify-content: space-between;
            list-style: none;
            text-decoration: none;
            @media (max-width: 900px) {
                gap: 20px;
            }
        }
    }
    @media (max-width: 1030px) {
        width: 550px;
    }
    @media (max-width: 900px) {
        width: 450px;
        gap: 20px;
    }
    @media (max-width: 732px) {
        display: none;
    }
`;

const HamBurger = styled.div`
    display: none;

    @media (max-width: 732px) {
        display: block;
    }
`;
const HamburgerMenu = styled.div`
    position: absolute;
    top: 70px;
    right: 0;
    width: 250px;
    height: 100vh;
    background-color: aliceblue;
    &.toggleOn {
        display: block;
    }
    &.toggleOff {
        display: none;
    }
    @media (min-width: 732px) {
        background-color: hotpink;
        &.toggleOn {
            display: none;
        }
    }
`;

const Search = styled.input`
border: 1px solid #858484;
border-radius: 5px;
outline: none;
width: 500px;
    padding: 5px;
    :active{
outline: none;
        
    }
    @media (max-width: 1030px) {
        width: 350px;
    }
`;

const Switch = styled.div`
    .theme-switch {
        display: inline-block;
        height: 28px;
        position: relative;
        width: 50px;
        input {
            display: none;
        }
    }

    .slider {
        background-color: #ccc;
        bottom: 0;
        cursor: pointer;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transition: 0.4s;
        :before {
            background-color: #fff;
            bottom: 4px;
            content: "";
            height: 22px;
            top: 3px;
            left: 4px;
            position: absolute;
            transition: 0.4s;
            width: 24px;
        }
    }

    input:checked + .slider {
        background-color: #2b2b2b;
    }

    input:checked + .slider:before {
        transform: translateX(16px);
    }

    .slider.round {
        border-radius: 34px;
        :before {
            border-radius: 50%;
        }
    }
    @media (max-width: 732px) {
        display: none;
    }
`;
