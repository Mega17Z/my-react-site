import React from "react";
import { useState, useEffect } from "react";
import Pays from "../pays/pays";

const api = 'https://restcountries.com/v3.1/all'

const SecondSection = ({title}) => {

    const [pays, setPays] = useState([])

    const recuperation = async (url) => {
        const apiPays = await fetch(url)
        const pays = await apiPays.json()
        setPays(pays)
        console.log(pays)
    }

    useEffect(() => {
        recuperation(api)
    }, [])

    return ( 
        <div className="section">
            <h1>{title}</h1>
            <div className="cards">
                {pays.map((chakPays) => {
                    return <Pays chaquePays={chakPays} key={chakPays.name.common} />
                })}
            </div>
        </div>
     );
}
 
export default SecondSection;