import React from 'react';
import "./index.css"

const Zoom = () => {
    return (
        <div className='zoom'>
            <div className="containerZoom">
                <input type="checkbox" id="zoomCheck"/>
                    <label>
                        <img src="/assets/images/IMG1.jpg"/>
                    </label>
            </div>
        </div>
    );
}

export default Zoom;
