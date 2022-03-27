import axios from 'axios';


async function  ApiCats( limits, page, order, breed_ids ){

    try{
        const peticion = axios.create( {
            baseURL: ` https://api.thecatapi.com/v1/images/search`,
            params: {
                limit: limits,
                page: page,
                order: order,
                breed_ids: breed_ids
            },
            headers: {'x-api-key': "e277ffd0-2c0c-4c91-9b1d-2f22a5b4bb89"}
        });
        
        const respuesta = await peticion.get();  
        return respuesta;

    }catch( err ){
        console.log( err );
        throw new Error('Error al conectarse a la api');
    }

}

export default ApiCats