import React from 'react';
import {IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonContent, IonTitle} from '@ionic/react';
import CrudObras from './CrudObras';

const Administracion = () => {

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar color="secondary">
                    <IonButtons slot="start">
                    <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Kit Electrico</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                
                {/* Crud de Obras */}
                <CrudObras/>
                
            </IonContent>
                
        </IonPage>
    );
}

export default Administracion;
