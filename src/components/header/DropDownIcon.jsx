import React from 'react';
import styled from 'styled-components';

const DropDownIcon = ({Arrow, text, Icon}) => {
    return (
        <Container>
            <Icon className="icon"/>
            <div style={{fontSize : "0.7rem", textTransform : "capitalize"}}>
                {text}<Arrow style={{fontSize : "1rem"}}/>
            </div>
        </Container>
    )
}

export default DropDownIcon

const Container = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    cursor : pointer;
    line-height : 1rem;
    color : #6e6e6e;
    &:hover{
        color : black;
    }
    .icon{
        font-size: 1.5rem;
        @media(max-width : 416px){
            font-size: 1.2rem;
        }
    }
    div{
        display : flex;
        align-items : center;
        @media(max-width : 800px){
            display: none;
        }
    }
`