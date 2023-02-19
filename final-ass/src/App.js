import { useEffect, useState } from 'react';
import './App.css';
import AddComment from './components/AddComment';
import CommentList from './components/CommentList';

function App() {
  const LOCAL_STORAGE_KEY = 'cmnts'
  const [cmnts , setCmnts] = useState([]);

  const addCommentHandler = cmnt => {
    
    setCmnts([...cmnts,{ id: cmnts.length, ...cmnt}])
  }
  useEffect(() => {
    const retriveCmnts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retriveCmnts) setCmnts(retriveCmnts)
  }, [])
  
  useEffect(() => {
   localStorage.setItem(LOCAL_STORAGE_KEY , JSON.stringify(cmnts))
  }, [cmnts])
  const getCmnt= id => {
    const newCmntList = cmnts.filter(cmnt => cmnt.id !== id )
    setCmnts(newCmntList)
  }
  return (
    <div className='app' >
      <AddComment addCommentHandler={addCommentHandler} />
      <CommentList cmnts={cmnts} getCmnt={getCmnt} />
    </div>
  );
}

export default App;
