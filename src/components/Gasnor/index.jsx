import './index.css'
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Tarjeta from '../Componentes/tarjeta';
import RedesSociales from '../home/components/redesSociales';
import Acordeon from './components/acordeon';
import Tarjeta_Imagenes from '../Componentes/react-photo-view';

const QuinesSomos = {
  titulo: '¿Quienes Somos?',
  cardimagen: '/assets/images/gasnor/mapa.jpg',
  cardTitle: 'Gasnor S.A.',
  cardSubtitle: 'Somos una de las nueve empresas de distribución de gas natural en la República Argentina que surgieron con la privatización de la Empresa Gas del Estado en el año 1992. ',
  link: 'https://www.gasnor.com/pagina/41/quienes-somos',
  imagenes: [
    '/assets/images/gasnor/mapa.jpg'
  ]
}

const ZonaFria = {
  titulo: 'Régimen de Zona Fría',
  cardimagen: '/assets/images/gasnor/zonaFria.jpg',
  cardTitle: 'Zona Fría',
  cardSubtitle: 'Consultá si tu localidad se encuentra alcanzada por el Beneficio de Zona Fría',
  link: 'https://www.enargas.gob.ar/secciones/zona-fria/consulta-localidad.php',
  imagenes: [
    '/assets/images/gasnor/zonaFria.jpg'
  ]
}

const Gasnor = () => {

  return (
    <>
      {/* <Menu/> */}
      <IonPage className="home">

        <IonHeader>
          <IonToolbar color={'medium'} >
            <IonTitle id="iontitle" color={'dark'}>GASNOR S.A.</IonTitle>
            <IonButtons slot="start">
              <IonMenuButton color={'dark'} id="ionbtnmenu" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <Tarjeta imagen={"/assets/images/gasnor/gasnor.jpg"} url={"https://www.gasnor.com/"} pagina={"https://www.gasnor.com/"}/>
          <Acordeon/>
          
          <Tarjeta_Imagenes datos={QuinesSomos}/>
          <Tarjeta_Imagenes datos={ZonaFria}/>
          <RedesSociales/>
        </IonContent>
      </IonPage>
    </>

  )

}

export default Gasnor;