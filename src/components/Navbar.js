import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import githubLogo from '../asset/github.png';
import linkedinLogo from '../asset/linkedin.png'
import leetcodeLogo from '../asset/leetcode2.png'
import mediumLogo from '../asset/medium2.png'
import programmerLogo from '../asset/programmer.png'


function MyNavbar() {
  return (
    <>
      <Navbar variant="light" className="navbar">
        <Container>
            <Navbar.Brand href="/" className="navbar--name">
              <div className="navbar-logo">
                <img src={programmerLogo} alt="Aishwarya Shyam portfolio" />
              </div>
            </Navbar.Brand>

            <Nav className="navbar-sections">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#certifications">Certifications and Research</Nav.Link>
           </Nav>

            <Nav className="navbar-socials">
              <Navbar.Brand href="https://www.linkedin.com/in/aishwarya-shyam/" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} width="40px" alt="LinkedIn"/></Navbar.Brand>
              <Navbar.Brand href="https://github.com/AishShyam" target="_blank" rel="noopener noreferrer"><img src={githubLogo} width="40px" alt="GitHub"/></Navbar.Brand>
              <Navbar.Brand href="https://leetcode.com/u/aishshyam/" target="_blank" rel="noopener noreferrer"><img src={leetcodeLogo} width="40px" alt="LeetCode"/></Navbar.Brand>
              <Navbar.Brand href="https://medium.com/@aishshyam" target="_blank" rel="noopener noreferrers"><img src={mediumLogo} width="40px" alt="Medium"/></Navbar.Brand>
            </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;