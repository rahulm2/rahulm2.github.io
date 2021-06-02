import React, { useCallback, useState } from "react";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const handleNavMenuState = useCallback(() => {
    setToggle((toggle) => !toggle);
  }, []);

  return (
    <header>
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
              lassName="nav__link"
              onClick={handleNavMenuState}
            >
              Services
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" lassName="nav__link" onClick={handleNavMenuState}>
              About Me
            </a>
          </li>
          <li className="nav__item">
            <a href="#work" lassName="nav__link" onClick={handleNavMenuState}>
              Work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
