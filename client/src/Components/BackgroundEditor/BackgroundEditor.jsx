import { useState } from "react";
import "./backgroundEditor.css"
import BgColorPicker from "./BgColorPicker";
import BgGradients from "./BgGradients";
import BgImage from "./BgImage";
import BgTextures from "./BgTextures";

export default function PhotoEditor() {
let [backgroundType, setBackgroundType] = useState();
let [backgroundValue, setBackgroundValue] = useState();
let [colorIsActive, setColorIsActive] =useState(false);
let [gradientIsActive, setGradientIsActive] =useState(false);
let [textureIsActive, setTextureIsActive] =useState(false);
let [bgImageIsActive, setBgImageIsActive] =useState(false);


function resetMenu(){
    setColorIsActive(false);
    setGradientIsActive(false);
    setTextureIsActive(false);
    setBgImageIsActive(false);
}

function handleBgType(BgTypeString){
    setBackgroundType(BgTypeString);
}

function handleBgMenu(bgType){
    resetMenu();
    if(bgType === "color"){
        setColorIsActive(true);
    let BgTypeString ="backgroundColor";
    handleBgType(BgTypeString);
    }else if(bgType === "gradient"){
        setGradientIsActive(true);
    let BgTypeString ="backgroundImage";
    handleBgType(BgTypeString);
     }else if(bgType === "texture"){
        setTextureIsActive(true);
    let BgTypeString ="backgroundImage";
    handleBgType(BgTypeString);
    }else if (bgType === "image") {
        setBgImageIsActive(true);
    let BgTypeString ="backgroundImage";
    handleBgType(BgTypeString);
    }
}

function handleSave(){
  let boardBgObj= `${backgroundType} : ${backgroundValue}`;
      handleBoardBackground(boardBgObj);
  } 

function handleBoardBackground(){

}


    return (
        <div className="bg-ed-container">
            <div className="bg-ed-grid">
            
           { (colorIsActive)
            ? <BgColorPicker></BgColorPicker>
            : " "
           }
            { (gradientIsActive)
            ? <BgGradients></BgGradients>
            : " "
           }
            { (textureIsActive)
            ? <BgTextures></BgTextures>
            : " "
           }
            { (bgImageIsActive)
            ? <BgImage></BgImage>
            : " "
           }

            </div>

                <div className="bg-ed-sidebar">
                <button className= {`${colorIsActive ? 'active': " "}`} onClick={() => {handleBgMenu("color")}}>Colour</button>
                <button className={`${gradientIsActive ? 'active': " "}`}  onClick={() => {handleBgMenu("gradient")}}>Gradient</button>
                <button className= {`${textureIsActive ? 'active': " "}`} onClick={() => {handleBgMenu("texture")}}>Texture</button>
                <button  className={`${bgImageIsActive ? 'active': " "}`}  onClick={() => {handleBgMenu("image")}}>Image</button>
                <button  className="save-btn" type="button" onClick={() => {handleSave()}}>Save</button> 
                </div>
               
             
        </div>
    )
}