import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../context/Context";
import HamburguerNavbar from "./HamburguerNavbar";

function HeaderNavbar() {
  const { currPage } = useContext(Context);
  return (
    <header className="main-header">
      <ul className="header-links nav-list">
        <li className={currPage === 'main' && 'selected'}>
          <Link to="/">
            <p>Página inicial</p>
          </Link>
        </li>
        <li className={currPage === 'firstContest' && 'selected'}>
          <Link to="/contest/first">
            <p>1° Concurso</p>
          </Link>
        </li>
        <li className={currPage === 'secondContest' && 'selected'}>
          <Link to="/contest/second">
            <p>2° Concurso</p>
          </Link>
        </li>
        <li className={currPage === 'thirdContest' && 'selected'}>
          <Link to="/contest/third">
            <p>3° Concurso</p>
          </Link>
        </li>
        <li className={currPage === 'fourthContest' && 'selected'}>
          <Link to="/contest/fourth">
            <p>4° Concurso</p>
          </Link>
        </li>
      </ul>
      <HamburguerNavbar />
    </header>
  );
}

export default HeaderNavbar;
