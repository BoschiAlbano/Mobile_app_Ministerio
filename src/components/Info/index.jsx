import './index.css';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import { useLocalStorage } from '../../hook/localStorage';



const Info = () => {


  const [store, setValue] = useLocalStorage('Datos', [])

  return (
    <>
      <IonPage className="home">

        <IonHeader>
          <IonToolbar color={'medium'} >
            <IonTitle id="iontitle" color={'dark'}>App Ministerio</IonTitle>
            <IonButtons slot="start">
              <IonMenuButton color={'dark'} id="ionbtnmenu" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent>

          <IonCard color="light">
            <IonCardHeader>
              <IonCardTitle id='ioncardtitle'>Acerca de la App</IonCardTitle>
            </IonCardHeader>

            <IonCardContent id='ioncardcontent'>
              <ul>
                <li>✓ Aplicacion Desarrollada por el Ministerio de Obras y Servicios Publicos</li>
              </ul>
            </IonCardContent>
          </IonCard>


          <IonCard color="light">
            <IonCardHeader>
              <IonCardTitle id='ioncardtitle'>Usuario</IonCardTitle>
            </IonCardHeader>

            <IonCardContent id='ioncardcontent'>
              <ul>
                <li>✓ {`Nombre: ${store.Usuario.Nombre} ${store.Usuario.Apellido}`} </li>
                <li>✓ {`DNI: ${store.Usuario.Dni}`} </li>
                <li>✓ {`Token: ${store.Token}`} </li>
              </ul>
            </IonCardContent>
          </IonCard>

        </IonContent>
      </IonPage>
    </>
  )
}

export default Info;