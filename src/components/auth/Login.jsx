import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TextField } from "@material-ui/core";
import Logo from './Logo';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import  { LinkedInState } from '../../context/Context';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setErrorMessage } = LinkedInState();
    const navigate = useNavigate();

    const signIn = async () => {
        if(!email || !password){
            return setErrorMessage({
                open : true,
                message : "Please fill all blank space",
                type : "error"
            });
        }
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            navigate('/feed');
            localStorage.setItem("isAuth", true);
            setErrorMessage({
                open : true,
                message : `Login successfully ${result.user.email}`,
                type : "success"
            })
        } catch (error) {
            setErrorMessage({
                open : true,
                message : `Your Error is ${error.message}`,
                type : "error"
            })
        }
    }

    return (
        <Wrapper>
            <Container>
                <Header>
                    <div onClick={() => navigate("/")}><Logo/></div>
                </Header>   
                <Form >
                    <div className='title'>
                        <h1>Sign In</h1>
                        <span>Stay updated on your professional world</span>
                    </div>
                    <TextField className="input" label="Email Address" variant="outlined" 
                    value={email} onChange ={(e) => setEmail(e.target.value)}
                    margin="normal"
                    InputProps={{ style: { fontSize: 12 } }}
                    InputLabelProps={{ style: { fontSize: 12 } }}
                    />
                    <TextField className="input" label="Password" variant="outlined" type="password"
                    value={password} onChange ={(e) => setPassword(e.target.value)}
                    margin="normal"
                    InputProps={{ style: { fontSize: 12 } }}
                    InputLabelProps={{ style: { fontSize: 12 } }}
                    />
                    <button className="forget">Forgot password?</button>
                    <button className='join' onClick={signIn}>Agree & Join</button>
                </Form> 
                <Join>
                    New to LinkedIn? <span><Link to="/signup">Join now</Link></span>
                </Join>
            </Container>        
        </Wrapper>
    )
}

export default Login

const Wrapper = styled.div`
    background-color : #fff;
    height : 100vh;
`

const Container = styled.div`
    width: 90%;
    margin : 0 auto;
`

const Header = styled.div`
    padding : 1.8rem 1rem;
`

const Form = styled.div`
    display : flex;
    flex-direction : column;
    background-color : white;
    width : 23rem;
    margin : 0 auto;
    padding : 0.8rem 1.5rem;
    border-radius : 10px;
    box-shadow: 0px 0px 31px -9px rgba(0,0,0,0.45);
    -webkit-box-shadow: 0px 0px 31px -9px rgba(0,0,0,0.45);
    -moz-box-shadow: 0px 0px 31px -9px rgba(0,0,0,0.45);
    @media(max-width : 436px){
       width : 90%;
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
        padding : 0.9rem;
        background-color : #2f2fff;
        margin : 1rem 0;
        &:hover{
            background-color : #1515a7;
        }
    }
    .title{
        margin : 1rem 0;
        h1{
            font-size: 1.8rem;
            font-weight: 500;
            @media(max-width : 365px){
                font-size: 1.5rem;
            }
        }
        span{
            font-size : 0.8rem;
            font-weight: 400;
            color : #000000b0
        }
    }
    .input{
        margin : 0.5rem 0;
    }
    .forget{
        color : blue;
        cursor : pointer;
        padding : 0 0.2rem;
        margin : 0.5rem 0;
        width : 7rem;
        font-size: 0.8rem;
        &:hover{
            background-color: #87cfeb52;
        }
    }
`

const Join = styled.div`
    text-align  : center;
    margin-top: 2rem;
    font-size : 0.9rem;
    a{
        color : blue;
        text-decoration : none;
        font-weight: 500;
        &:hover{
            text-decoration : underline; 
        }
    }
`