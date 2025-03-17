import React from "react";
import Card from "../card/card";

import image1 from "../image/1.png"
import image2 from "../image/2.jpg"
import image3 from "../image/3.jpg"


const FirstSection = (props) => {
    return ( 
        <div className="section">
            <h1>{props.title}</h1>
            <div className="cards">
                <Card image={image1} titre="Black Clover" texte="Du texte à mettre dans cette partie" />
                <Card image={image2} titre="Dorohedo" texte="Du texte à mettre dans cette partie" />
                <Card image={image3} titre="Tokyo Ghoul" texte="Du texte à mettre dans cette partie" />
            </div>
        </div>
     );
}
 
export default FirstSection;