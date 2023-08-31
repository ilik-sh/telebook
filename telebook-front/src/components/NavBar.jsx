import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';
import {Nav, Navbar, Button} from 'react-bootstrap';
import {TelebookContext} from '../index'
import {observer} from 'mobx-react-lite'
import { navRoutes } from "../routes";
import SearchForm from "./SearchForm";

const NavBar = observer(() => {
    const { user } = useContext(TelebookContext);
    return (
    <Navbar bg="light" data-bs-theme="light">
      <Container fluid >
        <Navbar.Brand>Телефонный справочник БГМУ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='text-nowrap me-auto'>
            {
                navRoutes.map((item) => (
                    <Nav.Link href={item.path} key={item.name} >{item.name}</Nav.Link>
                ))
            }
          </Nav>
          <SearchForm/>
          {
            user.isAdmin
            ? <Button variant="primary">Добавить</Button>
            : null
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
})
export default NavBar