import React from 'react';
import {IonCard, IonCardContent} from '@ionic/react';

const Acordeon = () => {
    return (<>
        <IonCard color={'medium'}>
            <IonCardContent className="CardPading">
                <h2 id="titulo">Acerca del Ministerio</h2>
            </IonCardContent>
            </IonCard>
        <IonCard>
          <IonCardContent className="CardPading">
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
    </>
    );
}

export default Acordeon;
