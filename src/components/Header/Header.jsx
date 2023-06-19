
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Header= () => {
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#"><img src="./src/assets/logo.png" alt="LOGO INFAME"></img></Navbar.Brand>
         
        </Container>
        <Nav className="me-auto">
            <Link className='links' to="/">Inicio</Link>
            <Link className='links' to="/productos">Productos</Link>
            <Link className='links' to="/nosotros">Nosotros</Link>
            <Link href="#pricing"><img className="carrito" src="../src/assets/carrito.png" alt="CARRITO" /></Link>
            <span className="cantidad__carrito">0</span>
          </Nav>
      </Navbar>
    </Container>
  );
}

export default Header;