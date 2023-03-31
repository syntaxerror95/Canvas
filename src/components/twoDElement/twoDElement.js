import { useState } from "react";
import "./twoDElement.css";

function TwoDElement({number}) {
  const [styles, setStyles] = useState({});
  const [wrapperStyles, setWrapperStyles] = useState({});

  console.log("styles", styles);
  console.log("wrapperStyles", wrapperStyles);
  return (
    <div
      style={wrapperStyles}
      className="dynamic2DNumber-wrapper"
      onMouseOver={(event) => {
        setStyles({...styles, fontSize:"40px"})
        setWrapperStyles({ ...wrapperStyles, height: "40px", width: "100px" });
      }}
      onMouseOut={() => {setWrapperStyles({}); setStyles({})}} 
    >
      <span className="dynamic2DNumber" style={styles}>
      {number}
      </span>
    </div>
  );
}

export default TwoDElement;
