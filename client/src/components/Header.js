import {Navbar, Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header(){
    return (
      <Navbar bg="primary" variant="dark">
        <Container>
          <Link to="/" className='navbar-brand active'>Movies-App</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link active">Home</Link>
              <Link to="/add-movies" className="nav-link active">Add Movie</Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>    
    )
}

export default Header;