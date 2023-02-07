import './index.css'
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Tarjeta from '../Componentes/tarjeta';
import Tarjeta_Imagenes from '../Componentes/react-photo-view';
import RedesSociales from '../home/components/redesSociales';

// esto podria ser cargado atravez d e un api igual q las obras.
const LeerFactura = {
  titulo: '¿Como leer mi Factura?',
  cardimagen: '/assets/images/edet/factura.jpg',
  cardTitle: 'Factura EDET',
  cardSubtitle: 'Conoce mas visitando la pagina oficial de EDET',
  link: 'https://www.edetsa.com/gestion/pwa/micuenta/como-leer-mi-factura',
  imagenes: [
    '/assets/images/edet/factura.jpg'
  ]
}
const CostoEnergia = {
  titulo: 'Costo de Energia',
  cardimagen: '/assets/images/edet/CostoEnergia.png',
  cardTitle: 'Costo de Energia',
  cardSubtitle: 'Conocé por qué Tucumán tiene una de las tarifas de energía más competitivas del país',
  link: 'https://www.edetsa.com/info/pwa/blog/GetAlert/76-variaci%C3%B3n-del-costo-de-la-energ%C3%ADa-el%C3%A9ctrica-en-tucum%C3%A1n',
  imagenes: [
    '/assets/images/edet/CostoEnergia.png'
  ]
}

const Edet = () => {

  return (
    <>
      {/* <Menu/> */}
      <IonPage className="home">

        <IonHeader>
          <IonToolbar color={'medium'} >
            <IonTitle id="iontitle" color={'dark'}>EDET</IonTitle>
            <IonButtons slot="start">
              <IonMenuButton color={'dark'} id="ionbtnmenu" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <Tarjeta />
          <Tarjeta_Imagenes datos={LeerFactura}/>
          <Tarjeta_Imagenes datos={CostoEnergia}/>
          <RedesSociales/>
        </IonContent>
      </IonPage>
    </>

  )
}
export default Edet;