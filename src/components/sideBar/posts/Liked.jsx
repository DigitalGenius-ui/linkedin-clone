import React from 'react';
import styled from 'styled-components';

const Liked = ({Icon, color}) => {
    return (
        <Like>
            <div style={{backgroundColor : color}}><Icon 
            style={{fontSize : "0.6rem", color : "#ffffff"
            }}/></div>
        </Like>
    )
}

export default Liked

const Like = styled.div`
    div{
        width : 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content : center;
    }
`