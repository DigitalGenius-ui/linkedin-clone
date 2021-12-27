import { useState } from 'react';
import './App.css';
import Head from './components/header/Head';
import AddPost from './components/sideBar/posts/AddPost';
import Feed from './pages/Feed';

function App() {
  const [openPopUp, setOpenPopUp] = useState(false);
  return (
    <div className="App">
      <Head/>
      <Feed setOpenPopUp={setOpenPopUp}/>
      {openPopUp && <AddPost 
      setOpenPopUp={setOpenPopUp}/>}
    </div>
  );
}

export default App;
