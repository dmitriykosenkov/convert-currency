import { FC } from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar: FC = () => {
  const activeClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? s.active : s.btn;
  return (
    <nav className={s.navbarContainer}>
      <NavLink to="/" className={activeClass}>
        Обмен валют
      </NavLink>
      <NavLink to="/converter" className={activeClass}>
        Курс валют
      </NavLink>
    </nav>
  );
};

export default Navbar;
