import React, { useEffect, useState } from "react";
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
//import { useParams } from 'react-router';
//import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { personAdd } from "ionicons/icons";
import { useHistory } from "react-router";
interface props {
  nombre: string
}
const pagina: React.FC<props> = function Page({nombre}){
  
  const History = useHistory();

  const _token =  localStorage.getItem('token');

  return (
    <>
      {/* <Menu/> */}
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
          {_token === null ? 
            <div>
              <div className="ion-margin-top">
                <IonButton expand="full" type="button" color="warning" onClick={() => {History.push("/login")}}>
                    <IonIcon icon={personAdd} slot="start"></IonIcon>
                    login
                </IonButton>
              </div> 
            </div>
            :
            <div>
              <h1>ESTA ES LA PAGINA DE HOME</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quae aperiam ipsam cupiditate magnam quis sint nostrum cumque, doloremque magni iure rem reprehenderit amet, itaque nam culpa laborum, optio excepturi.</p>
            </div>
          }
          
        </IonContent>
    </IonPage>
    </>
    
  );
}


export default pagina