import NetflixLogo from "../../assets/images/NetflixLogo.png";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import "./Header.css";

function NavBar() {
  return (
    <Navbar
      expand="sm md"
      className="bg-body-1 bg-body-tertiary"
      data-bs-theme=""
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={NetflixLogo} width={100} alt="logo" />
        </Navbar.Brand>
        <Navbar.Collapse id="">
          <Nav>
            <div className="nav_dropdown">
              <NavDropdown
                title="Browse"
                id="basic-nav-dropdown"
                className="browse_hide"
              >
                <div className="nav_item">
                  <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    TV Shows
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Movies</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    New & Popular
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    My List
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Browse by Languages
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
