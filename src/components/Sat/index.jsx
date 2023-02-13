import './index.css'
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Tarjeta from '../Componentes/tarjeta';
import RedesSociales from '../home/components/redesSociales';
import Acordeon from './components/acordeon';
import Tarjeta_imagenes from '../Componentes/react-photo-view';

const NoticiasNovedades = {
  titulo: 'Noticias y Novedades',
  cardimagen: '/assets/images/sat/noticias.jpg',
  cardTitle: 'SAT Noticias y Novedades',
  cardSubtitle: 'Publicaciones sobre avances de obras',
  link: 'https://www.aguasdeltucuman.com.ar/noticias_medios.php?s=1',
  imagenes: [
    '/assets/images/sat/noticias.jpg'
  ]
}

const ZonaFria = {
  titulo: 'Mapa de Obras',
  cardimagen: '/assets/images/sat/obraSat.jpg',
  cardTitle: 'Mapa de obras en progreso',
  cardSubtitle: 'La Sociedad Aguas del Tucumán (SAT) desarrolla trabajos de mejoras y mantenimiento de red de agua y cloacas en toda la provincia.',
  link: 'https://www.aguasdeltucuman.com.ar/mapa_obras.php',
  imagenes: [
    '/assets/images/sat/obraSat.jpg'
  ]
}

const Sat = () => {


  return (
    <>
      {/* <Menu/> */}
      <IonPage className="home">

        <IonHeader>
          <IonToolbar color={'medium'} >
            <IonTitle id="iontitle" color={'dark'}>SAT</IonTitle>
            <IonButtons slot="start">
              <IonMenuButton color={'dark'} id="ionbtnmenu" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <Tarjeta imagen={"/assets/images/sat/sat.jpg"} url={"https://www.aguasdeltucuman.com.ar/"} pagina={"https://www.aguasdeltucuman.com.ar/"}/>
          <Acordeon/>
          
          <Tarjeta_imagenes datos={NoticiasNovedades}/>
          <Tarjeta_imagenes datos={ZonaFria}/>
          <RedesSociales/>
        </IonContent>
      </IonPage>
    </>

  )

}

export default Sat;