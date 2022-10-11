import React, { useEffect, useState } from "react";
import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonMenuButton, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
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
          <IonToolbar color="secondary">
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
            //<IonImg src="https://www.comunicaciontucuman.gob.ar/assets/documents/logo-gobierno-tucuman-horizontal.png"/>
            // <IonCard>
            //   <IonCardContent>
            //     <IonItem>
                  
            //     </IonItem>
            //   </IonCardContent>
            // </IonCard>

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://www.comunicaciontucuman.gob.ar/assets/documents/logo-gobierno-tucuman-horizontal.png" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src="https://www.comunicaciontucuman.gob.ar/assets/documents/logo-gobierno-tucuman-horizontal.png" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src="https://www.comunicaciontucuman.gob.ar/assets/documents/logo-gobierno-tucuman-horizontal.png" className="d-block w-100" alt="..."/>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

          }
          
        </IonContent>
    </IonPage>
    </>
    
  );
}


export default pagina