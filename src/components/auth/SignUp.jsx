import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { LinkedInState } from '../../context/Context';
import { auth, provider } from '../firebase';
import Logo from './Logo';

const SignUp = () => {
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');

    const navigate = useNavigate();
    const { setErrorMessage } = LinkedInState();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((res) => {
            navigate('/feed');
            localStorage.setItem("isAuth", true)
            setErrorMessage({
                open : true,
                message : `Login successfully ${res.user.email}`,
                type : "success"
            })
        }).catch((err) => {
            setErrorMessage({
                open : true,
                message : `Your Error is ${err.message}`,
                type : "error"
            })
        })
    }

    const signUp = async () => {
        try {
            const result = await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
            console.log(result);
            navigate('/feed');
            localStorage.setItem("isAuth", true)
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <Container>
            <Header>
                <Logo/>
                <h1>Make the most of your professional life</h1>
            </Header>
            <Form>
                <label>Enter Your Email Address</label>
                <input type="text" 
                value={signUpEmail} onChange={(e) => setSignUpEmail(e.target.value)}
                />
                <label>Password (6 or more characters)</label>
                <input type="password" 
                value={signUpPassword} onChange={(e) => setSignUpPassword(e.target.value)}
                />
                <div className="agree">
                    By clicking Agree & Join, you agree to the LinkedIn <span>User Agreement</span>, 
                    <span>Privacy Policy</span>, and <span>Cookie Policy</span>.
                </div>
                <button className='join' onClick={signUp}>Agree & Join</button>
                <div className='or'>or</div>
                <button className="google" onClick={signInWithGoogle}>
                    <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="google" />
                    Join with Google
                </button>
                <Login>
                    Already on LinkedIn? <span><Link to="/login">Sign in</Link></span>
                </Login>
            </Form>
        </Container>
    )
}

export default SignUp

const Container = styled.div`
    display : flex;
    align-items: center;
    flex-direction: column;
    align-items: center;
`
const Header = styled(Container)`
    margin-top : 2rem;
    h1{
        font-weight: 400;
        padding : 1rem 0;
        font-size : 1.7rem;
    }
`

const Form = styled.div`
    display : flex;
    flex-direction : column;
    background-color : white;
    width : 23rem;
    margin : 0 auto;
    padding : 1.5rem;
    border-radius : 10px;
    label{
        font-size : 0.8rem;
        color : #555;
        padding-bottom : 0.2rem;
    }
    input{
        padding : 0.3rem ;
        margin-bottom : 1rem;
    }
    .agree{
        font-size : 0.7rem;
        color : #555;
        padding-bottom : 1rem;
        text-align : center;
    }
    span{
        color : blue;
        margin-left: 0.2rem;
        cursor : pointer;
        font-weight : 500;
    }
    button{
        border-radius : 50px;
        color : white;
        font-size : 0.9rem;
        cursor : pointer;
        border : none;
        font-weight: 500;
        background-color: transparent;
    }
    .join{
        padding : 0.7rem;
        background-color : #2f2fff;
        &:hover{
            background-color : #1515a7;
        }
    }
    .or{
        text-align : center;
        padding : 1rem 0;
        font-size : 0.9rem;
    }
    .google{
        display : flex;
        align-items: center;
        justify-content: center;
        background-color: none;
        border : 1px solid blue;
        color : black;
        padding : 0.4rem ;
        transition : all 300ms ease-in-out;
        &:hover{
            box-shadow: 0px 0px 0px 1px darkblue inset;
            background-color: #87cfeb52;
        }
        img{
            width : 1.6rem;
            margin-right : 0.5rem;
        }
    }
`

const Login = styled.div`
    text-align: center;
    padding-top : 1rem;
    font-size : 0.9rem;
    a{
        color : blue;
        text-decoration : none;
        &:hover{
            text-decoration : underline; 
        }
    }
`