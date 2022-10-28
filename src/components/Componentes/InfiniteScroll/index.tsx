import { IonButton, IonButtons, IonContent, IonHeader, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from "@ionic/react";
import { useState } from "react";

const Componente: React.FC = () => {


    const [data, setData] = useState<string[]>([]);
    const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);
    
    const pushData = () => {
        const max = data.length + 20;
        const min = max - 20;
        const newData = [];
        for (let i = min; i < max; i++) {
        newData.push('Item' + i);
        }
        
        setData([
        ...data,
        ...newData
        ]);
    }
    const loadData = (ev: any) => {
        setTimeout(() => {
        pushData();
        console.log('Loaded data');
        ev.target.complete();
        if (data.length === 1000) {
            setInfiniteDisabled(true);
        }
        }, 500);
    }  
    
    useIonViewWillEnter(() => {
        pushData();
    });

    return (
        <IonPage>
          <IonHeader>
            <IonToolbar>
                <IonTitle>Prueba de compontes de ionic</IonTitle>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
            <IonHeader collapse="condense">
              <IonToolbar>
                <IonTitle size="large">Blank</IonTitle>
              </IonToolbar>
            </IonHeader>
            
            <IonButton onClick={() => setInfiniteDisabled(!isInfiniteDisabled)} expand="block">
              Toggle Infinite Scroll
            </IonButton>
            
            <IonList>
              {data.map((item, index) => {
                return (
                  <IonItem key={index}>
                    <IonLabel>{item}</IonLabel>
                  </IonItem>
                )
              })}
            </IonList>
            
            <IonInfiniteScroll
              onIonInfinite={loadData}
              threshold="100px"
              disabled={isInfiniteDisabled}
            >
              <IonInfiniteScrollContent
                loadingSpinner="bubbles"
                loadingText="Loading more data..."
              ></IonInfiniteScrollContent>
            </IonInfiniteScroll>
          </IonContent>
        </IonPage>
      );
}

export default Componente;