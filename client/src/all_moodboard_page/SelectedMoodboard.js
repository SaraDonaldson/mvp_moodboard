import React, { useState } from "react";
import "./SelectedMoodboard.css";
import { Rnd } from "react-rnd";




const SelectedMoodboard = ({board1,backgroundStyle, handleSelectedImage, handleSelectedText, textPreviewStyle}) => {
  console.log("elements",board1);
  const mystyle = backgroundStyle;
  const [isSelected, setIsSelected]= useState(false);
  const [textIsSelected, setTextIsSelected]= useState(false);
  const [sizeState, setSizeState] = useState({ width: 200,
    height: 200})
 const [elementArray, setElementArray]= useState([])

//  [
//   {
//     elementId: index,
//     styles:{}
//   }
//  ]
  
  function handleSelect(imageUrl){
    handleSelectedImage(imageUrl);
    setIsSelected(true);
  }

  function handleSelectText(textToEd, index){
    handleSelectedText({text:textToEd, key:index });
    setTextIsSelected(index);
  }
  return (

    

    <div 
    className='displayArea'  
    style={mystyle}
    >

     {board1.map((element, index) => {
        if (element.type === "label") {
          return (

            <Rnd
            default={{
              x: 0,
              y: 0,
              width: 320,
              height: 200,
            }}
            key={index}
            onClick={() => {handleSelectText(`${element.value}`,index)}}
            >
   
            <p
              draggable= {false}
              style= {{
                position: "absolute",
                top: `${element.top}%`,
                left: `${element.left}%`,
                zIndex: 5,
                
                color: element.color? element.color : "black",
                fontFamily: element.fontFamily? element.fontFamily : "initial",

              }}
              className={textIsSelected === index ? "selected-text" : ""} 
            >
              {element.value}
            </p>
            </Rnd>
          );
        } else {
          return (
            <Rnd
            default={{
              x: 0,
              y: 0,
              width: 320,
              height: 200,
            }}
            key={index}
          >
              <div 
              className="mb-image" 
              onClick={() => {handleSelect(`${element.value}`)}}
              style={{
                minWidth:'100%',
                minHeight:'100%',
            }}
             >

            <img 
            draggable= {false}
            className={isSelected ? "selected-image" : ""} 
            alt= ""
            style={{
                top: `${element.top}%`,
                left: element.left+'%',
                zIndex: 1,
                minWidth:'100%',
                minHeight:'100%'        
              }}
              src={element.value}/>
              
              </div>
              </Rnd>
          );
        }
      })}
   
    </div>
  );
};

export default SelectedMoodboard;
