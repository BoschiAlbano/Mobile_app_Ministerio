import "./index.css"
import { PhotoProvider, PhotoView, PhotoSlider } from 'react-photo-view'
import { IonCardContent, IonCardHeader, IonImg, IonCardTitle, IonCardSubtitle, IonCard } from '@ionic/react';
import { useState } from "react";

// https://www.npmjs.com/package/react-photo-view

const factura = [
  '/assets/images/edet/factura1.png',
  '/assets/images/edet/factura2.png',
  '/assets/images/edet/factura3.png'
]

const React_Photo_view = () => {

  const [visible, setVisible] = useState(false);

  return (<>

    <IonCard color={'medium'}>
      <IonCardContent className="CardPading">
        <h2 id="titulo">¿Como leer mi factura?</h2>
      </IonCardContent>
    </IonCard>

    <IonCard color="light">
      <IonImg alt="Silhouette of mountains" onClick={() => setVisible(true)} src={'/assets/images/edet/factura.jpeg'} />
      
      <IonCardHeader>
        <IonCardTitle id='ioncardtitle'>{'Factura EDET'}</IonCardTitle>
        <IonCardSubtitle id='ioncardsubtitle'>{'Conoce mas visitando la pagina oficial de EDET'}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        <a href="https://www.edetsa.com/gestion/pwa/micuenta/como-leer-mi-factura">Visitar Sitio</a>
      </IonCardContent>
    </IonCard>

    <PhotoSlider toolbarRender={({ rotate, onRotate }) => {
        return <img src='/assets/images/girar.svg' style={{height: '45px'}} className="PhotoView-Slider__toolbarIcon" onClick={() => onRotate(rotate + 90)} />
      }}
      images={factura.map((item) => ({ src: item, key: item }))}
      visible={visible}
      onClose={() => setVisible(false)}
    />
  </>
  );
}

export default React_Photo_view;
