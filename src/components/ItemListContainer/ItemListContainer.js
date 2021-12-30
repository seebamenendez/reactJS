//import {useState, useEffect} from 'react';
import React from 'react';

function ItemListContainer () {

const prendas = [
    { nombre: "Campera Origen", precio: 2500, coleccion: "Lucida", stock: 6},
    { nombre: "Vestido NATIVO", precio: 2400, coleccion: "Lucida", stock: 2},
    { nombre: "Camisa OVER", precio: 1990, coleccion: "Lucida", stock: 5},
    { nombre: "Sobrecamisa GALOPE", precio: 2100, coleccion: "Lucida", stock: 4}   
]

const traerPrendas = new Promise((resuelto, rechazado) => {
    setTimeout(() => {
        resuelto(prendas);
      }, 3000);
    });
  
    traerPrendas
      .then((result) => result)
      .then((data) => console.log(data))
      .catch((err) => err);
  
    return (
      <div>
        <h1>Bienvenidos a Arauca</h1>
        <h2>Comienza a comprar!</h2>
      </div>
    );
    



}

export default ItemListContainer
