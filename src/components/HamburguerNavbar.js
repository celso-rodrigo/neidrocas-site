import React, { useContext } from "react";
import Context from "../context/Context";

function HamburguerNavbar() {
  const { currPage } = useContext(Context);
  const hamburgerClass = currPage !== "main" ? "show" : "hidden";
  return (
    <div className="hamb-nav">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="white"
        className={`bi bi-list ${hamburgerClass}`}
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </div>
  );
}

export default HamburguerNavbar;
