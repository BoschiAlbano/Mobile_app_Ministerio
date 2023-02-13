import React from 'react';
import './index.css';

const Tarjeta = ({imagen, url, pagina}) => {
    return (
        <div>
            <div className="box">
                <div className="content">
                    <img src={imagen}/>
                    <div className="text1">Conoce más en.</div>
                    <a href={url}>
                        <div className="text2">{pagina}</div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Tarjeta;