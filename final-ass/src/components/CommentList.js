import React, { useState } from "react";
import "./CommentList.css";

const CommentList = (props) => {
    const [num, setNum] = useState(0);

    const incr = () =>{
        setNum(num+1);
    }
    const decr = () =>{
         if (num>=1)
            setNum(num-1)
        else setNum(0)    
    }
  return (
    <div className="container">
        <h2>COMMENTS</h2>
        {props.cmnts.map(cmnt =>( 
            <div className="cmntlist" key={cmnt.id}>
            <div className="box">
                <div className="userN">
                    <i class="bi bi-person-circle"></i>
                    <span>{cmnt.userName}</span>
                </div>
                <div className="cmnts">
                    <i class="bi bi-chat-right-text"></i>
                    <span>{cmnt.comment}</span>
                </div>
                <div className="feedback">
                    <div className="likes">
                        <i onClick={incr} class="bi bi-hand-thumbs-up"></i>
                        <span>{num} </span>
                    </div>
                    <div className="dislike">
                        <i onClick={decr} class="bi bi-hand-thumbs-down"></i>
                        
                    </div>
                </div>
            </div>
            <div className="delete">
                <i class="bi bi-trash" onClick={()=> props.getCmnt(cmnt.id)}></i>
            </div>            
        </div>
        ))}
        
        
    </div>
  );
};

export default CommentList;
