import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRouterOutlet,
  IonSplitPane,
  useIonAlert,
  useIonRouter,
} from '@ionic/react';
import Home from '../home/index'
import Kit from '../kitElectrico/index'
import { Redirect, Route, useLocation } from 'react-router-dom';
import { homeOutline, home, bulbOutline, bulb, callOutline, call } from 'ionicons/icons';
import './index.css';
import Select from './select';
import Sat from '../Sat';
import Gasnor from '../Gasnor';
import Edet from '../Edet';
import Info from '../Info';
import Contactanos from '../Contactanos'
import { App as back } from '@capacitor/app'
import { useEffect } from 'react';


const MenuAdmin = [
  {
    title: 'Home',
    url: '/app/Home',
    iosIcon: homeOutline,
    mdIcon: home
  },
  {
    title: 'Kit Electrico',
    url: '/app/Kit',
    iosIcon: bulbOutline,
    mdIcon: bulb
  },
  {
    title: 'Contactanos',
    url: '/app/Contactanos',
    iosIcon: callOutline,
    mdIcon: call
  }
];


const Menu = () => {

  const location = useLocation()
  const navigation = useIonRouter()
  const [alert] = useIonAlert()


  useEffect(() => {
    // Elimina el boton Atras por completo
    document.addEventListener('ionBackButton', (ev) => {
      ev.preventDefault();

      ev.detail.register(99, () => {
        console.log('Handler was called!');
      });

      ev.detail.register(-1, () => {
        back.exitApp()
      });

    });
    
  }, [])

  const salir = () => {

    alert({
      header: 'Salir de la App',
      message: 'Esta Seguro que quieres salir de la app',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
      },
      {
        text: 'Aceptar',
        role: 'confirm',
        handler: () => {
          localStorage.removeItem('Datos')
          navigation.push('/login', 'forward', 'replace')
        },
      },],
    })

  }

  return (
    <IonPage>
      <IonSplitPane contentId='main'>
        <IonMenu contentId='main'>

          <IonContent>
            <div className='menu-header-bg'></div>
            <div className='header-content'>
              <img className='header-logo' src='assets/images/Logo.png'></img>
            </div>
            
            {/* Botones Select */}
            <Select />

            {/* Botones */}
            {MenuAdmin.map((appPage, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem id='Botones' className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                    <IonIcon id='Ion_Icon' slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                    <IonLabel id='ionlabel'>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            })}



            {/* Btn Acerca de la app */}
            <IonMenuToggle autoHide={false}>
              <IonItem id='Botones' className={'/app/Info'} routerLink={'/app/Info'} routerDirection="none" lines="none" detail={false}>
                <IonIcon id='Ion_Icon' slot="start" ios={'/assets/images/info.svg'} md={'/assets/images/info.svg'} />
                <IonLabel id='ionlabel'>{'Acerca de la App'}</IonLabel>
              </IonItem>
            </IonMenuToggle>

          </IonContent>


          
          {/* Btn Salir */}
          <IonMenuToggle autoHide={false}>
            <IonItem id='Botones' lines="none" onClick={() => salir()}>
              <IonIcon id='Ion_Icon' slot="start" ios={'/assets/images/salir.svg'} md={'/assets/images/salir.svg'} />
              <IonLabel id='ionlabel'>Salir</IonLabel>
            </IonItem>
          </IonMenuToggle>

        </IonMenu>

        <IonRouterOutlet id='main'>

          <Route exact path="/app/Home" component={Home}></Route>
          <Route exact path="/app/Kit" component={Kit}></Route>

          <Route exact path="/app/Edet" component={Edet}></Route>
          <Route exact path="/app/Gasnor" component={Gasnor}></Route>
          <Route exact path="/app/Sat" component={Sat}></Route>
          <Route exact path="/app/Info" component={Info}></Route>
          <Route exact path="/app/Contactanos" component={Contactanos}></Route>


          <Route exact path="/app">
            <Redirect to="/app/home" />
          </Route>

        </IonRouterOutlet>
      </IonSplitPane>
    </IonPage>
  )
}

export default Menu;
