import React, { useState } from "react";
import { randomIntFromInterval } from "../utils";
import "./AddElement.css";
import Popup from "../Components/Popup.jsx";

const elementTypes = {
  imageUrl: "imageUrl",
  label: "label",
};

const AddElement = (props) => {
  const [elementValue, setElementValue] = useState("");
  const [selectElementType, setSelect] = useState(elementTypes.imageUrl);
  const [buttonPopup, setButtonPopup]= useState (false)


  const handleSelectElemType = (event) => {
    const value = event.target.value;
    setSelect((selectElementType) => value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const positionTop = randomIntFromInterval(0, 75);
    const positionLeft = randomIntFromInterval(0, 75);
    props.addElements(
      elementValue,
      selectElementType,
      positionTop,
      positionLeft
    );
    setElementValue("");
  };

  const handleInput = (event) => {
    const value = event.target.value;
    setElementValue((elementValue) => value);
  };

;

  return (
    <div className="add-element">
      <div className="pop-up">
        <button onClick={()=> setButtonPopup(true)}>Open Editor</button>
            <Popup trigger= {buttonPopup} setTrigger={setButtonPopup}>
            <h3>photo edit pop up</h3>
            </Popup>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="radioButtonAlign">
          <label className="formlabel2">
            <input
              className="radioButton"
              onChange={(event) => handleSelectElemType(event)}
              type="radio"
              checked={selectElementType === elementTypes.imageUrl}
              value={elementTypes.imageUrl}
            ></input>
            Image
          </label>
          <label className="formlabel2">
            <input
              className="radioButton"
              onChange={(event) => handleSelectElemType(event)}
              type="radio"
              checked={selectElementType === elementTypes.label}
              value={elementTypes.label}
            ></input>
            Label
          </label>
        </div>
        <input
          className="inputStyle"
          placeholder="Add element"
          type="text"
          value={elementValue}
          onChange={(event) => handleInput(event)}
        ></input>
        <button className="addButton" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddElement;
