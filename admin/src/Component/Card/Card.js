import React from 'react'
import { Card} from 'react-bootstrap'
import './style.css'

export default function cardComponent(props) {
    return (
        <div>
            <Card className="ccard">
                <Card.Header>{props.header}</Card.Header>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                       {props.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
