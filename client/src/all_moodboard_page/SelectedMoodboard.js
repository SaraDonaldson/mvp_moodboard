import React, { useState } from "react";
import "./SelectedMoodboard.css";

const SelectedMoodboard = ({board1,backgroundStyle, handleSelectedImage}) => {
  console.log(board1);
  const mystyle = backgroundStyle;
  const [isSelected, setIsSelected]= useState(false);
  
  function handleSelect(imageUrl){
    handleSelectedImage(imageUrl);
    setIsSelected(true);
  }

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
            alt= ""
            className= {isSelected ? "selected-image" : ""}
              style={{
                position: "absolute",
                top: `${element.top}%`,
                left: element.left+'%',
                // zIndex: 1,
                
              }}
              key={index}
              src={element.value}
              onClick={() => {handleSelect(`${element.value}`)}}/>
          );
        }
      })}
    </div>
  );
};

export default SelectedMoodboard;
