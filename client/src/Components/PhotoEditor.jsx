import "./PhotoEditor.css";
import { useState } from "react";
import Slider from "./Slider";

export default function PhotoEditor() {
    let [brightnessIsActive, setBrightnessIsActive] =useState(false);
    let [hueIsActive, setHueIsActive] =useState(false);
    let [saturationIsActive, setSaturationIsActive] =useState(false);
    let [contrastIsActive, setContrastIsActive] =useState(false);

    function resetMenu(){
        setBrightnessIsActive(false);
        setHueIsActive(false);
        setSaturationIsActive(false);
        setContrastIsActive(false);
    }

    function handlePhEdMenu(editType){
        resetMenu();
        if(editType === "brightness"){
            setBrightnessIsActive(true);
        
        
        }else if(editType === "hue"){
            setHueIsActive(true);
      
        
         }else if(editType === "saturation"){
            setSaturationIsActive(true);
    
       
        }else if (editType === "contrast") {
            setContrastIsActive(true);
       
        }
    }
    
    function handlePhEdSave (){

    }

    return (
        <div className="ph-ed-container">
            <div className="main-image"> </div>
                <div className="ph-ed-sidebar">
                <button className= {`${brightnessIsActive ? 'active': " "}`} onClick={() => {handlePhEdMenu("brightness")}}>Brightness</button>
                <button className={`${hueIsActive ? 'active': " "}`}  onClick={() => {handlePhEdMenu("hue")}}>Hue</button>
                <button className= {`${saturationIsActive ? 'active': " "}`} onClick={() => {handlePhEdMenu("saturation")}}>Saturation</button>
                <button  className={`${contrastIsActive ? 'active': " "}`}  onClick={() => {handlePhEdMenu("contrast")}}>Contrast</button>
                <button  className="save-btn" type="button" onClick={() => {handlePhEdSave()}}>Save</button> 
                </div>

                <Slider/>
        </div>
    )
}