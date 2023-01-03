import './index.css';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Info = () => {

    return(
        <IonPage>

<IonHeader>
          <IonToolbar color={'medium'} >
            <IonTitle id="iontitle" color={'dark'}>App Ministerio</IonTitle>
            <IonButtons slot="start">
              <IonMenuButton color={'dark'} id="ionbtnmenu" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>

            <IonContent className="ion-padding">
                <div className='algo'>
                    <h1>Info</h1>
                </div>
            </IonContent>
            
      </IonPage>
        
    )
}

export default Info;