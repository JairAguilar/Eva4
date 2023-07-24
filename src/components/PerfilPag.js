import React, { useEffect, useSate} from "react";
import {FStratocaster, GibJ45Stand, GibLPStand, IbGRX20, } from './img/imagen';

const PerfilPag = () => {
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
      <td>Fender Stratocaster</td>
      <td>Electrica</td>
      <td>$1.209.990 - $3.099.990</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Gibson Les Paul Standard</td>
      <td>Electrica</td>
      <td>$2.790.000 - $3.000.000</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Ibanez GRX20</td>
      <td>Electrica</td>
      <td>$132.000 - $140.740</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Gibson J45 Standard</td>
      <td>Acustico</td>
      <td>$2.400.000 - $2.530.500</td>
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
      <img src={FStratocaster} class="d-block w-100" alt="Fender tratocaster"/>
    </div>
    <div class="carousel-item">
      <img src={GibLPStand} class="d-block w-100" alt="Gibson Les Paul"/>
    </div>
    <div class="carousel-item">
      <img src={IbGRX20} class="d-block w-100" alt="Ibanez GRX20"/>
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

export default PerfilPag;