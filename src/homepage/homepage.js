import React from "react";
import Title from '../components/title/title';
import Button from '../components/button/button';

export const HomePage = () => {
    return (
        <div>
            <Title head={'Bem vindo'} body={'aqui você pode comprar um ingresso para o próximo grande evento!'}/>
            <Button className='medium' text={'Comprar ingresso'} to='monitoring-page'/>
        </div>
    )
}