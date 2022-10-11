import React from "react";
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
const Idea: React.FC = () => {

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar color="secondary">
                    <IonButtons slot="start">
                    <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Idea de Pagina de Kit</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <div>
                    <h1>ESTA ES LA PAGINA DE KIT ELECTRICOS</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quae aperiam ipsam cupiditate magnam quis sint nostrum cumque, doloremque magni iure rem reprehenderit amet, itaque nam culpa laborum, optio excepturi.</p>
                </div>
            </IonContent>
            
      </IonPage>
        
    )
}

export default Idea;
//dar formato a la pagina (cambiar nombre)