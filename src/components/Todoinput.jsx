import { useState } from "react";
export default function Todoinput(props) {
  const { handleaddtodo } = props;
  const [inputvalue, setinputvalue] = useState("");
  // we needed tocreae an inputvalue useState so that we can store the value for the input and update it as the input changes and updates
  console.log(inputvalue);
  return (
    <div className="input-container">
      <input
        // the value here is used to make sure the inputfield matches the inputvalue
        value={inputvalue}
        onChange={(e) => {
          setinputvalue(e.target.value);
        }}
        /* the onchange is used to update the inputvalue whenever the input chages
        e.target.value => contains the current value of inputfield , which is used to update it by calling it inside the setinputvalue
        */
        placeholder="ADD YOUR TODO HERE"
      />
      {/* button click require to put in {} and also need arroe function to use js */}
      <button
        onClick={() => {
          if (!inputvalue) {
            return;
          }
          handleaddtodo(inputvalue);
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
