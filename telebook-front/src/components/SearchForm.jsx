import React from 'react';
import {Form, Row, Col, Button} from 'react-bootstrap'

function SearchForm(props) {
    return (
        <Form>
        <Row>
            <Col xs={7}>
                <Form.Control
                type="text"
                placeholder="Поиск"
                />
            </Col>
            <Col xs="auto">
                <Button type="submit" variant="secondary">Найти</Button>
            </Col>
        </Row>
        </Form> 
    );
}

export default SearchForm;