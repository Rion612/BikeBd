import React from 'react'

import { Form } from 'react-bootstrap'

function Input(props) {
    return (
        <>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>{props.label}</Form.Label>
                    <Form.Control 
                    type={props.type} 
                    placeholder={props.placeholder} 
                    value={props.value}
                    onChange = {props.onChange}
                    name={props.name}
                    icon ={props.icon}
                    />
                </Form.Group>
            </Form>

        </>
    )
}
export default Input
