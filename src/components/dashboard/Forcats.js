import React, { useEffect, useState, Fragment } from 'react';

import { Card, Pagination, Select } from 'antd';
import {
    HeartOutlined,
    ShareAltOutliled
} from '@ant-design/icons';

import ApiCats from "../../config/ApiCats";
import Spinner from '../layout/Spinner';

const { Meta } = Card;
const { Option } = Select;

const Frocats =  ()=> {
    const [ cards, setCarts ] = useState([]);

    if( !document.querySelector('.contenedor_Frocats') ) {
        consultarApi(10, 0, "asc");
    }

    const params = {
        limit: 10,
        page: 0,
        order: 'asc'

    }
    function cambiarPag(e){
        params.page = e
        consultarApi( params.limit, params.e, params.page);
    }

    function consultarApi  ( limit, pag, order, breed = 'beng' ){

        ApiCats( limit, pag, order, breed).then( ( respuesta )=>{
            const data = respuesta.data;
            console.log(data)
            setCarts( data );
        }); 
    }

    function setParametros ( value ) {
        console.log('cambio', value)
        consultarApi( params.limit, params.page, value);
    }

    if( cards.length === 0 ) return( <Spinner/> );

    return (
        <Fragment> 
            <h2 className = "titulo_api"> Gatos por categorias</h2>>
            
            <Select defaultValue='beng' labelInValue onChange={ setParametros } style={{width:120}} allowClear >
                <Option value="beng">Benegal  </Option>
                <Option value="abys">Abyssinian</Option>
                <Option value="aege">Aegean</Option>
                <Option value="abob">Abob</Option>
                <Option value="acur">American-Curl</Option>
            </Select>

            <div className="contenedor_Frocats">
            {cards.map( ( card ) =>(
                <>
                <Card 
                    style={{}}
                    cover={
                        <img alt='cat' src={card.url}  className='imgcatas'/>
                    }
                    action={
                        <HeartOutlined twoTeneColor="#eb2f96" />
                    }
                >
                    <Meta 
                        title='Name cat'
                        description="descripcion de la api"
                    />
                </Card>
                </>
                ))}
            </div>

            <Pagination simple deafultCurrent={1} total={100}  onChange={  e => ( cambiarPag(e) ) } className='paginador'/> 
        </Fragment>     
    )   

}

export default Frocats;