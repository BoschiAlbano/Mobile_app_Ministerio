import React, { useState } from "react";

import { IonImg, useIonAlert, useIonLoading, useIonRouter, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';

import "./index.css"

import { personCircleSharp, mailOpen } from 'ionicons/icons'

import Verificar from "../../hook/verificar";

import { useLocalStorage } from "../../hook/localStorage";
import Tarjeta_Imagenes_Hijo from "../Componentes/react-photo-view-hijo";


/*
    backend:
    1- base de datos: relacion 1 a 1 con usuaio y kitElectrico
    2- api para veridficar si el usuario ya esta insc
    3- api para insc
    front:
    1- verificar si ya se inscribio
    2- formulario de datos para enviar
    3- 
*/

const kit = {
    titulo: 'Formulario de Inscripcion',
    cardimagen: '/assets/images/SeguridadElectrica.jpg',
    cardTitle: 'Formulario',
    imagenes: [
        '/assets/images/SeguridadElectrica.jpg'
    ]
}

const KitElectrico = () => {

    const navigation = useIonRouter()

    const [store, setValue] = useLocalStorage('Datos', [])

    const [formulario, setformulario] = useState({ Nombre: store.Usuario.Nombre, Apellido: store.Usuario.Apellido, DNI: store.Usuario.Dni, Direccion: "", Mail: "" })
    const [alert] = useIonAlert();
    const [present, dismiss] = useIonLoading()

    const onSubmit = async (event) => {
        event.preventDefault()

        //verificar campos
        const Vacios = Verificar(formulario);
        if (Vacios.bandera) {
            alert({
                header: 'Error, de Capos',
                message: Vacios.mensaje,
                buttons: [{ text: 'OK' }]
            })
            return
        }

        // destructuracion
        const { Nombre, Apellido, DNI, Direccion, Mail } = formulario;

        // Register metodo post
        await present({ message: 'Cargando...' })

        const _body = { datos: { Nombre, Apellido, DNI, Direccion, Mail } };

        console.log('Datos')
        console.table(_body)

        dismiss();

        return
        fetch('https://appministerio.azurewebsites.net/register', {
            method: "POST",
            body: JSON.stringify(_body),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        }).then(response => response.json())
            .then(response => {
                dismiss();
                console.log(response)

                if (response.error !== 0) {
                    alert({
                        header: 'Error, Con el Servidor',
                        message: response.error,
                        buttons: [{ text: 'OK' }]
                    })
                } else {
                    // todo sale bien - guardo el token y los datos
                    alert({
                        header: 'Correcto',
                        message: response.mensaje,
                        buttons: [{ text: 'OK' }],
                        onWillDismiss: () => { navigation.push('/login', 'forward', 'replace') }
                    })

                }

            })
            .catch(err => {
                dismiss();
                alert({
                    header: 'Error, Algo salio mal',
                    message: 'Ocurrio un error al comunicar con el servidor ',
                    buttons: [{ text: 'OK' }]
                })
            });
        return

    }

    const onChange = async (event) => {
        setformulario({ ...formulario, [event.target.name]: event.target.value })
    }

    return (
        <>
            <IonPage className="home">

                <IonHeader>
                    <IonToolbar color={'medium'} >
                        <IonTitle id="iontitle" color={'dark'}>Kit Electrico</IonTitle>
                        <IonButtons slot="start">
                            <IonMenuButton color={'dark'} id="ionbtnmenu" />
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>

                <IonContent>

                    {/* Tarjeta de Kit Electrico */}

                    <Tarjeta_Imagenes_Hijo datos={kit}>

                        {/* Formulario */}
                        <form className="formulario" onSubmit={onSubmit}>

                            <div className={'input_group'}>
                                <input className={'input_text'} type="text" name="Nombre" value={formulario.Nombre} onChange={(e) => onChange(e)} placeholder='Nombre' />
                                <span className={'icono'}><IonImg src={personCircleSharp} /></span>
                            </div>

                            <div className={'input_group'}>
                                <input className={'input_text'} type="text" name="Apellido" value={formulario.Apellido} onChange={(e) => onChange(e)} placeholder='Apellido' />
                                <span className={'icono'}><IonImg src={personCircleSharp} /></span>
                            </div>

                            <div className={'input_group'}>
                                <input className={'input_text'} type="text" name="DNI" value={formulario.DNI} onChange={(e) => onChange(e)} placeholder='DNI' />
                                <span className={'icono'}><IonImg src={personCircleSharp} /></span>
                            </div>

                            <div className={'input_group'}>
                                <input className={'input_text'} type="text" name="Direccion" value={formulario.Direccion} onChange={(e) => onChange(e)} placeholder='Direccion' />
                                <span className={'icono'}><IonImg src={personCircleSharp} /></span>
                            </div>

                            <div className={'input_group'}>
                                <input className={'input_text'} type="text" name="Mail" value={formulario.Mail} onChange={(e) => onChange(e)} placeholder='E-Mail' />
                                <span className={'icono'}><IonImg src={mailOpen} /></span>
                            </div>


                            <div className="ion-margin-top">
                                <button className="btnlogin">Enviar</button>
                            </div>
                        </form>

                    </Tarjeta_Imagenes_Hijo>
                </IonContent>
            </IonPage>
        </>
    )
}

export default KitElectrico;