import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './index.css'

const Sat = () => {

    return(
        <IonPage>

<IonHeader>
          <IonToolbar color={'medium'} >
            <IonTitle id="iontitle" color={'dark'}>SAT S.A</IonTitle>
            <IonButtons slot="start">
              <IonMenuButton color={'dark'} id="ionbtnmenu" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>

            <IonContent className="ion-padding">
                <div>
                    <h1>SAT</h1>
                </div>
            </IonContent>
            
      </IonPage>
        
    )
}

export default Sat;