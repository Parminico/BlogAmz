import React from 'react';
import styled from 'styled-components';

export default function Button({text, icon}) {
    return (
        <StyledWrapper>
            <button className="button">
                <i className={`${icon} Icon`}/>
                <span>{`${text}`}</span>
            </button>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
.button {
    margin-left: 1rem;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.164);
    cursor: pointer;
    transition-duration: .5s;
    overflow: hidden;
    position: relative;
    background-color: #f2f3f5;
    /* background: rgb(190,208,223);
    background: linear-gradient(49deg, rgba(190,208,223,1) 35%, rgba(35,83,204,1) 77%, rgba(9,9,121,1) 100%); */
}

.Icon {
    /* transition-duration: .3s; */
    fill: white;
    /* margin-left: 2rem; */
    margin: 0;
    color: #45505b;
}

button span {
    color: white;
    margin: 0;
    margin-left: 3rem;
    display: none;
}
button:hover span {
    display: flex;
    margin: 0;
}

.button:hover {
    width: 8rem;
    border-radius: 50px;
    /* transition-duration: .3s; */
    background-color: #2353cc;
    align-items: center;
}

.button:hover .Icon {
    /* transition-duration: .3s; */
    transform: translateX(-5%);
    color: white;
}

.button::before {
    position: absolute;
    top: -20px;
    color: white;
    transition-duration: .3s;
    font-size: 2px;
}

.button:hover::before {
    font-size: 13px;
    opacity: 1;
    transform: translateY(30px);
    /* transition-duration: .3s; */
}
`;