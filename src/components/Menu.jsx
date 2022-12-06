import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRouterOutlet,
  IonSplitPane,
  IonTitle,
  IonToolbar,
  useIonAlert,
  useIonRouter,
} from '@ionic/react';
import Home from '../pages/home/Home'
import Idea from '../pages/kitElectrico/kitElectrico'
import Componente from './Componentes/InfiniteScroll/index'
import Administracion from './Admin/administracion';

import { Redirect, Route, useLocation } from 'react-router-dom';
import { homeOutline, home, bulbOutline, bulb, exit, exitOutline } from 'ionicons/icons';
import './Menu.css';
import { useEffect, useState } from 'react';

const MenuUsuario = [
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
  }
];
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
  }
  ,
  {
    title: 'Componentes',
    url: '/app/Componentes',
    iosIcon: bulbOutline,
    mdIcon: bulb
  },
  {
    title: 'Admin',
    url: '/app/Administracion',
    iosIcon: bulbOutline,
    mdIcon: bulb
  }
];

const Menu = () => {

  const location = useLocation()
  const navigation = useIonRouter()
  const [alert] = useIonAlert()

  const [IsAdmin, SetIsAdmin] = useState(false)

  useEffect(() => {
    const data =  localStorage.getItem('usuario')
    const _usuario = JSON.parse(data)
    if (_usuario.Admin == 1) {
      SetIsAdmin(true)
    }

  },[IsAdmin])

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
              localStorage.removeItem('token')
              localStorage.removeItem('usuario')
              navigation.push('/login', 'forward', 'replace')
            },
          },],
    })
    
  }

  return(
    <IonPage>
      <IonSplitPane contentId='main'>
        <IonMenu contentId='main'>
          
          <IonHeader>
            <IonToolbar color="secondary">
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent color="light">
            {IsAdmin ?
              MenuAdmin.map((appPage, index) => {
                return (
                  <IonMenuToggle  key={index} autoHide={false}>
                    <IonItem id='Botones' color="light" className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                      <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                      <IonLabel>{appPage.title}</IonLabel>
                    </IonItem>
                  </IonMenuToggle>
                );
              })
              :
              MenuUsuario.map((appPage, index) => {
                return (
                  <IonMenuToggle  key={index} autoHide={false}>
                    <IonItem id='Botones' color="light" className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                      <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                      <IonLabel>{appPage.title}</IonLabel>
                    </IonItem>
                  </IonMenuToggle>
                );
              })
            }
          </IonContent>

            <div id='btnSalir'>
              <IonItem  color="light" className={location.pathname === '/' ? 'selected' : ''} onClick={() => salir()}>
                <IonIcon slot="start" ios={exitOutline} md={exit} />
                <IonLabel>Salir</IonLabel>
              </IonItem>
            </div>

        </IonMenu>

        <IonRouterOutlet id='main'>

          <Route exact path="/app/Home" component={Home}></Route>
          <Route exact path="/app/Kit" component={Idea}></Route>
          <Route exact path="/app/Componentes" component={Componente}></Route>
          <Route exact path="/app/Administracion" component={Administracion}></Route>
          
          <Route exact path="/app">
            <Redirect to="/app/home" />
          </Route>

        </IonRouterOutlet>
      </IonSplitPane>
    </IonPage>
  )
}

export default Menu;
