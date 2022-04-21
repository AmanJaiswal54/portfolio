import Introduction from "./components/introduction/Introduction";
import About from "./components/about/About";
import ProductList from "./components/productlist/ProductList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import TimeLine from "./components/timeline/TimeLine";
import { ThemeContext } from "./context";
import { COLOR_WHITE, COLOR_BLACK } from "./constant";
import { useState, useEffect } from "react";
import ReactGA from "react-ga";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const changeMode = () => {
    setDarkMode((prevDarkMode) => {
      return !prevDarkMode;
    });
  };

  useEffect(() => {
    ReactGA.initialize("G-H46F7F3QT8");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div
      className="App"
      style={
        darkMode
          ? { color: COLOR_WHITE, backgroundColor: COLOR_BLACK }
          : { color: COLOR_BLACK, backgroundColor: COLOR_WHITE }
      }
    >
      <ThemeContext.Provider value={darkMode}>
        <Toggle changeModeHandler={changeMode} />
        <Introduction />
        <About />
        <TimeLine />
        <ProductList />
        <Contact />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
