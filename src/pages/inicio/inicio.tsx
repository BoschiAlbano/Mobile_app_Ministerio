import React, { useEffect } from "react";
import {IonContent, IonPage, useIonRouter} from '@ionic/react';
import './inicio.css';

const Inicio: React.FC = () => {

    const navigation = useIonRouter()

    useEffect(() => {
        setTimeout(function(){
            navigation.push('/login', 'forward', 'replace')
        }, 4000);
    },[navigation])

    return(
        <IonPage>
            <IonContent>
                <div className="fondo">
                    <img className="ministerio" src="assets/images/Ministerio.png" alt="Imagen Logo de Inicio de Aplicacion"/>
                </div>
            </IonContent>
      </IonPage>
        
    )
}

export default Inicio;