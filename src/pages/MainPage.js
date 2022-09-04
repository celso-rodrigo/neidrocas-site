import React, { useContext, useEffect } from "react";
import Context from "../context/Context";
import avatarNeidrocas from "../images/avatarNeidrocas.png";

function MainPage() {
  const { setCurrPage } = useContext(Context);
  useEffect(() => {
    setCurrPage('main')
  }, []);
  return (
    <>
      <img src={avatarNeidrocas} alt="Avatar do Neidrocas" />
      <h1>MURAL CONCURSOS NEIDROCAS</h1>
      <h2>
        Aqui você encontra informações sobre os concursos que já aconteceram e
        também sobre os que estão por vir!
      </h2>
    </>
  );
}

export default MainPage;
