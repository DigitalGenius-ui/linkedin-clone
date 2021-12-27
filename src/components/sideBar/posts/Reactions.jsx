import React from 'react';
import styled from 'styled-components';

const Reactions = ({Icon, text}) => {
    return (
        <Container>
            <span><Icon className="icons"/></span>
            <span className='text'>{text}</span>
        </Container>
    )
}

export default Reactions

const Container = styled.div`
    display : flex;
    align-items : center;
    padding: 0.5rem 0.8rem;
    border-radius : 10px;
    cursor : pointer;
    @media(max-width : 420px){
        padding: 0.2rem 0.5rem;
    }
    &:hover{
        background-color : #8080802d;
    }
    .icons{
        font-size : 1.2rem;
        margin-right : 0.4rem;
        @media(max-width : 420px){
            font-size : 1rem;
        }
    }
    .text{
        font-size : 0.8rem;
        font-weight : 500;
        text-transform : capitalize;
        @media(max-width : 420px){
            font-size: 0.7rem;
        }
    }
`