import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import githubLogo from '../asset/github.png';
import linkedinLogo from '../asset/linkedin.png'

function MyNavbar() {
  return (
    <>
      <Navbar variant="light" className="navbar">
        <Container>
            <Navbar.Brand href="/" className="navbar--name">Aishwarya C S</Navbar.Brand>
            <Nav>
            <Navbar.Brand href="https://www.linkedin.com/in/aishwarya-shyam/" target="_blank"><img src={linkedinLogo} width="40px"/></Navbar.Brand>
            <Navbar.Brand href="https://github.com/AishShyam" target="_blank"><img src={githubLogo} width="40px"/></Navbar.Brand>
            </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;