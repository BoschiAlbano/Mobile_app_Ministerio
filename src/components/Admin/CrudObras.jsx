import { useState } from "react";
import {IonButton, IonCard, IonCardContent, IonCardHeader, IonIcon, IonInput, IonItem, IonLabel, IonTitle, useIonAlert, useIonLoading, useIonRouter } from "@ionic/react";
import {addCircleSharp } from 'ionicons/icons'
import Verificar from "../../hook/verificar";

const CrudObras = () => {

    const [formulario, setformulario] = useState({Url: "", Titulo: "", SubTitulo: "", Descripcion: ""})
    const [alert] = useIonAlert();
    const [present, dismiss] = useIonLoading();

    const onSubmit = async (event) => {
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
        const {Url, Titulo, SubTitulo, Descripcion} = formulario;

        // Register metodo post
        await present({message: 'Cargando...'})

        const _body = {datos: {Url, Titulo, SubTitulo, Descripcion}}
        const _token = "Bearer "+localStorage.getItem("token")

        /* https://appministerio.azurewebsites.net/Obras */
        fetch('http://localhost:4000/Obras', {
            method: "POST",
            body: JSON.stringify(_body),
            headers: {"Content-type": "application/json; charset=UTF-8","Authorization": _token}
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
                alert({
                    header: 'Correcto, Obra Cargada',
                    message: response.mensaje,
                    buttons: [{text: 'OK'}],
                    onWillDismiss: () => LimpiarCampos()
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

    const LimpiarCampos = () => {
        setformulario({Url: "", Titulo: "", SubTitulo: "", Descripcion: ""})
    }

    const onChange = async (event) => {
        setformulario({...formulario, [event.target.name]: event.target.value})
    }

    return(
        <>
            
        
            <IonCard color="light">
                <IonCardHeader>
                    <IonTitle className="center">Crud de Obras</IonTitle>
                </IonCardHeader>
                <IonCardContent color="light">
                    <form onSubmit={onSubmit}>

                        <IonItem color="light" >
                            <IonLabel position="floating">Url</IonLabel>
                            <IonInput type="text" value={formulario.Url} name="Url" onIonChange={(e) => onChange(e)} ></IonInput>
                        </IonItem>
                        <IonItem color="light">
                            <IonLabel position="floating">Titulo</IonLabel>
                            <IonInput type="text" value={formulario.Titulo} name="Titulo" onIonChange={(e) => onChange(e)}></IonInput>
                        </IonItem>
                        <IonItem color="light">
                            <IonLabel position="floating">SubTitulo</IonLabel>
                            <IonInput type="text" value={formulario.SubTitulo} name="SubTitulo" onIonChange={(e) => onChange(e)}></IonInput>
                        </IonItem>
                        <IonItem color="light" >
                            <IonLabel position="floating">Descripcion</IonLabel>
                            <IonInput type="text" value={formulario.Descripcion} name="Descripcion" onIonChange={(e) => onChange(e)} ></IonInput>
                        </IonItem>
                        <div className="ion-margin-top">
                            <IonButton expand="full" type="submit" color="secondary">
                                <IonIcon icon={addCircleSharp} slot="start"></IonIcon>
                                Grabar
                            </IonButton>
                        </div>
                    </form>
                </IonCardContent>
            </IonCard>
        </>
    );

}

export default CrudObras;
