import { useState } from "react";
import "./App.css";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";

// mode app
function App() {
  const [isLit, setLit] = useState(true);
  const changeTheme = () => {
    setLit(!isLit);
    console.log("Theme changed to:", isLit ? "Dark" : "Light");
  };

  return (
    <div className={`main ${isLit ? "light" : "dark"}`}>
      <div className="theme-toggle">
        <label className="toggle-label">
          <input
            onClick={changeTheme}
            className="hidden"
            type="checkbox"
          />
          <span className="icon">
            {isLit ? <GoSun size={30} /> : <FaMoon size={30} />}
          </span>
        </label>
        <p className="status-text">
          {isLit ? "Light Mode" : "Dark Mode"}
        </p>
      </div>
    </div>
  );
}

export default App;
