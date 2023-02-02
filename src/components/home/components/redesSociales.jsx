import React from 'react';
import {IonCard, IonCardContent, IonImg} from '@ionic/react';

//import { logoFacebook, logoInstagram, logoWhatsapp } from "ionicons/icons";

const RedesSociales = ({}) => {
    return (
        <IonCard>
            <IonCardContent className="CardPading">
              <div className="listonFooter">

                <a className="redes" href="https://es-la.facebook.com/" >
                    <IonImg className="imgRedes" src="assets/images/instagram.png" alt="Instagram del Ministerio de obras y Servicios Publicos" />
                </a>

                <a className="redes" href="https://es-la.facebook.com/" >
                    <IonImg className="imgRedes" src="assets/images/facebook.png" alt="Facebook del Ministerio de obras y Servicios Publicos" />
                </a>

                <a className="redes" href="https://es-la.facebook.com/" >
                    <IonImg className="imgRedes" src="assets/images/whatsapp.png" alt="Whatsapp del Ministerio de obras y Servicios Publicos" />
                </a>
                  
              </div>
            </IonCardContent>
        </IonCard>
    );
}

export default RedesSociales;
