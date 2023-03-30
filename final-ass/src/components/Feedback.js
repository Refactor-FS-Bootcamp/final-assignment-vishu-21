import React, { useState } from "react";




const Feedback = () => {
    
  const [num, setNum] = useState(0);
  return (
    <div>
      <div className="feedback">
        <div className="likes">
          <i data-title="Like"
          onClick={() => {setNum(num + 1)}} 
          className="bi bi-hand-thumbs-up"></i>
          <span>{num} Likes</span>
        </div>
        <div className="dislike">
          <i data-title="Dislike" onClick={() => { if (num >= 1) 
          setNum(num - 1);
          else setNum(0);
          }} className="bi bi-hand-thumbs-down"></i>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

