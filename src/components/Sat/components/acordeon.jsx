import {IonCard, IonCardContent} from '@ionic/react';

const Acordeon = () => {
    return (<>
        <IonCard color={'medium'}>
            <IonCardContent className="CardPading">
                <h2 id="titulo">Acerca de SAT</h2>
            </IonCardContent>
            </IonCard>
        <IonCard>
          <IonCardContent className="CardPading">
          {/* Misiones */}
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  Mision
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  <ul>   
                    <li className="lista">✓ Sustentabilidad, eficiencia, calidad e inmediatez en los servicios de agua potable y saneamiento, contribuyendo al completo desarrollo y bienestar de los tucumanos y el cuidado del medioambiente.</li>
                  </ul>
                </div>
              </div>
            </div>
          
            {/* Valores */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-heading3">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse3" aria-expanded="false" aria-controls="flush-collapse3">
                  Valores
                </button>
              </h2>
              <div id="flush-collapse3" className="accordion-collapse collapse" aria-labelledby="flush-heading3" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    <ul>   
                      <li className="lista">✓ Empatía, cohesión, coordinación, capacitación son las aristas en los que la empresa pone énfasis y trabaja para, cada día, responder a sus clientes, internos y externos, con la más profesional e inmediata de las respuestas.</li>
                      <li className="lista">✓ La gestión sostenible de Aguas del Tucumán necesita trabajar de manera conjunta con cada uno de los clientes de la empresa para lograr potenciar el desarrollo del servicio, puesto que ellos son quienes de manera directa tienen incidencia en los servicios. La cultura del buen uso es una constante que forma parte de nuestra labor y que inculcamos.</li>
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
