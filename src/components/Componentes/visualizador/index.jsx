import React from 'react';
// import { RViewer, RViewerTrigger } from 'react-viewerjs'
import './index.css'

// 1- tampoco tiene compatibilidad con react 18 https://www.youtube.com/watch?v=uhgQFqr9ezQ&t=79s
// 2- No anda por compatibilidad con versiones de riact, el proyecto es de hace 5 años
// Documentacion: https://www.npmjs.com/package/react-viewerjs
// npm: npm i react-viewerjs
// Video: https://www.youtube.com/watch?v=OtZ4txuuJvE

const Visualizador = () => {

    let imagenes = [
        "./assets/images/IMG1.jpg",
        "./assets/images/IMG2.jpg",
        "./assets/images/IMG3.jpg"
    ]

    let sourceUrl = "./assets/images/IMG1.jpg"
    let options={
      toolbar: {//Since there is only one picture, let's hide "prev" and "next"
        prev: false,
        next: false
      }
    }
    return (
      <h1>No anda con esta version de react</h1>
      // <RViewer options={options} imageUrls={sourceUrl}>
      //   <RViewerTrigger>
      //     <button>one image preview</button>
      //   </RViewerTrigger>
      // </RViewer>
    )
}

export default Visualizador;

