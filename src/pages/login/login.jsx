import React, { useEffect, useState } from "react";
import { IonImg, useIonAlert, useIonLoading, useIonRouter } from "@ionic/react";
import { personAddSharp, fingerPrintSharp } from 'ionicons/icons'
import "./login.css"
import Layout from "../../components/layout/layout";
import { Link } from "react-router-dom";

const Login = () => {

    const navigation = useIonRouter()

    const [formulario, setformulario] = useState({ Usuario: "albano", Password: "123" })
    const [alert] = useIonAlert();
    const [present, dismiss] = useIonLoading()
    const [verPass, setverPass] = useState(false)

    // useEffect(() => {

    //     // Obtenemos el token y los datos de LocalStorage
    //     const token = localStorage.getItem('token')
    //     const data = localStorage.getItem('usuario')
    //     console.log(token)
    //     console.log(JSON.parse(data))

    //     // consultamos en la db si los datos son correctos

    //     // redireccionamos a home
        
    //     if (token && data) {
    //         navigation.push('/app', 'forward', 'replace')
    //     }

    // }, []);

    const onSubmit = async (event) => {
        // evento
        event.preventDefault()
        // destructuracion
        const { Usuario, Password } = formulario;
        // verificar campos
        if (Usuario.length <= 0 || Password.length <= 0) {
            alert({
                header: 'Error, de Capos',
                message: 'Complete Todos los Capos',
                buttons: [{ text: 'OK' }]
            })
            return;
        }
        // consulta a la api
        await present({ message: 'Cargando...' })

        const _body = { datos: { Usuario, Password } };

        /*https://appministerio.azurewebsites.net/login*/
        // http://localhost:4000/Login
        fetch('https://appministerio.azurewebsites.net/login', {
            method: "POST",
            body: JSON.stringify(_body),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        }).then(response => response.json())
            .then(response => {
                dismiss();
                // console.log(response)

                if (response.error !== 0) {
                    alert({
                        header: 'Error, Con el Servidor',
                        message: response.error,
                        buttons: [{ text: 'OK' }]
                        //onWillDismiss: () => {}
                    })
                } else {
                    try {
                        // almacenar token
                        localStorage.setItem('token', response.token)
                        localStorage.setItem('usuario', JSON.stringify(response.datos))
                        console.log(response)
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
                    buttons: [{ text: 'OK' }]
                })
            });

    }
    const onChange = async (event) => {
        setformulario({ ...formulario, [event.target.name]: event.target.value })
    }
    return (
        <Layout ruta={'register'}>
            <div className="contenedorlogin">

                <IonImg id="logoLogin" src="/assets/images/Logo.png" />

                <form className="formulario" onSubmit={onSubmit}>

                    <div className={'input_group'}>
                        <input className={'input_text'} type="text" name="Usuario" value={formulario.Usuario} onChange={(e) => onChange(e)} placeholder='Usuario' />
                        <span className={'icono'}><IonImg src={personAddSharp} /></span>
                    </div>

                    <div className={'input_group'}>
                        <input className={'input_text'} type={`${verPass ? 'text' : 'password'}`} name="Password" value={formulario.Password} onChange={(e) => onChange(e)} placeholder='password' />
                        <span className={'icono'}><IonImg onClick={() => setverPass(!verPass)} src={fingerPrintSharp} /></span>
                    </div>

                    <div className="ion-margin-top">
                        <button className="btnlogin">Login</button>
                    </div>
                    <div className="ion-margin-top">
                        <label> ¿Aun No tienes una Cuenta? <br /> <Link to={'/register'}>Registrate Ahora !!!</Link></label>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default Login