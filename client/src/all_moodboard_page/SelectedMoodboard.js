import React from "react";
import "./SelectedMoodboard.css";

const SelectedMoodboard = ({board1,backgroundStyle}) => {
  console.log(board1);
  const mystyle = backgroundStyle;
  
  return (
    <div className='displayArea'  style={mystyle}>
      {board1.map((element, index) => {
        if (element.type === "label") {
          return (
            <p
              style={{
                position: "absolute",
                top: `${element.top}%`,
                left: `${element.left}%`,
                zIndex: 5,
              }}
              key={index}
            >
              {element.value}
            </p>
          );
        } else {
          return (
            <img
              style={{
                position: "absolute",
                top: `${element.top}%`,
                left: `${element.left}%`,
                zIndex: 1,
              }}
              key={index}
              src={element.value}
            />
          );
        }
      })}
    </div>
  );
};

export default SelectedMoodboard;
