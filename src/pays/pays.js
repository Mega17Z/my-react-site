import React from "react";
import './pays.css'

const Pays = ({chaquePays}) => {
    console.log(chaquePays)
    const {name, flags} = chaquePays
    return ( 
        <div className="pays">
            <div className="pays-image">
                <img src={flags.png} alt="" />
            </div>
            <h4>{name.common}</h4>
        </div>
     );
}
 
export default Pays;