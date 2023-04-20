import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img1 from './sw.png';
import './All.css';
import { FaUser } from 'react-icons/fa';

export default function Navbarmen() { 
    return (
        <div className='container-fluid bg-light'>
            <div className='container'>
                
                <Navbar className='bg-light' collapseOnSelect expand="md" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home"><img src={img1} className='navm' /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='bg-dark' />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto col-lg-12 justify-content-around">
                                <Nav.Link href="https://sportswander.com/" className='text-dark'>Book Events</Nav.Link>
                                <Nav.Link href="#" className='text-dark'>Book Venues</Nav.Link>
                                <Nav.Link href="https://in.bookmyshow.com/explore/cricket" className='text-dark'>Book Stadium Seats</Nav.Link>
                                <Nav.Link href="#" className='text-dark'><FaUser color="blue" />LogIn | SignUp</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                </div>
            </div>
        
    );
}
