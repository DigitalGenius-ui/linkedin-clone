import React from 'react';
import styled from 'styled-components';

const Icons = ({Icon, text}) => {
    return (
        <Container>
            <Icon className="icon"/>
            <div style={{fontSize : "0.7rem", textTransform : "capitalize"}}>{text}</div>
        </Container>
    )
}

export default Icons

const Container = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    cursor : pointer;
    color : #6e6e6e;
    &:hover{
        color : black;
    }
    .icon{
        font-size : 1.5rem;
        @media(max-width : 416px){
            font-size: 1.2rem;
        }
    }
    div{
        @media(max-width : 800px){
            display: none;
        }
    }
`