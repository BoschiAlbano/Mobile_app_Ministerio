import React from 'react';
import { IonSlides, IonSlide } from '@ionic/react';

const IonicZoom = () => {
    return (
        <div>
            <IonSlides options={ { zoom: true}}>
                <IonSlide>
                    <div className='swiper-zoom-container'>
                        <img src='./assets/images/IMG1.jpg'></img>
                    </div>
                </IonSlide>
            </IonSlides>
        </div>
    );
}

export default IonicZoom;
