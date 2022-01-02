import React, { useEffect } from 'react';
import styled from 'styled-components';
import PostBar from '../components/sideBar/posts/PostBar';
import AddBar from '../components/sideBar/add/AddBar';
import ProfileBar from '../components/sideBar/profile/ProfileBar';
import "../App.css";
import Head from '../components/header/Head';
import { useNavigate } from 'react-router-dom';
import { LinkedInState } from '../context/Context';

const Feed = () => {

    const navigate = useNavigate();

    const { isAuth } = LinkedInState();

    useEffect(() => {
        if(!isAuth){
            navigate("/login");
        }
    },[]);

    return (
        <>
        <Wrapper>
            <Head />
            <Container>
                <div className='profile'>
                    <ProfileBar/>
                </div>
                <div className="post">
                    <PostBar/>
                </div>
                <div className="add">
                    <AddBar/>
                </div>
            </Container>
        </Wrapper>
        </>
    )
}

export default Feed

const Container = styled.div`
    display : flex;
    gap: 1.4rem;
    width : 80%;
    margin : 1rem auto;
    @media(max-width : 1100px){
        width : 90%;
    }
    @media(max-width : 1080px){
        width : 95%;
    }
    @media(max-width : 1000px){
        justify-content: center;
        width : 80%;
    }
    @media(max-width : 810px){
        width : 90%;
    }
    @media(max-width : 705px){
        flex-direction : column;
    }
    .profile{
        flex : 1.5;
        @media(max-width : 980px){
        flex : 1.3;
        }
    }
    .post{
        flex : 3;
    }
    .add{
        flex : 1.8;
        @media(max-width : 1000px){
        display : none;
        }
    }
`
const Wrapper = styled.div``
