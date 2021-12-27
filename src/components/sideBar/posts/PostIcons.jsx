import React from 'react';
import styled from 'styled-components';

const PostIcons = ({text, Icon, color}) => {
    return (
        <Container>
            <div style={{color : color}}> <Icon className="icons"/></div>
            <div className='text'>{text}</div>
        </Container>
    )
}

export default PostIcons

const Container = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0.6rem 0.4rem;
    border-radius: 4px;
    &:hover{
        background-color: #5f5f5f1f;
    }
    .icons{
        font-size: 1.3rem;
        @media(max-width : 420px){
            font-size: 1rem;
        }
    }
    .text{
        font-size : 0.8rem;
        font-weight : 500;
        margin-left : 0.7rem; 
        color : #525252a7;
        @media(max-width : 420px){
            font-size: 0.7rem;
            margin-left : 0.3rem; 
        }
    }
`