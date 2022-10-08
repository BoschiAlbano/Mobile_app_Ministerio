import React from "react";
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
//import { useParams } from 'react-router';
//import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Menu from '../components/Menu'
interface props {
  nombre: string
}
const pagina: React.FC<props> = function Page({nombre}){

  return (
    <>
      <Menu/>
      <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home {nombre}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div>
            <h1>ESTA ES LA PAGINA DE HOME</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quae aperiam ipsam cupiditate magnam quis sint nostrum cumque, doloremque magni iure rem reprehenderit amet, itaque nam culpa laborum, optio excepturi.</p>
        </div>
      </IonContent>
    </IonPage>
    </>
    
  );
}


export default pagina