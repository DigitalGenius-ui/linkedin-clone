import { Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { ArrowForwardIosOutlined } from '@material-ui/icons';
import LogHead from './LogHead';

const LogHeadDetail = () => {
    return (
        <>
        <LogHead />
        <Wrapper>
            <Container>
                <Right>
                    <Typography variant='h3' className="welcome">
                        Welcome to your<br></br> professional community
                    </Typography>
                    <div className='search'>
                        <Typography style={{color : "#555555"}}>
                            Search for a job
                        </Typography>
                        <ArrowForwardIosOutlined style={{fontSize : "1.2rem", color : "#1111119e"}}/>
                    </div>
                    <div className='search'>
                        <Typography style={{color : "#555"}}>
                            Find a person you know
                        </Typography>
                        <ArrowForwardIosOutlined style={{fontSize : "1.2rem", color : "#1111119e"}}/>
                    </div>
                    <div className='search'>
                        <Typography style={{color : "#555"}}>
                            Learn a new skill
                        </Typography>
                        <ArrowForwardIosOutlined style={{fontSize : "1.2rem", color : "#1111119e"}}/>
                    </div>
                </Right>
                <Left>
                    <div>
                        <img src="https://cdn.dribbble.com/users/838440/screenshots/6786782/haveacoffe-dribb.jpg?compress=1&resize=800x600" alt="photo" />
                    </div>
                </Left>
            </Container>
        </Wrapper>
        </>
    )
}

export default LogHeadDetail

const Container = styled.div`
    display: flex;
    width : 80%;
    max-width : 1100px;
    margin : 0 auto;
    padding-top : 4rem;
`
const Right = styled.div`
    flex: 1.4;
    .welcome{
        color: #550404b3;
        font-weight: 200;
        margin-bottom : 3rem;
    }
    .search{
        display : flex;
        align-items: center;
        justify-content : space-between;
        width : 22rem;
        border : 1px solid #5555554e;
        padding : 0.8rem;
        border-radius: 10px;
        cursor : pointer;
        margin-top : 1rem;
        background-color: white;
        &:hover{
            box-shadow: -4px 7px 31px -21px rgba(23,23,23,0.75);
            -webkit-box-shadow: -4px 7px 31px -21px rgba(23,23,23,0.75);
            -moz-box-shadow: -4px 7px 31px -21px rgba(23,23,23,0.75);
        }
    }
`
const Left = styled.div`
    flex: 1;
    img{
        z-index : 10;
        position : absolute;
        right : 0;
        width : 33rem;
        height : 30rem;
        object-fit: cover;
        z-index : -1;
    }
`

const Wrapper = styled.div`
    padding-bottom : 7.3rem;
    background-color: white;
    overflow: hidden;
    z-index : -1;
    position : relative;
`