import { IonSlides, IonSlide } from '@ionic/react';
import { IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCard } from '@ionic/react';

const IonicZoom = () => {
    return (
        <div>
            <IonCard color={'medium'}>
                <IonCardContent className="CardPading">
                    <h2 id="titulo">IonicZoom</h2>
                </IonCardContent>
            </IonCard>

            <IonCard color="light">
                {/* <IonImg alt="Silhouette of mountains" src={'/assets/images/edet/CostoEnergia.png'} /> */}
                
                <IonSlides options={{ zoom: true,  }}>
                <IonSlide>
                    <div className='swiper-zoom-container'>
                        <img src={'/assets/images/edet/factura.jpg'}></img>
                    </div>
                </IonSlide>
                </IonSlides>

                <IonCardHeader>
                    <IonCardTitle id='ioncardtitle'>{'Costo de Energia'}</IonCardTitle>
                    <IonCardSubtitle id='ioncardsubtitle'>{'Conocé por qué Tucumán tiene una de las tarifas de energía más competitivas del país'}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                    <a href="https://scontent.ftuc4-1.fna.fbcdn.net/v/t1.6435-9/186261438_315067786655255_5530413853663955239_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ek1oq7Ui0egAX8RY9li&_nc_ht=scontent.ftuc4-1.fna&oh=00_AfBGXpSDjVtqlfRu2S_TrcsKu7RgHafhEdlDCPpLHdI4HA&oe=640258AF">Visitar Sitio</a>
                </IonCardContent>
            </IonCard>


        </div>
    );
}

export default IonicZoom;
