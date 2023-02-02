import "./index.css"
import { PhotoSlider } from 'react-photo-view'
import { IonCardContent, IonCardHeader, IonImg, IonCardTitle, IonSlides, IonSlide, IonCardSubtitle, IonCard } from '@ionic/react';
import { useState } from "react";

// https://www.npmjs.com/package/react-photo-view

const Combinado = ({ datos }) => {

    const [visible, setVisible] = useState(false);

    return (<>

        <IonCard color={'medium'}>
            <IonCardContent className="CardPading">
                <h2 id="titulo">{'ionicZoom y react-photo-view'}</h2>
            </IonCardContent>
        </IonCard>

        <IonCard color="light">

            <IonSlides>
                <IonSlide>
                    <IonImg alt="Silhouette of mountains" onClick={() => setVisible(true)} src={datos.cardimagen} />
                </IonSlide>
            </IonSlides>

            <IonCardHeader>
                <IonCardTitle id='ioncardtitle'>{datos.cardTitle}</IonCardTitle>
                <IonCardSubtitle id='ioncardsubtitle'>{datos.cardSubtitle}</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
                <a href={datos.link}>Visitar Sitio</a>
            </IonCardContent>
        </IonCard>

        <PhotoSlider toolbarRender={({ rotate, onRotate }) => {
            return <img src='/assets/images/girar.svg' style={{ height: '45px' }} className="PhotoView-Slider__toolbarIcon" onClick={() => onRotate(rotate + 90)} />
        }}
            images={datos.imagenes.map((item) => ({ src: item, key: item }))}
            visible={visible}
            onClose={() => setVisible(false)}
        />
    </>
    );
}

export default Combinado;
