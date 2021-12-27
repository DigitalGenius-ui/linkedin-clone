import React from 'react';
import styled from 'styled-components';
import ErrorOutlinedIcon from '@material-ui/icons/ErrorOutlined';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import SingleAdd from './SingleAdd';

const AddBar = () => {
    return (
        <Container>
            <Title>
                <p>Add your feed</p>
                <ErrorOutlinedIcon style={{fontSize : "1rem", cursor : "pointer"}}/>
            </Title>
            <Single>
                <SingleAdd/>
                <SingleAdd/>
                <SingleAdd/>
                <SingleAdd/>
            </Single>
            <View>
                <div>
                    <span>View all recommendations</span>
                    <ArrowForwardOutlinedIcon style={{fontSize : "1rem", color : "#1d1d1db0"}}/>
                </div>
            </View>
        </Container>
    )
}

export default AddBar

const Container = styled.div`
    background-color: white;
    border-radius : 10px;
    padding : 0.7rem 0.5rem;
`
const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content : space-between;
    p{
        font-size : 0.9rem;
        font-weight : 500;
    }
`

const Single = styled.div`
    margin : 0.5rem 0;
`
const View = styled.div`
    display : inline-block;
    margin-top : 1.5rem;
    div{
        display : flex;
        align-items: center;
        cursor: pointer;
    }
    &:hover{
        background-color: #53535322;
    }
    span{
        font-size : 0.8rem;
        margin-right : 0.4rem;
        color : #1d1d1db0
    }
`