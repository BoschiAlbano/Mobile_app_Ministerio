import {IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar, useIonAlert, useIonLoading } from "@ionic/react";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { person, personAdd } from 'ionicons/icons'

const login: React.FC = function Login() {
    
    const History = useHistory();
    const [formulario, setformulario] = useState({Usuario: "", Password: ""})
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
                alert({
                    header: 'Correcto',
                    message: response.estado,
                    buttons: [{text: 'OK'}],
                    onWillDismiss: () => {History.push("/page/Home")}
                })
                
            }
            
        })
        .catch(err => {
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
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonCardContent>
                        <form onSubmit={onSubmit}>
                            <IonItem >
                                <IonLabel position="floating">Usuario</IonLabel>
                                <IonInput type="text" name="Usuario" onIonChange={(e) => onChange(e)} ></IonInput>
                            </IonItem>

                            <IonItem>
                                <IonLabel position="floating">Password</IonLabel>
                                <IonInput type="password" name="Password" onIonChange={(e) => onChange(e)}></IonInput>
                            </IonItem>

                            <div className="ion-margin-top">
                                <IonButton expand="full" type="submit" color="secondary">
                                    <IonIcon icon={person} slot="start"></IonIcon>
                                    Login
                                </IonButton>
                            </div>
                            <div className="ion-margin-top">
                                <IonButton expand="full" type="button" color="warning" onClick={() => {History.push("/register")}}>
                                    <IonIcon icon={personAdd} slot="start"></IonIcon>
                                    Register
                                </IonButton>
                            </div>
                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    )
}

export default login

/*  Servidor
    Aumentar tiempo de expiracion de token
    Corregir las respuestas del servidor, con un error y mensaje - estado
    login responder ademas con todos los datos del usuario
*/