import React from "react";
import './card.css'

const Card = ({image, titre, texte}) => {
    return ( 
        <div className="card">
            <div className="card-image">
                <img src={image} alt="" />
            </div>
            <h3>{titre}</h3>
            <p>{texte}</p>
        </div>
     );
}
 
export default Card;