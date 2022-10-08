import React, { useState } from "react";
import {IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar, useIonAlert, useIonLoading } from "@ionic/react";
import { personAdd, timeOutline } from 'ionicons/icons'
import Verificar from "../../hook/verificar";

const Register: React.FC = function Login() {

    const [formulario, setformulario] = useState({Nombre: "", Apellido: "", Dni: "", Usuario: "", Password: "", Repetir_Password: ""})

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

    }
    const onChange = async (event: any) => {
        setformulario({...formulario, [event.target.name]: event.target.value})
    }

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Register</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonCardContent>
                        <form onSubmit={onSubmit}>

                            <IonItem >
                                <IonLabel position="floating">Nombre</IonLabel>
                                <IonInput type="text" name="Nombre" onIonChange={(e) => onChange(e)} ></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">Apellido</IonLabel>
                                <IonInput type="password" name="Apellido" onIonChange={(e) => onChange(e)}></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">Dni</IonLabel>
                                <IonInput type="password" name="Dni" onIonChange={(e) => onChange(e)}></IonInput>
                            </IonItem>
                            <IonItem >
                                <IonLabel position="floating">Usuario</IonLabel>
                                <IonInput type="text" name="Usuario" onIonChange={(e) => onChange(e)} ></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">Password</IonLabel>
                                <IonInput type="password" name="Password" onIonChange={(e) => onChange(e)}></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">Repetir Password</IonLabel>
                                <IonInput type="password" name="Repetir_Password" onIonChange={(e) => onChange(e)}></IonInput>
                            </IonItem>

                            <div className="ion-margin-top">
                                <IonButton expand="full" type="submit" color="secondary">
                                    <IonIcon icon={personAdd} slot="start"></IonIcon>
                                    Registrar
                                </IonButton>
                            </div>
                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
}

export default Register;