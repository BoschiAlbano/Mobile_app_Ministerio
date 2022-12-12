import React from "react";
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
//import { useParams } from 'react-router';
//import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Carrusel from "../../components/home/carrusel";
import Acordeon from "../../components/home/acordeon";
import Obras from "../../components/home/obras";
import RedesSociales from "../../components/home/redesSociales";

interface props {
  nombre: string
}

const pagina: React.FC<props> = function Page({nombre}){

  return (
    <>
      {/* <Menu/> */}
      <IonPage>

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