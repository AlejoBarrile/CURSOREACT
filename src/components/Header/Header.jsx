
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'


const Header= () => {

   

  return (
  
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Link to="/">
            <Navbar.Brand><img src="../src/assets/logo.png" alt="LOGO INFAME"></img></Navbar.Brand>
          </Link>
         
        </Container>
        <Nav className="me-auto">
            <Link className='links' to="/">Inicio</Link>
            <Link className='links' to="/productos/">Productos</Link>
            <Link className='links' to="/nosotros">Nosotros</Link>
              <CartWidget></CartWidget>
          </Nav>
      </Navbar>
    </Container>
  );
}

export default Header;
