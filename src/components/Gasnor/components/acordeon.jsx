import {IonCard, IonCardContent} from '@ionic/react';

const Acordeon = () => {
    return (<>
        <IonCard color={'medium'}>
            <IonCardContent className="CardPading">
                <h2 id="titulo">Acerca de Gasnor</h2>
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
                    <li className="lista">✓ Atender las necesidades energéticas de la sociedad ofreciendo productos y servicios de calidad respetuosos con el medio ambiente.</li>
                    <li className="lista">✓ Atender las necesidades de nuestros accionistas ofreciéndoles una rentabilidad creciente y sostenible.</li>
                    <li className="lista">
                    ✓ Atender las necesidades de nuestros empleados ofreciéndoles la posibilidad de desarrollar sus competencias profesionales.</li>
                  </ul>
                </div>
              </div>
            </div>
          
            {/* Vision */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Vision
                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    <ul>   
                      <li className="lista">✓ Ser lideres en continuo crecimiento con presencia multinacional ofreciendo productos de calidad y respetuosos del medioambiente.</li>
                      <li className="lista">✓ Ofrecer una rentabilidad creciente y sostenible a nuestros accionistas.</li>
                      <li className="lista">✓ Ofrecer oportunidades de desarrollo profesional y personal a nuestros empleados.</li>
                      <li className="lista">✓ Construir positivamente a través de un compromiso global.</li>
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
                      <li className="lista">✓ Orientación al cliente.</li>
                      <li className="lista">✓ Compromiso con los resultados.</li>
                      <li className="lista">✓ Sostenibilidad.</li>
                      <li className="lista">✓ Interés por las personas.</li>
                      <li className="lista">✓ Responsabilidad social.</li>
                      <li className="lista">✓ Integridad.</li>
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
