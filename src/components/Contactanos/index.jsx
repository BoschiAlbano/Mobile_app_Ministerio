import { useState, useEffect } from "react";
import "./index.css"
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonList, IonSelect, IonSelectOption, useIonAlert, useIonLoading } from '@ionic/react';

import Tarjeta from "../Componentes/tarjeta";
import RedesSociales from "../home/components/redesSociales";
import { useLocalStorage } from "../../hook/localStorage";

import Verificar from "../../hook/verificar";
const Contactanos = () => {

    const [store, setValue] = useLocalStorage('Datos', [])
    const [formulario, setformulario] = useState({ UsuarioId: store.Usuario.id, ServicioId: "", Descripcion: "" })
    const [servicios, setservicios] = useState([]);

    const [alert] = useIonAlert();
    const [present, dismiss] = useIonLoading()

    useEffect(() => {

        async function fetchData2() {
            await present('Cargando datos...');

            const Url = `https://appministerio.azurewebsites.net/servicios`
            fetch(Url).then(response => response.json())
                .then(response => {

                    console.log(response)
                    setservicios(response)

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

    const onChange = async (event) => {
        setformulario({ ...formulario, [event.target.name]: event.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()


        //verificar campos
        const Vacios = Verificar(formulario);
        if (Vacios.bandera) {
            alert({
                header: 'Ministerio de Obras y Servicios Publicos',
                message: Vacios.mensaje,
                buttons: [{ text: 'OK' }]
            })
            return
        }

        await present('Cargando datos...');
                    
            const Url = `https://appministerio.azurewebsites.net/reclamos`
            fetch(Url,{
                method: "POST",
                body: JSON.stringify({datos: {...formulario}}),
                headers: { "Content-type": "application/json; charset=UTF-8" }
            }).then(response => response.json())
                .then(response => {
                    if (response.error !== 0) {
                        alert({
                            header: 'Ministerio de Obras y Servicios Publicos',
                            message: response.error,
                            buttons: [{ text: 'OK' }],
                        })
                    } else {
                        alert({
                            header: 'Ministerio de Obras y Servicios Publicos',
                            message: 'Reclamo enviado con exito, Esteremos en contacto',
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

        setformulario({...formulario, Descripcion: ""})
        await dismiss()
    }

    return (
        <>
            <IonPage className="home">

                <IonHeader>
                    <IonToolbar color={'medium'} >
                        <IonTitle id="iontitle" color={'dark'}>CONTACTANOS</IonTitle>
                        <IonButtons slot="start">
                            <IonMenuButton color={'dark'} id="ionbtnmenu" />
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    <Tarjeta imagen={"/assets/images/contactanos.png"} texto={"ministerioosp2022@gmail.com"} url={""} pagina={""} />

                    <IonCard color="light">
                        <IonCardHeader>
                            <IonCardTitle id='ioncardtitle' className="ioncardtitle">Reclamos</IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent id='ioncardcontent'>

                            {/* Formulario */}
                            <form className="formulario" onSubmit={onSubmit}>

                                {/* Select */}

                                <IonList className="ionlist">
                                    <IonItem>
                                        <IonSelect className=""
                                            placeholder="Servicios"
                                            onIonChange={(ev) => setformulario({...formulario, ServicioId: JSON.stringify(ev.detail.value)})}>
                                            {servicios.map((s) => (
                                                <IonSelectOption key={s.id} value={s.id}>
                                                    {s.Descripcion}
                                                </IonSelectOption>
                                            ))}
                                        </IonSelect>
                                    </IonItem>
                                </IonList>

                                <textarea id="textarea" placeholder="Descripcion" value={formulario.Descripcion} name={"Descripcion"} onChange={(e) => onChange(e)}></textarea>

                                <div className="ion-margin-top">
                                    <button className="btnlogin">Enviar</button>
                                </div>

                            </form>

                        </IonCardContent>
                    </IonCard>

                    <RedesSociales />
                </IonContent>
            </IonPage>
        </>

    )
}
export default Contactanos;