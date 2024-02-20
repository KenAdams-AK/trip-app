import { Link, NavLink } from "react-router-dom";

import "./Header.scss";

export function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        Logo
      </Link>
      <nav className="header__nav">
        <ul>
          <li>
            <NavLink to="/">Homepage</NavLink>
          </li>
          <li>
            <NavLink to="/login">Log in</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
