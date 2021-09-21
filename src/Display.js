import React from 'react';

const Display = ({output}) => {
    return (
        <div className = "display_container">
            <span className = "logo">Monkie_J Calculator With React</span>
            <div className="display">
                {output}
            </div>
        </div>     
    );
};

export default Display;