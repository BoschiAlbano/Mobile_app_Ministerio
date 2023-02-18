import React from 'react';
import './index.css';

const Tarjeta = ({imagen, url, pagina, texto=false}) => {

    return (
        <div>
            <div className="box">
                <div className="content">
                    <img src={imagen}/>
                    {texto ? <div id='texto1' className="text1">{texto}</div> : <div className="text1">Conoce más en.</div>}
                    <a href={url}>
                        <div className="text2">{pagina}</div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Tarjeta;