import "./input.css";
import { useState } from "react";

function Input({ setNumber }) {
  const [numberInp, setNumberInp] = useState(14);
  return (
    <div className="input-wrapper">
      <div className="input">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setNumber(numberInp);
          }}
        >
          <label className="numberLbl">Number : </label>
          <input
            className="numberInp"
            type="number"
            min="10"
            max="99"
            value={numberInp}
            onChange={(e) => setNumberInp(e.target.value)}
          />
          <button classname="numberSubmitBtn" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Input;
