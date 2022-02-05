import React from "react";
import './Main.css';
import Left from "./Sections/Section-left/Left";
import Rigth from "./Sections/Section-rigth/Rigth";
import FotosHome1 from '../../assets/img/main.png';
import FotosHome2 from '../../assets/img/somos.png';
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
      <main className="main">
        <Left foto = {FotosHome1}></Left>
        <Rigth foto ={FotosHome2}></Rigth>
      </main>
    </>
  );
};
