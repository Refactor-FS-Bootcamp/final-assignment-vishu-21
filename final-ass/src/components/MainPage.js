import { useEffect, useState } from 'react';
import './MainPage.css'


import CommentList from './CommentList'



const Mainpage = () => {
  const LOCAL_STORAGE_KEY = "comments";
  const [cmnts, setCmnts] = useState([]);

  const[userName,setUserName] = useState('');
  const[comment,setComment] = useState('');
  const[toggleBtn,setToggleBtn] = useState(true);
  const [editItem,setEditItem] = useState(null);

  const addComment = e => {
    e.preventDefault();
    if(userName === "" || comment === "")
    {
      alert("fill all the field ")
    }else if( comment && !toggleBtn){
      setCmnts(
        cmnts.map((cmnt) =>{
          if(cmnt.id === editItem){
            return{...cmnt , comment:comment }
          }
          return cmnt;
        })
      )
      setToggleBtn(true);
      setComment('');
      setUserName('');
      setEditItem(null);
    }
    else
      { 
        setCmnts([...cmnts, { id: cmnts.length , userName: userName,comment:comment}]);
        setUserName('');
        setComment('');
      }    
  } 
  useEffect(() => {
    const retriveCmnts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveCmnts) setCmnts(retriveCmnts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cmnts));
  }, [cmnts]);

  const getCmntId = (id) => {
    const newCmntList = cmnts.filter((cmnt) => cmnt.id !== id);
    setCmnts(newCmntList);
  };
  const getEditId = (id) => {
    let editId = cmnts.find((cmnt) => {
      return cmnt.id === id;
    });
    
    setToggleBtn(false);
    setComment(editId.comment);
    setUserName(editId.userName);
    setEditItem(id);


  };
  return (
    <div className="app">
      <div className="main">
        <h1>Comment Section</h1>
        <div className="addCmnt">
          <div className="field">
            <label htmlFor="username">USERNAME:</label>
            <input
              type="text"
              id="username"
              value={userName}
              onChange={e => setUserName(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="comment">COMMENT:</label>
            <input
              type="text"
              id="comment"
              value={comment}
              onChange={(e) => setComment( e.target.value)}
            />
          </div>
          {
              toggleBtn ? <button onClick={addComment} type="submit">
            ADD
          </button> :
          <button onClick={addComment} type="submit">
            EDIT
          </button> 
          
          }
        
        </div>
      </div>
      <CommentList cmnts={cmnts} getCmntId={getCmntId} getEditId={getEditId}  />
      
    </div>
  );
};
export default Mainpage;


