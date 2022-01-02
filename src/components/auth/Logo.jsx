import { Typography } from '@material-ui/core';
import { LinkedIn } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Logo = () => {
    return (
        <LogHeadLogo >
            <Typography variant='h2' className="logo">
                Linked
            </Typography>
            <LinkedIn className= "linkedin"/>
        </LogHeadLogo>
    )
}

export default Logo

const LogHeadLogo = styled.div`
    display : flex;
    align-items: center;
    cursor: pointer;
    .logo {
        font-size : 1.8rem;
        font-weight: bold;
        color : blue;
        @media(max-width : 443px){
            font-size : 1.5rem;
        }
    }
    .linkedin{
        font-size: 2.2rem;
        color: blue;
        @media(max-width : 443px){
            font-size : 1.8rem;
        }
    }
`