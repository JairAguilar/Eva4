import React, { useEffect, useSate} from "react";
import { FenderJazzBass, FoderaEmperorJ4, SpectorL5Stand } from './img/imagen';

const Perfilantecedentes = () => {
  return (
      <>
         <table class="table caption-top">
  <caption>Lista de Guitarras</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Tipo</th>
      <th scope="col">Precio $ </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Fender Jazz Bass</td>
      <td>4 Cuerdas</td>
      <td>$2.299.990 - $4.199.990</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Fodera Emperor</td>
      <td>4 Cuerdas</td>
      <td>$5.999.990</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Spector Legend 5 </td>
      <td>5 Cuerdas</td>
      <td>$700.000 - $400.740</td>
    </tr>
  </tbody>
</table>
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={FenderJazzBass} class="d-block w-100" alt="Fender tratocaster"/>
    </div>
    <div class="carousel-item">
      <img src={FoderaEmperorJ4} class="d-block w-100" alt="Gibson Les Paul"/>
    </div>
    <div class="carousel-item">
      <img src={SpectorL5Stand} class="d-block w-100" alt="Ibanez GRX20"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Anterior</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Siguiente</span>
  </button>
</div>
      </>
    
  )
}

export default Perfilantecedentes;