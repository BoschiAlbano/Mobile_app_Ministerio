import React from 'react';
import "./index.css";

const Banner = () => {
    return (<>
        <div className="contenedorBanner">
            <a href="/app/Edet">
                <figure>
                    <img src="https://res.cloudinary.com/slee-dw/image/upload/v1597941457/meta-tutoriales_vbnc37.png"/>
                        <div className="capa">
                            <h3>SLee Dw</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, vero!</p>
                        </div>
                </figure>
            </a>
        </div>
    </>
    );
}

export default Banner;
