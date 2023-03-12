import React from 'react'
import Card from 'react-bootstrap/Card';
import { useContext } from "react";
import MyContext from "../context/MyContext";
import Button from 'react-bootstrap/Button';


const Foto = ({ foto }) => {
  const { fotos, setFotos } = useContext(MyContext);

  const setFavorito = (id) => {
    const fotoConClick = fotos.findIndex((f) => f.id === id);
    fotos[fotoConClick].liked = !fotos[fotoConClick].liked;
    setFotos([...fotos])
  }

  return (
      <Card className="text-white">
        <Card.Img variant="top" src={foto.src.medium} className="img-custom" />
        <Card.ImgOverlay>
          <Card.Title>
            <Button id='boton' onClick={() => setFavorito(foto.id)} variant={foto.liked ? "danger" : "succes"}>
              <i class="fa-solid fa-heart"></i>
            </Button>
          </Card.Title>
          <Card.Text>
            {foto.alt}
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
  )
}

export default Foto