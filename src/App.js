import { useEffect } from 'react';
import AddPost from './components/sideBar/posts/AddPost';
import Feed from './pages/Feed';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LogHeadDetail from './components/auth/LogHeadDetail';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './components/firebase';
import Message from './components/auth/Message';
import { LinkedInState } from './context/Context.jsx';

function App() {

  const { openPopUp, setIsAuth, isAuth } = LinkedInState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user =>{
      if(user) setIsAuth(user)
      else setIsAuth(null);
    });
    return unsubscribe;
  });


  return (
    <Router>
      {openPopUp && <AddPost/>}
      <Message />
      <Routes>
        {isAuth && <Route path="/feed" element={<Feed/>}/>}
        {!isAuth && <Route path="/" element={<LogHeadDetail/>}/>}
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="*" element={<Navigate to={isAuth ? "/feed" : "/login"}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
