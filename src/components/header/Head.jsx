import React,{useState, useRef, useEffect} from 'react';
import { Notifications, AccountCircle, ArrowDropDownOutlined, AppsRounded,
MoreHorizOutlined, Home, LinkedIn, Search, Work, Group, Chat } from '@material-ui/icons';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import Icons from './Icons';
import DropDownIcon from './DropDownIcon';
import LogOut from '../auth/LogOut';

const Head = () => {
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);
    const [navigation, setNavigation] = useState(false);
    const [logOut, setLogOut] = useState(false);
    const inputRef = useRef();
    const inputOPen = () => {
        setOpen(true);
    }
    useEffect(() => {
        if(open){
            inputRef.current.focus();
        };
    }, [open]);
    return (
        <Nav>
            <Container>
                <Flex open={open}>
                    <div className="overFlow" onClick={() => setOpen(false)}></div>
                    <Logo>
                        <LinkedIn className="linkedin" style={{color : "blue"}}/>
                        <SearchBackground open = {open}>
                            <SearchBar>
                                <Search style={{fontSize : "1.2rem", marginRight : "0.3rem"}}/>
                                <input 
                                type="text"
                                placeholder='Search'
                                value={search}
                                ref={inputRef}
                                onChange={(e) => setSearch(e.target.value)}
                                />
                            </SearchBar>
                        </SearchBackground>
                    </Logo>
                    <Navigation >
                        <span onClick={inputOPen} className="searchIcon"><Icons Icon = {Search} text="search"/></span>
                        <span><Icons Icon = {Home} text="home"/></span>
                        <span><Icons Icon = {Group} text="my network"/></span>
                        <span><Icons Icon = {Work} text="jobs"/></span>
                        <span><Icons Icon = {Chat} text="messaging"/></span>
                        <span><Icons Icon = {Notifications} text="notifications"/></span>
                        <span onClick={() => setLogOut(!logOut)}><DropDownIcon Arrow={ArrowDropDownOutlined} text="me"Icon = {AccountCircle}/></span>
                        {logOut ? (<span className="logout"><LogOut/></span>): null}
                    </Navigation>
                        <WorkPart navigation={navigation}>
                        <div className="dots"
                        onClick={() => setNavigation(!navigation)}
                        >
                        <DropDownIcon Arrow={ArrowDropDownOutlined} text="work"Icon = {MoreHorizOutlined}/></div>
                        <div className="flex">
                        <div><DropDownIcon Arrow={ArrowDropDownOutlined} text="work"Icon = {AppsRounded}/></div>
                        <div><a href="#">
                        <p>Try Premium for</p>    
                        <p>free</p>    
                        </a>
                        </div>
                        </div>
                        </WorkPart>
                </Flex>
            </Container>
        </Nav>
    )
}

export default Head


const Nav = styled.div`
    background-color: white;
    position: sticky;
    top : 0;
    right : 0;
    left : 0;
    z-index : 10000;
`

const Flex = styled.div`
    width: 85%;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    .overFlow{
        position: fixed;
        left: 0;
        right : 0;
        bottom : 0;
        top : 0;
        background-color : #0c0c0c75;
        display : ${props => props.open ? "block" : "none"};
        /* z-index : -1;  */
    }
    @media(max-width : 1100px){
        width: 100%;
        flex : 1;
    }
    @media(max-width : 544px){
        justify-content: space-between;
    }
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    @media(max-width : 1000px){
        flex : 0;
    }
    .linkedin{
        font-size :2.7rem;
      @media(max-width : 416px){
       font-size : 2.2rem; 
    }
    }
`

const Navigation = styled.div`
    display: flex;
    align-items: center;
    position : relative;
    span{
        margin : 0 1rem;
        padding : 0.5rem 0;
        @media(max-width : 700px){
            margin : 0 0.6rem;
        }
        @media(max-width : 374px){
            margin : 0 0.4rem;
       }
    }
    @media(max-width : 700px){
        margin : 0;
    }
    .searchIcon{
        display: none;
        @media(max-width : 1000px){
            display: inline;
        }
    }
    .logout{
        position: absolute;
        right: -1rem;
        top : 3.3rem;
    }
`

const SearchBar = styled.div`
    display: flex;
    align-items: center;
    background-color: #dbedfb;
    padding : 0 0.4rem;
    @media(max-width : 1000px){
        border-radius : 3px;
    }
    input{
        background-color: transparent;
        width : 100%;
        padding : 0.4rem;
        border : none;
        outline : none;
        @media(max-width : 1000px){
            background-color: #dbedfb;
        }
    }
`

const SearchBackground = styled.div`
    @media(max-width : 1000px){
        position : absolute;
        left : 5rem;
        right : 0;
        top : 0;
        background-color: white;
        padding : 0.6rem 0.5rem;
        display : ${props => props.open ? "inline" : "none"};
        z-index: 1000;
    }
    @media(max-width : 710px){
        padding : 0.4rem 0.5rem;
    }
    @media(max-width : 710px){
        left : 4rem;
    }
    @media(max-width : 415px){
        padding : 0.2rem 0.5rem;
        left : 3rem;
    }
`

const WorkPart = styled.div`
    display : flex;
    align-items: center;
    border-left : 1px solid #c3c3c3;
    .flex{
        display : flex;
        align-items: center;
        padding : 0.5rem 0;
        @media(max-width : 544px){
        position : absolute;
        top : 3rem;
        right : 0;
        background-color: white;
        display : ${props => props.navigation ? "flex" : "none"};
        }
    }
    .dots{
        display : none;
        @media(max-width : 544px){
        display: inline;
    }
    }
    div{
        margin : 0 0.5rem;
        a{
            font-size : 12px;
            line-height : 1rem;
            text-align : center;
            text-decoration : none;
            color : #ad5c10;
            &:hover{
                text-decoration: underline;
            }
            @media(max-width : 700px){
            font-size : 10px;
            line-height: 0.8rem;
        }
        }
    }
`