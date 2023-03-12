import "../assets/css/galeria.css";
import MyContext from "../context/MyContext";
import Foto from "./Foto";
import React from 'react'
import { useContext } from "react";

const Galeria = ({ fav = false }) => {
  const { fotos } = useContext(MyContext);
  return (
    <div className="galeria grid-columns-5 p-3">
      {
        fotos.filter((f) => {
          if (fav) {
            return f.liked ? f : null;
          } else {
            return f;
          }
        }).map((f) => {
          return <Foto key={f.id} foto={f}></Foto>
        })
      }


    </div>
  );
}

export default Galeria
