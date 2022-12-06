import React, { useState } from "react";
import {IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonPage, IonToolbar, useIonAlert, useIonLoading, useIonRouter } from "@ionic/react";
import { personAdd, person } from 'ionicons/icons'
import Verificar from "../../hook/verificar";

const Register: React.FC = function Login() {

    const [formulario, setformulario] = useState({Nombre: "", Apellido: "", Dni: "", Usuario: "", Password: "", Repetir_Password: ""})
    const navigation = useIonRouter()
    const [alert] = useIonAlert();
    const [present, dismiss] = useIonLoading();


    const onSubmit = async (event: any) => {
        // evento
        event.preventDefault()

        //verificar campos
        const Vacios = Verificar(formulario);
        if (Vacios.bandera){
            alert({
                header: 'Error, de Capos',
                message: Vacios.mensaje,
                buttons: [{text: 'OK'}]
            })
            return
        }
        // destructuracion
        const {Nombre, Apellido, Dni, Usuario, Password, Repetir_Password} = formulario;
        // las pass sean iguales
        if (Password !== Repetir_Password) {
            alert({
                header: 'Error, de Capos',
                message: 'Las Contraseñas deben ser iguales',
                buttons: [{text: 'OK'}]
            })
            return
        }
        // Register metodo post
        await present({message: 'Cargando...'})

        const _body = {datos: {Usuario, Password, Nombre, Apellido, Dni}};

        /* https://appministerio.azurewebsites.net/register */
        // http://localhost:4000/Register
        fetch('https://appministerio.azurewebsites.net/register', {
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
                    message: response.mensaje,
                    buttons: [{text: 'OK'}],
                    onWillDismiss: () => {navigation.push('/login', 'forward', 'replace')}
                })
                
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

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar color="secondary">
                    <h5 className="center">Ministerio de Obras y Servicios Publicos</h5>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard color="light">
                    <IonCardContent color="light">
                        <form onSubmit={onSubmit}>

                            <IonItem color="light" >
                                <IonLabel position="floating">Nombre</IonLabel>
                                <IonInput type="text" name="Nombre" onIonChange={(e) => onChange(e)} ></IonInput>
                            </IonItem>
                            <IonItem color="light">
                                <IonLabel position="floating">Apellido</IonLabel>
                                <IonInput type="text" name="Apellido" onIonChange={(e) => onChange(e)}></IonInput>
                            </IonItem>
                            <IonItem color="light">
                                <IonLabel position="floating">Dni</IonLabel>
                                <IonInput type="text" name="Dni" onIonChange={(e) => onChange(e)}></IonInput>
                            </IonItem>
                            <IonItem color="light" >
                                <IonLabel position="floating">Usuario</IonLabel>
                                <IonInput type="text" name="Usuario" onIonChange={(e) => onChange(e)} ></IonInput>
                            </IonItem>
                            <IonItem color="light">
                                <IonLabel position="floating">Password</IonLabel>
                                <IonInput type="password" name="Password" onIonChange={(e) => onChange(e)}></IonInput>
                            </IonItem>
                            <IonItem color="light">
                                <IonLabel position="floating">Repetir Password</IonLabel>
                                <IonInput type="password" name="Repetir_Password" onIonChange={(e) => onChange(e)}></IonInput>
                            </IonItem>

                            <div className="ion-margin-top">
                                <IonButton expand="full" type="submit" color="secondary">
                                    <IonIcon icon={personAdd} slot="start"></IonIcon>
                                    Register
                                </IonButton>
                            </div>
                            <div className="ion-margin-top">
                                <IonButton expand="full" type="button" color="warning" onClick={() => {navigation.push('/login', 'forward', 'replace')}}>
                                    <IonIcon icon={person} slot="start"></IonIcon>
                                    Login
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
    );
}

export default Register;