import React from 'react';
import {IonCard, IonCardContent, IonImg} from '@ionic/react';

//import { logoFacebook, logoInstagram, logoWhatsapp } from "ionicons/icons";

const RedesSociales = ({}) => {

    const abrirWhatsApp = () => {
        const mensaje = "Mensaje de prueba al wp del ministerio";
        const numero = "3816206925";
        const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_system');
    }

    const abrirFace = () => {
        const url = `https://es-es.facebook.com/enteusuariostucuman`;
        window.open(url, '_system');
    }

    const abririnsta = () => {
        const url = `https://www.instagram.com/fabiansoriaok/?hl=es`;
        window.open(url, '_system');
    }

    return (
        <IonCard>
            <IonCardContent className="CardPading">
              <div className="listonFooter">

                <button className="redes" >
                    <IonImg className="imgRedes" onClick={() => abririnsta()} src="assets/images/instagram.png" alt="Instagram del Ministerio de obras y Servicios Publicos" />
                </button>

                <button className="redes" >
                    <IonImg className="imgRedes"  onClick={() => abrirFace()} src="assets/images/facebook.png" alt="Facebook del Ministerio de obras y Servicios Publicos" />
                </button>

                <button className="redes" >
                    <IonImg className="imgRedes" onClick={() => abrirWhatsApp()} src="assets/images/whatsapp.png" alt="Whatsapp del Ministerio de obras y Servicios Publicos" />
                </button>
                  
              </div>
            </IonCardContent>
        </IonCard>
    );
}

export default RedesSociales;
