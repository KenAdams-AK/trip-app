import { Link, NavLink } from "react-router-dom";

import { User } from "@/models/user";

import "./Header.scss";

type HeaderProps = {
  user: User | null;
  handleLogout: () => void;
};

export function Header({ user, handleLogout }: HeaderProps) {
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
          {user ? (
            <li>
              <button type="button" onClick={handleLogout}>
                Log out
              </button>
            </li>
          ) : (
            <li>
              <NavLink to="/login">Log in</NavLink>
            </li>
          )}
          {user && (
            <li>
              <div className="header__user-info user-info">
                <span>{user.name}</span>
                <div className="user-info__image">
                  <img src={user.picture} alt="user name" />
                </div>
              </div>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
