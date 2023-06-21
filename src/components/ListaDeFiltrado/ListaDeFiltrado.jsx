import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
const ListaDeFiltrado=()=>{
      return (
        <div  className="pt-5">
            <DropdownButton id="dropdown-basic-button" title="Filtrar por tipo">
                <Link className="filtrado"  to="/productos/remeras">Remeras</Link><br />
                <Link className="filtrado"  to="/productos/abrigos">Abrigos</Link><br />
                <Link className="filtrado"  to="/productos/pantalones">Pantalones </Link><br />
                <Link className="filtrado"  to="/productos/accesorios">Accesorios</Link><br />

            </DropdownButton>
        </div>
      );
    }
    
export default ListaDeFiltrado;



                
                    
       