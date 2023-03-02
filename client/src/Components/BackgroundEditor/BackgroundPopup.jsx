import { useState } from 'react';
import BackgroundEditor from './BackgroundEditor';
import "./bgPopup.css";

export default function BackgroundPopup ({
  trigger, 
  setTrigger, 
  children, 
  }) {

    let [backgroundType, setBackgroundType] = useState();
    let [backgroundValue, setBackgroundValue] = useState();

   

  return (trigger) ? (
    <div className='bg-popup'>
      <div className='bg-popup-inner'>
        <h1 className='bg-popup-h'>Choose Background</h1>
        <button className='close-btn'onClick={()=> setTrigger(false)}>x</button>
        {children}
        <BackgroundEditor>
       
           </BackgroundEditor>
      </div>
     
    </div>
  ) : "";
}
