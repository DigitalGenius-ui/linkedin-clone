import React from 'react';
import styled from 'styled-components';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';

const SingleAdd = () => {
    return (
        <Container>
            <Profile>
                <Image src="https://i.pinimg.com/564x/e4/fe/62/e4fe628fdfe56fc1e7bc5629c75fc1d7.jpg" />
            </Profile>
            <Text>
                <h5>Ahmad Yani</h5>
                <p>Lorem ipsum dolor sit amet..</p>
                <Button>
                <AddOutlinedIcon style={{fontSize : "1.2rem"}}/>
                <span>Follow</span>
                </Button>
            </Text>
        </Container>
    )
}

export default SingleAdd

const Container = styled.div`
    display: flex;
    gap: 0.8rem;
    margin : 0.5rem 0;
`
const Profile = styled.div``
const Text = styled.div`
    line-height: 1.1rem;
    p{
        font-size : 0.7rem;
        color : #3f3f3fd1;
    }
`
const Image = styled.img`
    width : 3rem;
    height: 3rem;
    object-fit: cover;
    border-radius: 50%;
`

const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border : 1px solid #000000ae;
    width : 5.5rem;
    border-radius: 50px;
    margin-top: 0.3rem;
    padding : 0.2rem;
    cursor : pointer;
    transition : 0.5s ease;
    &:hover{
        background-color : #80808047;
    }
    span{
        font-size : 0.9rem;
    }
`