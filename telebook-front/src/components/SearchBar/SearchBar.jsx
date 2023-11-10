import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import styles from './SearchBar.module.css'

function SearchBar(props) {  
    return (
        <InputGroup>
                <Form.Control
                    onChange={(e) => props.onChange(e.currentTarget.value)}
                    className = {styles.form}
                    placeholder="Начните вводить запрос"
                    aria-label="Начните вводить запрос"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
    );
}

export default SearchBar