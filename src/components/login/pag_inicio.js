import React  from "react";
import Navegacion from "../layout/navegacion.js";
import imagenCat from "../../img/cat (1).png"

const pag_inicio = () => {

    return(
        <div className="principal">

           <Navegacion/>

            <div className='principal-grid'>
                <div className="principal_descripcion">
                    <h3>Estas Buscando Fotos de <span>Gatitos</span> ?</h3>
                    <p>Inicie seccion con <span>Google</span> para ver las mejores fotos de gatos</p>
                    <div className="principal_google">
                        <h4>TODO Google</h4>
                    </div> 
                </div>

                <div className="principal_logo">
                    <img className="logo_img" alt="Logo" src={imagenCat}/>
                </div> 
            </div>
        </div>
    )
}

export default pag_inicio;