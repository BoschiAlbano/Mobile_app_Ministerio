import React from "react";
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
//import { useParams } from 'react-router';
//import ExploreContainer from '../components/ExploreContainer';
import './index.css';
import Carrusel from "./components/carrusel";
import Acordeon from "./components/acordeon";
import Obras from "./components/obras";
import RedesSociales from "./components/redesSociales";

interface props {
  nombre: string
}

const pagina: React.FC<props> = function Page({nombre}){

  return (
    <>
      {/* <Menu/> */}
      <IonPage className="home">

        <IonHeader>
          <IonToolbar color={'medium'} >
            <IonTitle id="iontitle" color={'dark'}>Home</IonTitle>
            <IonButtons slot="start">
              <IonMenuButton color={'dark'} id="ionbtnmenu" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent>

          {/* Carrusel de imagenes */}
          <Carrusel/>

          {/* Datos de Contacto */}
          <Acordeon/>

          {/* obras */}
          <Obras/>

          {/* Redes Sociales */}          
          <RedesSociales/>
        </IonContent>
    </IonPage>
    </>
    
  );

}


export default pagina