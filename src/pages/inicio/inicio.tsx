import React, { useEffect } from "react";
import {IonContent, IonPage, useIonRouter} from '@ionic/react';
import './inicio.css';

const Inicio: React.FC = () => {

    const navigation = useIonRouter()

    useEffect(() => {
        setTimeout(function(){
            navigation.push('/login', 'forward', 'replace')
        }, 4000);
    },[])

    return(
        <IonPage>
            <IonContent>
                <img className="fondo" src="assets/images/Ministerio.png" />
            </IonContent>
      </IonPage>
        
    )
}

export default Inicio;