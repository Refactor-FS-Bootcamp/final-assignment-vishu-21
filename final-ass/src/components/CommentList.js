import React from "react";

import Feedback from "./Feedback";


const CommentList = (props) => {
 
  return (
    <div className="container">
        <h2>COMMENTS</h2>
        {props.cmnts.map(cmnt =>( 
            <div className="cmntlist" key={cmnt.id}>
            <div className="box">
                <div className="userN">
                    <i className="bi bi-person-circle"></i>
                    <span className="text">{cmnt.userName}</span>
                </div>
                <div className="cmnts">
                    <i className="bi bi-chat-right-text"></i>
                    <span>{cmnt.comment}</span>
                </div>
                <Feedback />            
            </div>
            <div className="delete">
                <i data-title="Edit" className="bi bi-pencil-square" onClick={()=> props.getEditId(cmnt.id)}></i>
                <i data-title="Delete" className="bi bi-trash" onClick={()=> props.getCmntId(cmnt.id)}></i>
            </div>            
        </div>
        ))}       
    </div>
  );
};

export default CommentList;
