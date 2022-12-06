import {IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonPage, IonToolbar, useIonAlert, useIonLoading, useIonRouter } from "@ionic/react";
import React, { useState } from "react";
import { person, personAdd } from 'ionicons/icons'
import "./login.css"
const login: React.FC = function Login() {

    const navigation = useIonRouter()

    const [formulario, setformulario] = useState({Usuario: "albanojb", Password: "123"})
    const [alert] = useIonAlert();
    const [present, dismiss] = useIonLoading();

    const onSubmit = async (event: any) => {
        // evento
        event.preventDefault()
        // destructuracion
        const {Usuario, Password} = formulario;
        // verificar campos
        if (Usuario.length <= 0 || Password.length <= 0) {
            alert({
                header: 'Error, de Capos',
                message: 'Complete Todos los Capos',
                buttons: [{text: 'OK'}]
            })
            return;
        }
        // consulta a la api
        await present({message: 'Cargando...'})

        const _body = {datos: {Usuario, Password}};

        /*https://appministerio.azurewebsites.net/login*/
        // http://localhost:4000/Login
        fetch('https://appministerio.azurewebsites.net/login', {
            method: "POST",
            body: JSON.stringify(_body),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }).then(response => response.json())
        .then(response => {
            dismiss();
            console.log(response)
            
            if (response.error !== 0) {
                alert({
                    header: 'Error, Con el Servidor',
                    message: response.error,
                    buttons: [{text: 'OK'}]
                })
            }else {
                // todo sale bien - guardo el token y los datos
                // alert({
                //     header: 'Correcto',
                //     message: response.estado,
                //     buttons: [{text: 'OK'}],
                //     onWillDismiss: () => {
                //     }
                // })
                try {
                    // almacenar token
                    localStorage.setItem('token', response.token)
                    localStorage.setItem('usuario', JSON.stringify(response.datos))
                    // navegar a la pagina home
                    navigation.push('/app', 'forward', 'replace')
                } catch (error) {
                    console.log(error)
                    navigation.push('/', 'forward', 'replace')
                }
            }
            
        })
        .catch(err => {
            dismiss();
            alert({
                header: 'Error, Algo salio mal',
                message: 'Ocurrio un error al comunicar con el servidor ',
                buttons: [{text: 'OK'}]
            })
        });
        
    }
    const onChange = async (event: any) => {
        setformulario({...formulario, [event.target.name]: event.target.value})
    }
    return (
        <IonPage >
            <IonHeader>
                <IonToolbar color="secondary">
                    <h5 className="center">Ministerio de Obras y Servicios Publicos</h5> 
                </IonToolbar>
            </IonHeader>
            <IonContent className="Contenedor">
                
                <IonCard color="light">
                        <IonCardContent color="light">
                            <form onSubmit={onSubmit}>
                                <IonItem color="light">
                                    <IonLabel position="floating">Usuario</IonLabel>
                                    <IonInput type="text" name="Usuario" value={formulario.Usuario} onIonChange={(e) => onChange(e)} ></IonInput>
                                </IonItem>

                                <IonItem color="light">
                                    <IonLabel position="floating">Password</IonLabel>
                                    <IonInput type="password" name="Password" value={formulario.Password} onIonChange={(e) => onChange(e)}></IonInput>
                                </IonItem>

                                <div className="ion-margin-top">
                                    <IonButton expand="full" type="submit" color="secondary">
                                        <IonIcon icon={person} slot="start"></IonIcon>
                                        Login
                                    </IonButton>
                                </div>
                                <div className="ion-margin-top">
                                    <IonButton expand="full" type="button" color="warning" onClick={() => {navigation.push('/register', 'forward', 'replace')}}>
                                        <IonIcon icon={personAdd} slot="start"></IonIcon>
                                        Register
                                    </IonButton>
                                </div>
                            </form>
                        </IonCardContent>
                </IonCard>
                <IonCard color="light">
                    <IonImg src="/assets/images/logo-ministerio-obras-servicios-publicos.png" />
                </IonCard>
            </IonContent>
        </IonPage>
    )
}

export default login