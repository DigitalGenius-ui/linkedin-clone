import { createContext, useContext, useState } from 'react';

const LinkedInContext = createContext();

const Context = (props) => {
    const [openPopUp, setOpenPopUp] = useState(false);
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
    const [postLists, setPostLists] = useState([]);
    const [errorMessage, setErrorMessage] = useState({
    open : false,
    message : "",
    type : "success"
  });
    return (
        <LinkedInContext.Provider value={{
            openPopUp, setOpenPopUp,
            isAuth, setIsAuth,
            errorMessage, setErrorMessage,
            postLists, setPostLists
        }}>
            {props.children}
        </LinkedInContext.Provider>
    )
}

export default Context

export const LinkedInState = () => useContext(LinkedInContext);