import {
    IonIcon,
    IonItem,
    IonLabel,
    IonMenuToggle,
  } from '@ionic/react';
import { homeOutline, home, bulbOutline, bulb } from 'ionicons/icons';
import { useLocation } from 'react-router-dom';

const Select_Items = [
    {
        title: 'Edet',
        url: '/app/Edet',
        iosIcon: '/assets/images/edet.svg',
        mdIcon: '/assets/images/edet.svg'
    },
    {
        title: 'Gasnor',
        url: '/app/Gasnor',
        iosIcon: '/assets/images/gas.svg',
        mdIcon: '/assets/images/gas.svg'
    }
    ,
    {
        title: 'Sat',
        url: '/app/Sat',
        iosIcon: '/assets/images/sat.svg',
        mdIcon: '/assets/images/sat.svg'
    }
];

const Select = () => {

  const location = useLocation()


    return (
        <div className="accordion accordion-flush" id="accordionFlushExample">

            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-heading5">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse5" aria-expanded="false" aria-controls="flush-collapse5">
                        Servicios Publicos
                    </button>
                </h2>
                <div id="flush-collapse5" className="accordion-collapse collapse" aria-labelledby="flush-heading5" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        {Select_Items.map((appPage, index) => {
                            return (
                                <IonMenuToggle key={index} autoHide={false}>
                                    <IonItem id='Botones' className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                                        <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                                        <IonLabel id='ionlabel'>{appPage.title}</IonLabel>
                                    </IonItem>
                                </IonMenuToggle>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Select;
