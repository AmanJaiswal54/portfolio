import "./Toggle.css";
import sun from "./../../img/sun.png";
import moon from "./../../img/moon.png";
import { ThemeContext } from "../../context";
import { useContext } from "react";

function Toggle(props) {
  const { changeModeHandler } = props;

  const darkMode = useContext(ThemeContext);
  console.log("toggle", darkMode);

  return (
    <div className="toggle">
      <img src={moon} alt="sun" className="toggle-icon" />
      <img src={sun} alt="moon" className="toggle-icon" />
      <div
        className="toggle-button"
        style={darkMode ? { left: "0" } : { right: "0" }}
        onClick={changeModeHandler}
      ></div>
    </div>
  );
}

export default Toggle;
