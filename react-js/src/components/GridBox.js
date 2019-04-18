import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function GridBox(props) {
    return (
        <Card>
            <Card.Img variant="top" src={props.thumbnail} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Button variant="secondary">Go to project</Button>
            </Card.Body>
        </Card>
    );
}