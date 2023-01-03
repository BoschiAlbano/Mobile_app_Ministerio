import './index.css'
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Gasnor = () => {

    return(
        <IonPage>

<IonHeader>
          <IonToolbar color={'medium'} >
            <IonTitle id="iontitle" color={'dark'}>GASNOR</IonTitle>
            <IonButtons slot="start">
              <IonMenuButton color={'dark'} id="ionbtnmenu" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>

            <IonContent className="ion-padding">
                <div>
                    <h1>Gasnor</h1>
                </div>
            </IonContent>
            
      </IonPage>
        
    )
}

export default Gasnor;