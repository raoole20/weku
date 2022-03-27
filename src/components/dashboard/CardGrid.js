import React from 'react';

import { Card } from 'antd';
import { Link } from 'react-router-dom';

const  { Meta } = Card;


const CardGrid =  ( proms )=>{

    const tipo = proms.tipo;
    const description = ( tipo === '0' )? 'Mostrar todos los gatitos' : 'Mostrar por Categorias';
    const direccion = proms.direccion;

    return (
        <Link to={ direccion } className='direccion' >
            <Card 
                hoverable 
                style={ {width:300}}
                cover={<img alt="img-cats" src='../../img/cat (1).png' />} 
                className='card_grid'
            >
                <Meta title='Gatito ' description={description} />
            </Card>
        </Link>
    )
}

export default CardGrid;