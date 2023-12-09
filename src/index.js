import React from 'react';
import ReactDOM from 'react-dom';
//estilos globales
import './index.css';
//importo el modulo App dentro del fichero App.jsx
import {App} from "./App";

//Añade este componente a div principal de public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

//hago referencia al nuevo componente llamado App del fichero App.jsx
root.render(<App />);




