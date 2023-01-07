import { IonSlides, IonSlide } from '@ionic/react';
import { IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCard } from '@ionic/react';

const IonicZoom = () => {
    return (
        <div>
            <IonCard color={'medium'}>
                <IonCardContent className="CardPading">
                    <h2 id="titulo">Costo de Energia</h2>
                </IonCardContent>
            </IonCard>

            <IonCard color="light">
                {/* <IonImg alt="Silhouette of mountains" src={'/assets/images/edet/CostoEnergia.png'} /> */}
                
                <IonSlides options={{ zoom: true,  }}>
                <IonSlide>
                    <div className='swiper-zoom-container'>
                        <img src={'/assets/images/edet/factura.jpeg'}></img>
                    </div>
                </IonSlide>
                </IonSlides>

                <IonCardHeader>
                    <IonCardTitle id='ioncardtitle'>{'Costo de Energia'}</IonCardTitle>
                    <IonCardSubtitle id='ioncardsubtitle'>{'Conocé por qué Tucumán tiene una de las tarifas de energía más competitivas del país'}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                    <a href="https://www.edetsa.com/info/pwa/blog/GetAlert/76-variaci%C3%B3n-del-costo-de-la-energ%C3%ADa-el%C3%A9ctrica-en-tucum%C3%A1n">Visitar Sitio</a>
                </IonCardContent>
            </IonCard>


        </div>
    );
}

export default IonicZoom;
