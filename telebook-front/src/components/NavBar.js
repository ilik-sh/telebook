import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import {TelebookContext} from '../index'
import {observer} from 'mobx-react-lite'
import { DEANERIES_ROUTE, RECTORATE_ROUTE, SEARCH_ROUTE } from "../utils/consts";

const NavBar = observer(() => {
    const { user } = useContext(TelebookContext);
    return (
        <Navbar style={{ backgroundColor: '#A4BC92' }} data-bs-theme="light">
            <Container>
                <Nav className="ml-auto">
                    <Nav.Link href={RECTORATE_ROUTE}>Rectorate</Nav.Link>
                    <Nav.Link href={DEANERIES_ROUTE}>Deaneries</Nav.Link>
                    <Nav.Link href={SEARCH_ROUTE}>Search</Nav.Link>
                </Nav>
                {user.isAdmin ?
                    <Button variant="secondary">daseqw</Button>
                    :
                    null
                }
            </Container>
        </Navbar>
    );
})
export default NavBar