import React, { useEffect, useSate} from "react";
import './cssinicio/estilo.css'
import { guitarra, imagenhero, ukulele, cuerdas, gracias1, bajos } from './img/imagen';
import { Link } from "react-router-dom";
const InicioPag = () => {
  return (
    <> 
    
    <div className="hero">
      <div className="textoshero">
        <h1>Bienvenidos</h1>
        <p>Casa de los instrumentos de cuerdas</p>
        <ul className="navbar navbar">
          <li className="nav-item">
          <Link to="/contacto" className="btn btn-primary">Contacto y comentarios</Link>
          </li>
        </ul>
      </div>
      <div className="svg-ola2" style={{ height: "150px", overflow: "hidden" }}>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}>
          <path d="M-44.80,-25.10 C75.39,234.72 347.96,-91.03 526.86,60.53 L529.12,178.62 L-56.66,179.61 Z" style={{ stroke: "none", fill: "white" }}></path>
        </svg>
      </div>
    </div>
    <section className="olacontenedor web">
      
      <img src={cuerdas} alt="Instrumentos de cuerdas" />
      <div className="contenedor-textos1">
        <h2 className="titulo left">Los instrumentos de cuerdas</h2>
        <p className="parrafo">Los instrumentos de cuerda son aquellos que producen sonido por la vibración de una serie de cuerdas a partir de la acción humana aplicada con los dedos, con el puño o con elementos accesorios de diferente tipo.</p>
        <p className="parrafo">De cuerda frotada. Son aquellos que realizan la vibración al ser frotados con un arco dispuesto por una varilla flexible y algo curva. De cuerda percutida. Son aquellos en los que las cuerdas deben ser golpeadas para sonar: el piano es el más conocido de estos. Los instrumentos pulsados. Son aquellos en los que el contacto es directo con la cuerda y la vibración se produce al pulsarla con la tensión que se decide.</p>
        <p className="parrafo">En el caso de los instrumentos frotados y los pulsados, se establece una diferenciación adicional respecto de si tienen o no trastes, es decir, aquellos que cuentan con una separación demarcada en el diapasón para separar notas musicales de forma escalonada y los que no cuentan con esa demarcación, en estos últimos las notas se suceden en forma de "rampa".</p>
      </div>
    </section>
    <section className="info">
      <div className="contenedor">
        <h2 className="titulo left">Inicio</h2>
        <p className="parrafo">Dicho ya la pequeña introducción sobre los instrumentos de cuerdas, aquí podrás encontrar información, clara para que puedas aprender de una forma sencilla sobre estas. Además de saber sobre las notas, sus afinaciones con sus respectivos accesorios y de cómo usarlos.</p>
        <p className="parrafo">En los siguientes cartas podras encontrar las marcas de los instrumentos y su valor (los valores puedn variar)</p>
        <p className="parrafo">Esta página está en evolución se irá agregando información con el paso del tiempo entrado a fondo sobre todas las cuerdas existentes.</p>
      </div>
    </section>
    <section className="cards contenedor">
      <h2 className="titulo">Servicios</h2>
      <div className="contcards">
        <div className="card" style={{ width: "18rem" }}>
          
          <img src={ukulele} className="card-img-top" alt="Ukulele" />
          <div className="card-body">
            <h5 className="card-title">Ukulele</h5>
            <p className="card-text">Instrumento musical de cuerda pulsada, normalmente de 4 cuerdas que pueden ser dobles y que se asemeja en su forma a la guitarra aunque es de bastante menor tamaño.</p>
            <Link to="" className="btn btn-primary">Saber más</Link>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          
          <img src={guitarra} className="card-img-top" alt="Guitarra" />
          <div className="card-body">
            <h5 className="card-title">Guitarra</h5>
            <p className="card-text">Instrumento musical de cuerda pulsada, compuesto de una caja de madera, un mástil sobre el que va adosado el diapasón o trastero generalmente con un agujero acústico en el centro de la tapa (boca).</p>
            <Link to="/perfil" className="btn btn-primary">Saber más</Link>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          
          <img src={bajos} className="card-img-top" alt="Bajo" />
          <div className="card-body">
            <h5 className="card-title">Bajo</h5>
            <p className="card-text">Similar en apariencia y construcción a la guitarra eléctrica, pero con un cuerpo de mayores dimensiones, un mástil de mayor longitud y escala con un sonido más grave.</p>
            <Link to="/perfil/antecedentes" className="btn btn-primary">Saber más</Link>
          </div>
        </div>
      </div>
    </section>
    <section className="galeria contenedor">
      <div className="contenedor">
        <h2 className="titulo">Galería</h2>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              
              <img src={ukulele} className="d-block w-100" alt="Ukulele" />
            </div>
            <div className="carousel-item">
              
              <img src={guitarra} className="d-block w-100" alt="Guitarra" />
            </div>
            <div className="carousel-item">
              
              <img src={bajos} className="d-block w-100" alt="Bajo" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
    <section className="info-last">
      <div className="contenedor last-section">
        <div className="contenedor-textos1">
          <h2 className="titulo left">Final</h2>
          <p className="parrafo">Gracias por haber llegado hasta el final, envíanos tus comentarios para poder seguir creciendo y expandiéndonos con tus comentarios. Al enviar el comentario ayudas a que crezca esta familia.</p>
        </div>
        
        <img src={gracias1} alt="Gracias" />
      </div>
      <div className="svg-ola2" style={{ height: "150px", overflow: "hidden" }}>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}>
          <path d="M-44.80,-25.10 C75.39,234.72 347.96,-91.03 526.86,60.53 L529.12,178.62 L-56.66,179.61 Z" style={{ stroke: "none", fill: "rgb(105, 68, 13" }}></path>
        </svg>
      </div>
    </section>
  </>
  )
}

export default InicioPag;