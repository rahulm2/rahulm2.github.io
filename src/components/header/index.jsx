import React, { useCallback, useState, useEffect } from "react";
import { changeTheme } from "../../utils";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [switchTheme, setSwitchTheme] = useState(false);

  const handleNavMenuState = useCallback(() => {
    setToggle((toggle) => !toggle);
  }, []);

  const handleSwitchTheme = useCallback(() => {
    setSwitchTheme((switchTheme) => !switchTheme);
  }, []);

  useEffect(() => {
    changeTheme(switchTheme);
    return () => {};
  }, [switchTheme]);

  return (
    <header>
      <button
        className="btn"
        style={{ border: "none" }}
        onClick={() => handleSwitchTheme()}
      >
        Switch Theme
      </button>
      <button
        className="nav-toggle"
        style={toggle ? { position: "fixed" } : null}
        onClick={handleNavMenuState}
      >
        <span className={toggle ? "nav-open hamburger" : "hamburger"}></span>
      </button>
      <nav
        className="nav"
        style={toggle ? { transform: "translateX(0)" } : null}
      >
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link" onClick={handleNavMenuState}>
              Home
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#services"
              className="nav__link"
              onClick={handleNavMenuState}
            >
              Services
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link" onClick={handleNavMenuState}>
              About Me
            </a>
          </li>
          <li className="nav__item">
            <a href="#work" className="nav__link" onClick={handleNavMenuState}>
              Work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
