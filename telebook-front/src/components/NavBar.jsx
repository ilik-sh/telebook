import React from "react";
import {Nav, Navbar, Container} from 'react-bootstrap';
import { navRoutes } from "../routes";

const NavBar = () => {
    return (
    <Navbar bg="light" data-bs-theme="light" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand>Телефонный справочник БГМУ</Navbar.Brand>
        <Navbar.Toggle  />
        <Navbar.Collapse  className="justify-content-end">
          <Nav>
            {
                navRoutes.map((item) => (
                    <Nav.Link href={item.path} key={item.name} >{item.name}</Nav.Link>
                ))
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}
export default NavBar