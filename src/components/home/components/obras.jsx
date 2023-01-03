import React, {useEffect, useState} from 'react';
import {IonCard, IonCardContent, IonImg, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/react';

const Obras = () => {

    const [Loading, setLoading] = useState(false)
    const [Obras, setObras] = useState([])
  
    useEffect(() => {
      setLoading(true)
  
      fetch('https://appministerio.azurewebsites.net/Obras')
      .then(res => res.json())
      .then(res => {
        setObras(res)
        setLoading(false)
      })
    },[])

    return (
        <>
            <IonCard color={'medium'}>
            <IonCardContent className="CardPading">
                <h2 id="titulo">Obras en Progreso</h2>
            </IonCardContent>
            </IonCard>

            {/* map de todas las obras*/}
            {Loading ? null : 
            Obras.map((value,index) => {
                return(
                <IonCard color="light" key={index}>
                    <IonImg alt="Silhouette of mountains" src={value.Url}/>
                    <IonCardHeader>
                    <IonCardTitle id='ioncardtitle'>{value.Titulo}</IonCardTitle>
                    <IonCardSubtitle id='ioncardsubtitle'>{value.SubTitulo}</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent id='ioncardcontent'>{value.Descripcion}</IonCardContent>
                </IonCard>
                )
            })
            }
        </>
    );
}

export default Obras;

/* TRABAJAR CON TSX
interface obra{
  id: number,
  Url: string,
  Titulo: string,
  SubTitulo: string,
  Descripcion: string
}
const [Obras, setObras] = useState<obra[]>([{id:1, Url:'null',Titulo:'null',SubTitulo:'null',Descripcion:'null'}])
*/