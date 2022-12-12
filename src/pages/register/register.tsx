import React, { useState } from "react";
import { IonImg, useIonAlert, useIonLoading, useIonRouter } from "@ionic/react";
import { personAddSharp, fingerPrintSharp } from 'ionicons/icons'
import Verificar from "../../hook/verificar";
import Layout from "../../components/layout/layout";
import './register.css'

const Register: React.FC = function Login() {

    const [formulario, setformulario] = useState({ Nombre: "", Apellido: "", Dni: "", Usuario: "", Password: "", Repetir_Password: "" })
    const navigation = useIonRouter()
    const [alert] = useIonAlert();
    const [present, dismiss] = useIonLoading();
    const [verPass, setverPass] = useState(false)
    const [verPassRep, setverPassRep] = useState(false)


    const onSubmit = async (event: any) => {
        // evento
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
        const { Nombre, Apellido, Dni, Usuario, Password, Repetir_Password } = formulario;
        // las pass sean iguales
        if (Password !== Repetir_Password) {
            alert({
                header: 'Error, de Capos',
                message: 'Las Contraseñas deben ser iguales',
                buttons: [{ text: 'OK' }]
            })
            return
        }
        // Register metodo post
        await present({ message: 'Cargando...' })

        const _body = { datos: { Usuario, Password, Nombre, Apellido, Dni } };

        /* https://appministerio.azurewebsites.net/register */
        // http://localhost:4000/Register
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

    }
    const onChange = async (event: any) => {
        setformulario({ ...formulario, [event.target.name]: event.target.value })
    }

    return (
        <div>
        <Layout ruta={'login'}>
            <div className="contenedorRegister">
                <form onSubmit={onSubmit}>

                    <div className={'input_group'}>
                        <input className={'input_text'} type="text" name="Nombre" onChange={(e) => onChange(e)} placeholder='Nombre' />
                        <span className={'icono'}><IonImg src={personAddSharp} /></span>
                    </div>

                    <div className={'input_group'}>
                        <input className={'input_text'} type="text" name="Apellido" onChange={(e) => onChange(e)} placeholder='Apellido' />
                        <span className={'icono'}><IonImg src={personAddSharp} /></span>
                    </div>

                    <div className={'input_group'}>
                        <input className={'input_text'} type="text" name="Dni" onChange={(e) => onChange(e)} placeholder='Dni' />
                        <span className={'icono'}><IonImg src={personAddSharp} /></span>
                    </div>

                    <div className={'input_group'}>
                        <input className={'input_text'} type="text" name="Usuario" onChange={(e) => onChange(e)} placeholder='Usuario' />
                        <span className={'icono'}><IonImg src={personAddSharp} /></span>
                    </div>

                    <div className={'input_group'}>
                        <input className={'input_text'} type={`${verPass ? 'text' : 'password'}`} name="Password" onChange={(e) => onChange(e)} placeholder='Password' />
                        <span className={'icono'}><IonImg onClick={() => setverPass(!verPass)} src={fingerPrintSharp} /></span>
                    </div>

                    <div className={'input_group'}>
                        <input className={'input_text'} type={`${verPassRep ? 'text' : 'password'}`} name="Repetir_Password" onChange={(e) => onChange(e)} placeholder='Repetir Password' />
                        <span className={'icono'}><IonImg onClick={() => setverPassRep(!verPassRep)} src={fingerPrintSharp} /></span>
                    </div>

                    <div className="ion-margin-top">
                        <div className="ion-margin-top">
                            <button type={'submit'} className="btnlogin">Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
        </div>

    );
}

export default Register;