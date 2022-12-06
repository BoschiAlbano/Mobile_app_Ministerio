import React from "react";
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
//import { useParams } from 'react-router';
//import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { useHistory } from "react-router";
import Carrusel from "../../components/home/carrusel";
import Acordeon from "../../components/home/acordeon";
import Obras from "../../components/home/obras";
import RedesSociales from "../../components/home/redesSociales";

interface props {
  nombre: string
}

const pagina: React.FC<props> = function Page({nombre}){
  const History = useHistory();

  return (
    <>
      {/* <Menu/> */}
      <IonPage>

        <IonHeader>
          <IonToolbar color="secondary" >
          
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Home</IonTitle>
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