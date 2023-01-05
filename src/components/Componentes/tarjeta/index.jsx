import React from 'react';
import './index.css';

const Tarjeta = () => {
    return (
        <div>
            <div className="banner">
                <div className="line">
                    <span>Instahipster</span>
                </div>
            </div>

            <div className="box">
                <div className="content">
                    <img src="https://24.media.tumblr.com/tumblr_mb9wcgsFkU1rb86ldo1_400.jpg" width="500" height="500" alt="Italy / Urban / Street / City"/>
                    <div className="text1">Voted</div>
                    <div className="text2">most-hipster</div>
                </div>
            </div>
        </div>
    );
}

export default Tarjeta;