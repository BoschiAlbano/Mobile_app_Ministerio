import React from "react";
import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
//import { useParams } from 'react-router';
//import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { useHistory } from "react-router";
import { logoFacebook, logoInstagram, logoWhatsapp } from "ionicons/icons";
interface props {
  nombre: string
}
const pagina: React.FC<props> = function Page({nombre}){
  
  const History = useHistory();

  const _token =  localStorage.getItem('token');

  return (
    <>
      {/* <Menu/> */}
      <IonPage>

        <IonHeader>
          <IonToolbar color="secondary" >
          
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <h5> Ministerio de Obras y Servicios Publicos</h5>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          {/* Imagenes */}
          <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    {/* <img src="assets/images/IMG1.png" className="d-block w-100" alt="Obras en Tucuman"/> */}
                    <IonImg src="assets/images/IMG1.png" className="d-block w-100" alt="Obras en Tucuman"></IonImg>
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Logo del Ministerio</h5>
                      <p>Some representative placeholder content for the first slide.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    {/* <img src="assets/images/IMG2.png" className="d-block w-100" alt="Obras en Tucuman"/> */}
                    <IonImg src="assets/images/IMG2.png" className="d-block w-100" alt="Obras en Tucuman"></IonImg>
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Second slide label</h5>
                      <p>Some representative placeholder content for the second slide.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    {/* <img src="assets/images/IMG3.png" className="d-block w-100" alt="Obras en Tucuman"/> */}
                    <IonImg src="assets/images/IMG3.png" className="d-block w-100" alt="Obras en Tucuman"></IonImg>
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Third slide label</h5>
                      <p>Some representative placeholder content for the third slide.</p>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
            </div>
          </>
        {/* Mision - Funciones - ORGANISMOS DEPENDIENTES Y ENTES VINCULADOS */}
        

        <IonCard color="light">
        <IonCardContent color="light" className="CardPading">
{/* Misiones */}
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Misiones
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                <ul>   
                  <li className="lista">Asistir al Departamento Ejecutivo en el estudio y evaluación técnica y económica de obras a realizarse dentro de los límites de Municipio.</li>
                  <li className="lista">Construir, controlar su ejecución y atender la conservación material de la obra pública que compone el Patrimonio Municipal.</li>
                  <li className="lista">Asesorar al Departamento Ejecutivo en todo lo atinente a la problemática urbanística del Municipio en relación al Área Metropolitana proponiendo las medidas tendientes al ordenamiento, uso y desarrollo armónico del espacio urbano.</li>
                </ul>
              </div>
            </div>
          </div>
        
{/* Funciones */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Funciones
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
                <ul>   
                  <li className="lista">Asistir al Departamento Ejecutivo en el estudio y evaluación técnica y económica de obras a realizarse dentro de los límites de Municipio.</li>
                  <li className="lista">Construir, controlar su ejecución y atender la conservación material de la obra pública que compone el Patrimonio Municipal.</li>
                  <li className="lista">Asesorar al Departamento Ejecutivo en todo lo atinente a la problemática urbanística del Municipio en relación al Área Metropolitana proponiendo las medidas tendientes al ordenamiento, uso y desarrollo armónico del espacio urbano.</li>
                </ul>
              </div>
          </div>
        </div>
{/* Datos de contacto */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-heading3">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse3" aria-expanded="false" aria-controls="flush-collapse3">
              Datos de Contacto
            </button>
          </h2>
          <div id="flush-collapse3" className="accordion-collapse collapse" aria-labelledby="flush-heading3" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
                <ul>   
                  <li className="lista">Secretario: Lic. Pablo Carugati</li>
                  <li className="lista">Ubicacion: Juan Crisostomo Alvarez 457</li>
                  <li className="lista">Telefono: 0381 - 4226672 - 4226675</li>
                  <li className="lista">Mail: Ministerio@gmail.com</li>
                </ul>
              </div>
          </div>
        </div>
        </div>
        </IonCardContent>
        </IonCard>

        {/* obras */}
        <IonCard color="secondary">
          <IonCardContent className="CardPading">
            <h2 className="titulo">Obras en Progreso</h2>
          </IonCardContent>
        </IonCard>
        <IonCard color="light">
          <IonImg alt="Silhouette of mountains" src="https://www.comunicaciontucuman.gob.ar/fotos/notas/2022/06/15/220615172114_31308.jpeg" />
          <IonCardHeader>
            <IonCardTitle>“Penitenciaria Benjamín Paz”</IonCardTitle>
            <IonCardSubtitle>“En Tucumán volvemos a tener una verdadera política carcelaria después de 100 años”</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
          Con una inversión que asciende a los $5.250 millones aproximadamente y un plazo de construcción de 18 meses, el nuevo penal tendrá la capacidad de albergar, en una primera etapa, a mil reclusos.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardContent className="CardPading">
          <div className="listonFooter">
            <a className="redes" href="https://es-la.facebook.com/" >
                    <IonImg className="imgRedes" src="assets/images/insta.png" alt="Instagram del Ministerio de obras y Servicios Publicos" />
                  </a>
                  <a className="redes" href="https://es-la.facebook.com/" >
                    <IonImg className="imgRedes" src="assets/images/face.png" alt="Facebook del Ministerio de obras y Servicios Publicos" />
                  </a>
                  <a className="redes" href="https://es-la.facebook.com/" >
                    <IonImg className="imgRedes" src="assets/images/wp.png" alt="Whatsapp del Ministerio de obras y Servicios Publicos" />
                  </a>
              
          </div>
          </IonCardContent>
        </IonCard>
        </IonContent>

        
    </IonPage>
    </>
    
  );

}


export default pagina