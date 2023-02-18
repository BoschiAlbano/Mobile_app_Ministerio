import { useState, useEffect } from "react";
import { IonImg, useIonAlert, useIonLoading, useIonRouter, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import "./index.css"
import { personCircleSharp, mailOpen } from 'ionicons/icons'
import Verificar from "../../hook/verificar";
import { useLocalStorage } from "../../hook/localStorage";
import Tarjeta_Imagenes_Hijo from "../Componentes/react-photo-view-hijo";
import RedesSociales from "../home/components/redesSociales";

const kit = {
    titulo: 'Formulario de Inscripcion',
    cardimagen: '/assets/images/kitElectrico/KitElectrico3.png',
    cardTitle: 'Formulario',
    imagenes: [
        '/assets/images/kitElectrico/KitElectrico3.png',
        '/assets/images/kitElectrico/KitElectrico1.jpg',
        '/assets/images/kitElectrico/KitElectrico2.jpg',
    ]
}

const KitElectrico = () => {

    const navigation = useIonRouter()

    const [store, setValue] = useLocalStorage('Datos', [])

    const [formulario, setformulario] = useState({ Nombre: store.Usuario.Nombre, Apellido: store.Usuario.Apellido, DNI: store.Usuario.Dni, Direccion: "", Mail: "" })
    const [alert] = useIonAlert();
    const [present, dismiss] = useIonLoading()

    const [isReg, setIsReg] = useState(false);

    useEffect(() => {

        async function fetchData2() {
            await present('Cargando datos...');

            const Url = `https://appministerio.azurewebsites.net/kit/consulta/${store.Usuario.id}`
            fetch(Url, {
                method: "POST",
                body: JSON.stringify({}),
                headers: { "Content-type": "application/json; charset=UTF-8" }
            }).then(response => response.json())
                .then(response => {

                    console.log(response)

                    if (response.error !== 0) {
                        setIsReg(false)
                    } else {
                        setIsReg(true)
                        setformulario({...formulario, Direccion: response.datos.Direccion, Mail: response.datos.Email})
                        alert({
                            header: 'Ministerio de Obras y Servicios Publicos',
                            message: response.mensaje,
                            buttons: [{ text: 'OK' }],
                        })

                    }
                })
                .catch(err => {
                    alert({
                        header: 'Error, Algo salio mal',
                        message: 'Ocurrio un error al comunicar con el servidor ',
                        buttons: [{ text: 'OK' }]
                    })
                });

            await dismiss()
        }

        fetchData2();

    }, []);

    const onSubmit = async (event) => {
        event.preventDefault()

        // verificar si ya esta registrado o no
        if (isReg) {
            alert({
                header: 'Error, Ya estas Registrado',
                message: 'Tu ya te Encuntras Registrado para Recibir el Kit',
                buttons: [{ text: 'OK' }]
            })
            return
        }
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
        const { Direccion, Mail} = formulario;

        // Register metodo post
        await present({ message: 'Cargando...' })

        const _body = { datos: { UsuarioId: store.Usuario.id, Direccion, Email: Mail } };

        console.log(_body)

        fetch('https://appministerio.azurewebsites.net/kit/registrar', {
            method: "POST",
            body: JSON.stringify(_body),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        }).then(response => response.json())
            .then(response => {
                
                console.log(response)

                if (response.error !== 0) {
                    alert({
                        header: 'Error, Con el Servidor',
                        message: response.mensaje,
                        buttons: [{ text: 'OK' }]
                    })
                } else {
                    alert({
                        header: 'Correcto',
                        message: response.mensaje,
                        buttons: [{ text: 'OK' }],
                    })
                    setIsReg(true)
                }
            })
            .catch(err => {
                alert({
                    header: 'Error, Algo salio mal',
                    message: 'Ocurrio un error al comunicar con el servidor ',
                    buttons: [{ text: 'OK' }]
                })
            });

        await dismiss();

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

                            <div className={`${isReg ? 'input_group_true ' : 'input_group'}`}>
                                <input className={'input_text'} type="text" name="Nombre" value={formulario.Nombre} onChange={(e) => onChange(e)} placeholder='Nombre' />
                                <span className={'icono'}><IonImg src={personCircleSharp} /></span>
                            </div>

                            <div className={`${isReg ? 'input_group_true ' : 'input_group'}`}>
                                <input className={'input_text'} type="text" name="Apellido" value={formulario.Apellido} onChange={(e) => onChange(e)} placeholder='Apellido' />
                                <span className={'icono'}><IonImg src={personCircleSharp} /></span>
                            </div>

                            <div className={`${isReg ? 'input_group_true ' : 'input_group'}`}>
                                <input className={'input_text'} type="text" name="DNI" value={formulario.DNI} onChange={(e) => onChange(e)} placeholder='DNI' />
                                <span className={'icono'}><IonImg src={personCircleSharp} /></span>
                            </div>

                            <div className={`${isReg ? 'input_group_true ' : 'input_group'}`}>
                                <input className={'input_text'} type="text" name="Direccion" value={formulario.Direccion} onChange={(e) => onChange(e)} placeholder='Direccion' />
                                <span className={'icono'}><IonImg src={personCircleSharp} /></span>
                            </div>

                            <div className={`${isReg ? 'input_group_true ' : 'input_group'}`}>
                                <input className={'input_text'} type="text" name="Mail" value={formulario.Mail} onChange={(e) => onChange(e)} placeholder='E-Mail' />
                                <span className={'icono'}><IonImg src={mailOpen} /></span>
                            </div>


                            <div className="ion-margin-top">
                                <button className="btnlogin">Enviar</button>
                            </div>

                            {
                                isReg ? 
                                <div>
                                    <p className="mensaje">Ya estas Registrado</p>
                                </div> : null
                            }
                        </form>

                    </Tarjeta_Imagenes_Hijo>

                    <RedesSociales />

                </IonContent>
            </IonPage>
        </>
    )
}

export default KitElectrico;