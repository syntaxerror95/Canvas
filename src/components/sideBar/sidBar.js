import Input from "../input/input";
import Colorpicker from "../colorPicker/colorPicker";
import "./sideBar.css";
function SideBar({ setNumber, color, setColor, showSideBar, setShowSideBar }) {
  return (
    <>
      <div className={showSideBar ? "sideBar" : "sideBar-close"}>
        <Input setNumber={setNumber} />
        <hr />
        <Colorpicker color={color} setColor={setColor} />
      </div>
      <div className={showSideBar ? "sideBar-btn--close" : "sideBar-btn--open"}>
        <button type="button" onClick={() => setShowSideBar((prev) => !prev)}>
          {showSideBar ? <>&gt;</> : <span>options</span>}
        </button>
      </div>
    </>
  );
}

export default SideBar;
