import React, { useEffect } from 'react';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import styled from 'styled-components';
import PublicIcon from '@material-ui/icons/Public';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import Liked from './Liked';
import Reactions from './Reactions';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { Avatar } from '@material-ui/core';
import { LinkedInState } from '../../../context/Context';

const SinglePost = () => {

    const collectionRef = collection(db, "post");
    const { postLists, setPostLists } = LinkedInState();
    const { isAuth } = LinkedInState();

    const deletePost = async (id) => {
        const postDoc = doc(db, "post", id);
        await deleteDoc(postDoc);
    }

    const getPost = async () => {
            const data = await getDocs(collectionRef);
            setPostLists(data.docs.map((doc) => ({...doc.data(), id : doc.id})));
        };
    useEffect(() => {
        getPost();
    });

    return (
        <>
        {postLists.map((list) => {
            return <Container key={list.id}>
            <Header>
                <Flex>
                    <Profile>
                        <Avatar width="2rem" height ="2rem"/>
                    </Profile>
                    <Texts>
                        <h5>{list.author.email}</h5>
                        <div>for test</div>
                        <div className="day">2d.<PublicIcon style={{fontSize : "0.9rem", marginLeft : "0.1rem"}}/></div>
                    </Texts>
                </Flex>
                {isAuth && list.author.id === auth.currentUser.uid &&
                <Icon className="removeIcon">
                    <MoreHorizOutlinedIcon
                    style={{cursor : "pointer"}}
                    />
                     <Remove className="removeBtn" onClick={() => deletePost(list.id)}>
                    Remove
                    </Remove>
                </Icon>
                }
            </Header>
            <Detail>
            <p>
                {list.input}
            </p>
            </Detail>
            {/* <PostPhoto>
                <Photo src={"https://picjumbo.com/wp-content/uploads/alone-with-his-thoughts-1080x720.jpg"}/>
            </PostPhoto> */}
            <Like>
                <LikeFlex>
                    <Div>
                        <Liked Icon ={ThumbUpIcon} color ="#0551b4"/>
                        <Liked Icon ={FavoriteBorderIcon} color ="#a50909b0"/>
                        <Liked Icon ={SentimentVeryDissatisfiedIcon} color ="#fad879"/>
                    </Div>
                    <span style={{fontSize : "0.7rem"}}>10,500</span>
                </LikeFlex>
                <span style={{fontSize : "0.7rem"}}>1,500 Comments</span>
            </Like>
            <Reaction>
                <div><Reactions text="like" Icon = {ThumbUpAltOutlinedIcon}/></div>
                <div><Reactions text="comment" Icon = {ChatOutlinedIcon}/></div>
                <div><Reactions text="share" Icon = {ShareOutlinedIcon}/></div>
                <div><Reactions text="send" Icon = {SendOutlinedIcon}/></div>
            </Reaction>
        </Container>
        })}    
        </>
    );
    }

export default SinglePost

const Container = styled.div`
    background-color: white;
    margin: 0.5rem 0;
    border-radius: 10px;
    padding: 0.6rem 0.7rem 0.5rem 0.7rem;
    width : 100%;
    position : relative; 
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
`

const Flex = styled(Header)``

const Profile = styled.div``

const Texts = styled.div`
    margin-left : 0.5rem;
    line-height : 1rem;
    h5{
        letter-spacing: 0.9px;
        color : #2f2f2f;
    }
    div{
        font-size : 0.7rem;
        color : gray;
    }
    .day{
        display : flex;
        align-items : center;
    }
`
const Icon = styled.div``

const Remove = styled.div`
    position : absolute;
    right : 0.9rem;
    padding : 0.3rem 0.4rem;
    top : 2rem;
    font-size : 0.8rem;
    background-color : white;
    box-shadow: 0px 0px 3px 0.5px black;
    cursor : pointer;
`

const Detail = styled.div`
    font-size : 0.8rem;
    margin : 0.5rem 0;
    line-height : 1.2rem;
`

// const PostPhoto = styled.div``
// const Photo = styled.img`
//     width : 100%;
// `

const Like = styled.div`
    display : flex;
    justify-content: space-between;
    align-items : center;
    border-bottom : 1px solid #0000005f;
    padding : 0.5rem 0;
`
const LikeFlex = styled.div`
    display : flex;
    align-items : center;
    gap : 0.1rem;
`
const Div = styled(LikeFlex)``

const Reaction = styled.div`
    display : flex;
    align-items : center;
    justify-content : space-between;
    margin-top : 0.5rem;
    width : 100%;
`