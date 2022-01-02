import React from 'react';
import styled from 'styled-components';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import StopIcon from '@material-ui/icons/Stop';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import { Avatar } from '@material-ui/core';
import { LinkedInState } from '../../../context/Context';

const ProfileBar = () => {
    const { isAuth } = LinkedInState();
    return (
        <>
        <Container>
            <div className='bg'></div>
            <div className='relative'>
                <Avatar className="profile"/>
            </div>
            <div className='detail'>
                <h1>{isAuth.email}</h1>
                <p>for test</p>
            </div>
            <Connection>
                <div>
                    <h6>Connection</h6>
                    <h5>Grow your network</h5>
                </div>
                <PersonAddIcon/>
            </Connection>
            <Access>
                <h6>Access exclusive tools & insights</h6>
                <h5><StopIcon style={{color : "rgb(172, 99, 3)"}}/>Try Premium for free</h5>
            </Access>
            <Item>
                <TurnedInIcon style={{fontSize : "1rem", color : "#00000088"}}/>
                <h5>My items</h5>
            </Item>
        </Container>
        <Sticky>
            <div className="discover">
                <div className='group'>
                    <div>Groups</div>
                    <div>Events</div>
                    <div>Followed Hashtags</div>
                </div>
                <button className='btn'>Discover More</button>
            </div>
        </Sticky>
        </>
    );
}

export default ProfileBar

const Container = styled.div`
    background-color: white;
    border-radius : 10px;
    position: relative;
    overflow : hidden;
    .relative{
        position: relative;
    }
    .bg{
        background-image: url("https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg");
        height: 4rem;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .profile{
        position: absolute;
        top: 80%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        width: 4rem;
        height: 4rem;
        border: 2px solid white;
    }
    .detail{
        padding:1rem;
        text-align: center;
        h1{
            margin-top: 2rem;
            font-size: 0.9rem;
            color: #535353;
            padding: 0 0 0.5rem 0;
        }
        p{
            font-size: 0.7rem;
        }
    }
`

const Connection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    cursor : pointer;
    border-top: 1px solid #00000047;
    h6{
        font-weight: 300;
    }
    h5{
        font-size: 0.7rem;
        font-weight: 500;
    }
    &:hover{
        background-color: #d8d8d8;
    }
`
const Access = styled.div`
    padding: 1rem;
    cursor : pointer;
    border-top: 1px solid #00000047;
    h6{
        font-weight: 300;
    }
    h5{
        font-size: 0.7rem;
        font-weight: 500;
        display: flex;
        align-items: center;
        &:hover{
        color : #067bc8;
    }
    }
    &:hover{
        background-color: #d8d8d8;
    }
`
const Item = styled(Access)`
    display: flex;
    align-items: center;
`

const Sticky = styled.div`
    position : relative;
    .sticky{
        position : fixed;
        width : 16%;
    }
    .discover{
        background-color: white;
        margin-top: 0.5rem;
        border-radius : 10px;
        overflow : hidden;
    }
    .group{
        padding : 0.5rem;
        div{
        font-size: 0.7rem;
        padding : 0.2rem 0;
        color : #067bc8;
        font-weight: 500;
        cursor : pointer;
    }
    }
    .btn{
        width : 100%;
        border : none;
        padding : 0.8rem 0;
        background-color : transparent;
        border-top: 1px solid #00000047;
        cursor : pointer;
        color : gray;
        &:hover{
        background-color: #d8d8d8;
        border-top: 1px solid #d8d8d8;
        padding : 0.8rem 0;
        }
    }
`


