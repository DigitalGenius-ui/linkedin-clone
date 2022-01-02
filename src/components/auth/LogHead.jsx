import React from 'react';
import styled from 'styled-components';
import { ExploreOutlined, PeopleOutlined, CastForEducationOutlined, WorkOutlined } from '@material-ui/icons';
import Icons from '../header/Icons';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const LogHead = () => {
    return (
        <Headline>
            <Contain>
                <Logo/>
                <IconsFlex>
                    <HeadIcon>
                        <span><Icons Icon = {ExploreOutlined} text ="discover"/></span>
                        <span><Icons Icon = {PeopleOutlined} text ="people"/></span>
                        <span><Icons Icon = {CastForEducationOutlined} text ="learning"/></span>
                        <span><Icons Icon = {WorkOutlined} text ="jobs"/></span>
                    </HeadIcon>
                    <HeadButton>
                        <Link to ="/signup">Join Now</Link>
                        <Link to ="/login">Sign in</Link>
                    </HeadButton>
                </IconsFlex>
            </Contain>
        </Headline>
    )
}

export default LogHead

const Headline = styled.div`
    background-color: white;
    padding : 1rem 0;
`

const Contain = styled.div`
    width : 80%;
    margin : 0 auto;
    max-width: 1100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(max-width : 990px){
        width : 90%;
    }
`

const HeadIcon = styled.div`
    display : flex;
    align-items: center;
    span{
        margin-right: 1.7rem;
        @media(max-width : 487px){
            margin-right: 1rem;
        }
    }
`

const IconsFlex = styled.div`
    display : flex;
    align-items : center;
`

const HeadButton = styled.div`
    border-left: 1px solid #555;
    padding : 0.5rem 0;
    a{
        margin-left: 1rem;
        padding : 0.5rem 0.8rem;
        font-weight: 500;
        font-size : 0.9rem;
        text-decoration : none;
        @media(max-width : 495px){
            padding : 0.4rem 0.6rem;
            font-size : 0.7rem;
        }
        @media(max-width : 375px){
            padding : 0.3rem 0.5rem;
            font-size : 0.5rem;
        }
    &:nth-child(1){
        border : none;
        background-color: transparent;
        color :black;
        &:hover{
            background-color: #55555522;
        }
    }
    &:nth-child(2){
    border-radius: 50px;
    padding : 0.5rem 1.4rem;
    border : 1px solid darkblue;
    background-color: transparent;
    color : darkblue;
    transition: 300ms ease-in-out;
    @media(max-width : 495px){
        padding : 0.4rem 1rem;
    }
    @media(max-width : 375px){
        padding : 0.3rem 0.7rem;
    }
    &:hover{
        background-color: #87cfeb57;
        box-shadow:0px 0px 0px 1px darkblue inset;
    }
    }
    }
    @media(max-width : 615px){
        display : flex;
        flex-direction : column;
    }
        
`