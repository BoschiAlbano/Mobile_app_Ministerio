import React from 'react';
import './index.css';

const Tarjeta = () => {
    return (
        <div>
            <div className="box">
                <div className="content">
                    <img src="/assets/images/edet/edet.png"/>
                    <div className="text1">Conoce más en.</div>
                    <a href='https://www.edetsa.com/info/pwa/'>
                        <div className="text2">https://www.edetsa.com</div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Tarjeta;