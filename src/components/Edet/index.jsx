import './index.css'
import { IonButtons, IonIcon, IonContent, IonImg, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCard } from '@ionic/react';

import Tarjeta from '../Componentes/tarjeta';
import React_Photo_view from '../Componentes/react-photo-view';
import { PhotoSlider } from 'react-photo-view'

import Banner from '../Componentes/banner';
import Zoom from '../Componentes/zoom';
import Visualizador from '../Componentes/visualizador';
import IonicZoom from '../Componentes/IonicZoom';
import { useState } from 'react';

const Edet = () => {

  return (
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

          {/* <Carrusel/> */}

          <Tarjeta />

          <React_Photo_view />

          <CostoEnergia />

          {/* <Banner/> */}
          {/* <Zoom/> */}
          {/* <Visualizador/> */}
          {/* <IonicZoom/> */}

        </IonContent>
      </IonPage>
    </>

  )
}


const images = [
  '/assets/images/edet/CostoEnergia.png'
]

const CostoEnergia = () => {

  const [visible, setVisible] = useState(false);

  return (
    <>
      <IonCard color={'medium'}>
        <IonCardContent className="CardPading">
          <h2 id="titulo">Costo de Energia</h2>
        </IonCardContent>
      </IonCard>

      <IonCard color="light">
        <IonImg alt="Silhouette of mountains" onClick={() => setVisible(true)} src={'/assets/images/edet/CostoEnergia.png'} />
        <IonCardHeader>
          <IonCardTitle id='ioncardtitle'>{'Costo de Energia'}</IonCardTitle>
          <IonCardSubtitle id='ioncardsubtitle'>{'Conocé por qué Tucumán tiene una de las tarifas de energía más competitivas del país'}</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <a href="https://www.edetsa.com/info/pwa/blog/GetAlert/76-variaci%C3%B3n-del-costo-de-la-energ%C3%ADa-el%C3%A9ctrica-en-tucum%C3%A1n">Visitar Sitio</a>
        </IonCardContent>
      </IonCard>
      <PhotoSlider toolbarRender={({ rotate, onRotate }) => {
        return <img src='/assets/images/girar.svg' style={{height: '45px'}} className="PhotoView-Slider__toolbarIcon" onClick={() => onRotate(rotate + 90)} />
      }}
        images={images.map((item) => ({ src: item, key: item }))}
        visible={visible}
        onClose={() => setVisible(false)}
      />

    </>
  )
}
export default Edet;