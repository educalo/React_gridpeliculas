import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Añade este componente a div principal de public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

//esto es react, no es html es jsx
//lo ideal es utilizar un compoenente reutilizable

/*
const contenido = (
  <div>
    <h1>Titulo</h1>
    <div>Hola desde React</div>
  </div>

);
*/

//con contenido directamente metido en el render
//root.render(contenido);
//lo podia haber hecho asi tambien
//ReactDOM.render(<div>hola desde react</div>, document.getElementById("root"));


//componente que devuelve contenido jsx
//puedo haber puesto directamente el codigo jsx depues del return
//componente que nosotros creamos deben empezar por mayusculas
//function Componente(){
//  return contenido
//}

//llamada a un componente sin atributos
//root.render(<Componente/>)

function Componente(props){
  //me debe aparece un objeto con las propiedades pasadas
  console.log(props);
  //puedo añadir expresiones de la siguiente manera
  const titulo = props.titulo;
  const contenido = props.contenido;
  return (
    <div>
      <h1>{titulo}</h1>
      <div>{contenido}</div>
    </div>
  )
}

//al componente se le puede pasar atributos y se pasa al componente a traves de las props (propiedades)
root.render(<Componente titulo="Titulo" contenido="Hola desde React" />)




