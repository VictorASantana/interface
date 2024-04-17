import React from "react";
import axios from 'axios'

import TextBox from '../components/textbox/textbox';
import Button from '../components/button/button';
import { url_rent } from "../constants/url_rent";

import './rent-page.css'
import { useLocation } from "react-router-dom";

export const RentPage = () => {
    const location = useLocation()
    const id = location.search.split('?')[1]
    
    const handleRent = () => {
        axios.put(`${url_rent}/chair/${id}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="rent">
            <h1>{'Compra de Ingresso'}</h1>
            <TextBox title={'Voce gostaria de comprar o ingresso para o seguinte lugar'} body={'Cadeira ' + id}/>
            <Button text={'Compra ingresso'} onClick={handleRent}/>

        </div>
    )
}