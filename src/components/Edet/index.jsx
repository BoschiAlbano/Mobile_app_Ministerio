import './index.css'
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import Banner from '../Componentes/banner';
import Tarjeta from '../Componentes/tarjeta';
import Zoom from '../Componentes/zoom';
import Visualizador from '../Componentes/visualizador';
import IonicZoom from '../Componentes/IonicZoom';

const Edet = () => {

    return(
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
        
          <Tarjeta/>
          <Banner/>
          <Zoom/>
          {/* <Visualizador/> */}
          <IonicZoom></IonicZoom>
        </IonContent>
    </IonPage>
    </>
        
    )
}

export default Edet;