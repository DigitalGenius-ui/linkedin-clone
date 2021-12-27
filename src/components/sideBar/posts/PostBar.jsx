import React from 'react';
import styled from 'styled-components';
import PostIcons from './PostIcons';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SinglePost from './SinglePost';

const PostBar = ({setOpenPopUp}) => {
    return (
        <>
        <Container>
            <Flex>
                <Profile>
                    <Image src={"https://media-exp1.licdn.com/dms/image/C5603AQFjc7n5TbGxlw/profile-displayphoto-shrink_100_100/0/1627832721786?e=1645660800&v=beta&t=82VcWVDld6EZy26Y4b00nHleEDq7gi6XT66DIwVjHKg"}/>
                </Profile>
                <Input onClick={() => setOpenPopUp(true)}>
                    <span>Start Post</span>
                </Input>
            </Flex>
            <Icons>
                <PostIcons text="Photo" Icon={PhotoSizeSelectActualIcon} color="#0a4ca1" size="1.3rem"/>
                <PostIcons text="Video" Icon={YouTubeIcon} color="#005f0d" size="1.5rem"/>
                <PostIcons text="Event" Icon={EventAvailableIcon} color="#a1670a" size="1.4rem"/>
                <PostIcons text="Write article" Icon={AssignmentIcon} color="#920731" size="1.4rem"/>
            </Icons>
        </Container>
        <Wrapper>
            <SinglePost/>
        </Wrapper>
        </>
    )
}

export default PostBar

const Container = styled.div`
    background-color: white;
    padding : 0.5rem 0.8rem 0.2rem 0.8rem;
    border-radius: 10px;
    width : 100%;
`
const Flex = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`
const Profile = styled.div``
const Input = styled.div`
    border: 1px solid #5d5d5d;
    width : 100%;
    padding: 0.7rem;
    border-radius: 50px;
    cursor: pointer;
    @media(max-width : 420px){
        padding : 0.5rem;
    }
    &:hover{
        background-color: #5d5d5d2d;
    }
    span{
        font-size: 0.8rem;
        color: #5d5d5d;
    }
`
const Image = styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    @media(max-width : 420px){
        width: 2.8rem;
        height: 2.8rem;
    }
`

const Icons = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-between;
    margin-top: 0.2rem;
`

const Wrapper = styled.div``