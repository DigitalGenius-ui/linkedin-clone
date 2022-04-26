import React, { useState} from 'react';
import styled from 'styled-components';
import ClearIcon from '@material-ui/icons/Clear';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { LinkedInState } from '../../../context/Context';

const AddPost = () => {

    const [input, setInput] = useState('');
    const { setOpenPopUp } = LinkedInState();

    const submitHandler = async (e) =>{
        e.preventDefault();
        setOpenPopUp(false)
        try {
            const res = await addDoc(collection(db, "post"), {
                input,
                time : new Date(),
                author : {email : auth.currentUser.email, id : auth.currentUser.uid}
            });
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <Container>
            <Background onClick={() => setOpenPopUp(false)}></Background>
                <form onSubmit={submitHandler}>
                    <Header>
                        <div><p>Create a Post</p></div>
                        <ClearIcon onClick={() => setOpenPopUp(false)} style={{cursor : "pointer"}}/>
                    </Header>
                    <Text>
                        <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder='What do you want to talk about?' rows="9" cols="50"/>
                    </Text>
                    <Footer>
                        <Icons>
                            <div><PhotoSizeSelectActualIcon style={{fontSize : "1.2rem", color : "#000000a0"}}/></div>
                            <div><YouTubeIcon style={{ color : "#000000a0", fontSize : "1.6rem"}}/></div>
                        </Icons>
                        <button>Post</button>
                    </Footer>
                </form>
        </Container>
    )
}

export default AddPost

const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom : 0;
    left: 0;
    z-index: 100000;
    form{
        background-color: white;
        width: 30rem;
        margin: 2rem auto;
        border-radius : 10px;
        @media(max-width : 507px){
        width : 95%;
        }
    }
`
const Text = styled.div`
    padding : 0.5rem 1rem;
    textarea{
        width : 100%;
        border : none;
        outline : none;
    }
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom : 1px solid #00000037;
`
const Background = styled.div`
    background-color: #00000071;
    position: fixed;
    top: 0;
    right: 0;
    bottom : 0;
    left: 0;
    z-index: -1;
`

const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding : 0.5rem 1rem;
    border-top : 1px solid #00000037;
    button{
        padding : 0.3rem 1rem;
        font-size : 0.7rem;
        cursor : pointer;
        background-color: #0000ffd1;
        border-radius: 50px;
        color : white;
        border : none;
        &:hover{
            background-color : blue;
        }
    }
`

const Icons = styled.div`
    display: flex;
    align-items: center;
    div{
        margin-right : 0.5rem;
        cursor : pointer;
    }
`