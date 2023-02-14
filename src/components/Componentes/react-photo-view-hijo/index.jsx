import "./index.css"
import { PhotoSlider } from 'react-photo-view'
import { IonCardContent, IonCardHeader, IonImg, IonCardTitle, IonCardSubtitle, IonCard } from '@ionic/react';
import { Children, useState } from "react";
import { useIonViewWillLeave } from '@ionic/react';


// https://www.npmjs.com/package/react-photo-view

const Tarjeta_Imagenes_Hijo = ({children, datos}) => {

  const [visible, setVisible] = useState(false);

  useIonViewWillLeave(() => {
    setVisible(false)
  });
  
  return (<>

    <IonCard color={'medium'}>
      <IonCardContent className="CardPading">
        <h2 id="titulo">{datos.titulo}</h2>
      </IonCardContent>
    </IonCard>

    <IonCard color="light">
      <IonImg alt="Silhouette of mountains" onClick={() => setVisible(true)} src={datos.cardimagen} />


      <IonCardContent>
        {children}
      </IonCardContent>
    </IonCard>

    <PhotoSlider toolbarRender={({ rotate, onRotate }) => {
        return <img src='/assets/images/girar.svg' style={{height: '45px'}} className="PhotoView-Slider__toolbarIcon" onClick={() => onRotate(rotate + 90)} />
      }}
      images={datos.imagenes.map((item) => ({ src: item, key: item }))}
      visible={visible}
      onClose={() => setVisible(false)}
    />
  </>
  );
}

export default Tarjeta_Imagenes_Hijo;
