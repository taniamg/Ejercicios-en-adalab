import React from "react";

function InputGroupText = (props) => {
  const handleName = (ev) => {
    setName(ev.target.value);
    props.handleChange(ev.target.value);
  };
  return (
    <div className="input-group-text">
      <label className="label-text" htmlFor="name">
        {props.labelText}
      </label>
      <input
        className="input-text"
        type="text"
        name={props.inputName}
        id={props.inputId}
        placeholder={props.inputPlaceHolder}
        value={props.inputValue}
        onChange={handleName}
      />
    </div>
  );
};

export default InputGroupText;
