import React from 'react';
import PhotoEditor from './PhotoEditor';
import "./popup.css";

export default function Popup(props) {
  return ( props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
        <button className='close-btn'onClick={()=> props.setTrigger(false)}>x</button>
        {props.children}
        <PhotoEditor></PhotoEditor>
      </div>
    </div>
  ) : "";
}
