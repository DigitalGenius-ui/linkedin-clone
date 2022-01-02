import { Avatar } from '@material-ui/core';
import { signOut } from 'firebase/auth';
import React from 'react';
import styled from 'styled-components';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { LinkedInState } from '../../context/Context';

const LogOut = () => {

    const navigate = useNavigate();
    const { setIsAuth, setErrorMessage } = LinkedInState();

    const logOutFunction = () => {
        signOut(auth).then(() => {
          setIsAuth(null);
          navigate("/");
          localStorage.clear();
          setErrorMessage({
            open : true,
            message : "Logout successfully",
            type : "success"
        })
        })
    }

    return (
        <Container>
            <Profile>
                <Avatar src="/broken-image.jpg" />
                <Name>
                    <div>Milad Amiri</div>
                    <div>student</div>
                </Name>
            </Profile>
            <button onClick={logOutFunction}>Log Out</button>
        </Container>
    )
}

export default LogOut

const Container = styled.div`
    background-color: white;
    box-shadow: 0px 0px 3px 0.5px black;
    padding : 0.3rem;
    width : 12rem;
    button{
        padding :0.3rem; 
        background-color: transparent;
        cursor: pointer;
        border : none;
        transition: all 300ms;
        margin-top : 1rem;
        width : 100%;
        background-color: blue;
        color : white;
        border-radius: 50px;
        &:hover{
            background-color: #09097c;
            color : white;
        }
    }
`

const Profile = styled.div`
    display  :flex;
    align-items: center;
`

const Name  =styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;
    div{
        font-size: 0.9rem;
        :nth-child(2){
            font-size : 0.7rem;
            font-weight: 400;
            color : #555;
        }
    }
`
