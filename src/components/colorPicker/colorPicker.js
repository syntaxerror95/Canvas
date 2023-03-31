import { useState, useEffect } from "react";
import { HexColorPicker } from "react-colorful";
import "./colorPicker.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = [
  { value: "#ffffff", label: "White" },
  { value: "#808080", label: "Gray" },
  { value: "#ff0000", label: "Red" },
  { value: "#00ff00", label: "Green" },
  { value: "#0000ff", label: "Blue" },
  { value: "#ff00ff", label: "Purple" },
];

function Colorpicker({ color, setColor }) {
  const [reset, setReset] = useState(false);

  function handleSelect(e) {
    setColor(e.value);
  }

  function handleColorPickerChange(e) {
    setColor(e);

    // On Update using ColorPicker, reset Dropdown.
    if (!reset) {
      setReset("Select Color");
    }
  }

  useEffect(() => {
    if (reset) {
      setReset(false);
    }
  }, [color]);

  return (
    <div className="colorPicker-wrapper">
      <HexColorPicker color={color} onChange={handleColorPickerChange} />
      <div className="colorPicker-dropdown">
        {reset ? (
          <Dropdown
            options={options}
            onChange={handleSelect}
            placeholder="Select Color"
            value={reset}
          />
        ) : (
          <Dropdown
            options={options}
            onChange={handleSelect}
            placeholder="Select Color"
          />
        )}
      </div>
    </div>
  );
}

export default Colorpicker;
