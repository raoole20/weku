import React, { useEffect, useState, Fragment } from 'react';

import { Card, Pagination } from 'antd';
import {
    HeartOutlined,
    ShareAltOutliled
} from '@ant-design/icons';

import ApiCats from "../../config/ApiCats";

const { Meta } = Card;

const Allcats =  ()=> {
    const [ cards, setCarts ] = useState([]);

    if( !document.querySelector('.contenedor_allcats') ) {
        consultarApi(10, 0, "asc");
    }

    function cambiarPag(e){
        consultarApi( 0, e, '');
    }

    function consultarApi  ( limit, pag, order ){

        const num = document.querySelector('.ant-pagination-simple-pager input')?.value;
        console.log( num );

        ApiCats( 10, pag, "asc").then( ( respuesta )=>{
            const data = respuesta.data;
            console.log(data)
            setCarts( data );
        }); 

    }

    return (
        <Fragment> 
            <h2 className = "titulo_api"> todos Los Gatos</h2>>
            <div className="contenedor_allcats">
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

export default Allcats;