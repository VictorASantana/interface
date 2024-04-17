import React, { useEffect, useState } from "react";
import axios from 'axios'

import TextBox from '../components/textbox/textbox';
import Button from '../components/button/button';
import { url_monitoring } from "../constants/url_monitoring";

import './monitoring-page.css'

export const MonitoringPage = () => {
    const [chairs, setChairs] = useState([])

    useEffect(() => {
        axios.get(`${url_monitoring}/chair/`)
        .then(response => {
            setChairs(response.data);
        })
        .catch(error => {
            console.log(error)
        })
    }, [])
    return (
        <div>
            <h1>{'Lugares para o jogo: '}</h1>
            <div className="card-grid">
                {chairs.map((obj, i) => {
                    if (obj.is_occupied) {
                        return (
                            <div className="card">
                                <div className="header">
                                    <TextBox title={'Lugar ' + i}/>
                                </div>
                                <div className="content">
                                    <TextBox title={'Ocupado'} />
                                </div>
                                
                            </div>
                        )
                    } else {
                        return (
                            <div className="card">
                                <div className="header">
                                <TextBox title={'Lugar ' + i}/>
                                </div>
                                <div className="content">
                                    <Button text='Comprar Ingresso' to={`/rent-page?${i}`}/>
                                </div>
                            </div>
                        )
                    }
                    
                })}
            </div>
        </div>
    )
}