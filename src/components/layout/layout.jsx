import './layout.css'
import { IonContent, IonImg, IonPage } from "@ionic/react";
import { Link } from 'react-router-dom';
import { arrowBackCircleSharp } from 'ionicons/icons'
const Layout = ({ children, ruta }) => {
    return (
        <IonPage>
            <IonContent>
                <div className='contenedor'>

                    <div className='divide'>
                        <div className='back'>
                                    <img src={arrowBackCircleSharp} alt="Back" />
                                    <Link to={`/${ruta}`}>{ruta}</Link>
                                </div>

                                <IonImg src="/assets/images/PanelSolar.png" />

                        <div className='contenedorCampos'>
                            {children}
                        </div>


                    </div>

                </div>
            </IonContent>
        </IonPage>
    );
}

export default Layout;
