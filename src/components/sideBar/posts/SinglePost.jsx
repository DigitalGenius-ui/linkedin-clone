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
import { useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

const SinglePost = () => {
    const [postLists, setPostLists] = useState([]);
    const [more, setMore] = useState(false);

    const collectionRef = collection(db, "post");
    useEffect(() => {
        const getPost = async () => {
            const data = await getDocs(collectionRef);
            setPostLists(data.docs.map((doc) => ({...doc.data(), id : doc.id})));
            console.log(data.docs.map((doc) => ({...doc.data(), id : doc.id})));
        }
        getPost();
    },[]);

    return (
        <>
            {postLists.map((list) => {
                return(
            <Container key={list.id}>
            <Header>
                <Flex>
                    <Profile>
                        <Image src={"https://media-exp1.licdn.com/dms/image/C5603AQFjc7n5TbGxlw/profile-displayphoto-shrink_100_100/0/1627832721786?e=1645660800&v=beta&t=82VcWVDld6EZy26Y4b00nHleEDq7gi6XT66DIwVjHKg"} alt="milad"/>
                    </Profile>
                    <Texts>
                        <h5>Milad Amiri</h5>
                        <div>miladamiri01</div>
                        <div className="day">2d.<PublicIcon style={{fontSize : "0.9rem", marginLeft : "0.1rem"}}/></div>
                    </Texts>
                </Flex>
                <Icon>
                    <MoreHorizOutlinedIcon/>
                </Icon>
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
                );
            })}
        </>
    )
}

export default SinglePost

const Container = styled.div`
    background-color: white;
    margin: 0.5rem 0;
    border-radius: 10px;
    padding: 0.6rem 0.7rem 0.5rem 0.7rem;
    width : 100%;
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
`

const Flex = styled(Header)``

const Profile = styled.div``
const Image = styled.img`
    width: 3rem;
    height: 3rem;
`
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

const Detail = styled.div`
    font-size : 0.8rem;
    margin : 0.5rem 0;
    line-height : 1.2rem;
`

const PostPhoto = styled.div``
const Photo = styled.img`
    width : 100%;
`

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