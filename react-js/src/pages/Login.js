import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            valid: false
        };
    }

    render() {
        return (
            <Form>
                {
                    this.state.valid ? (
                        0
                    ) : (
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" />
                        
                            <Button type="submit">Submit</Button>
                        </Form.Group>
                    )
                }
            </Form>
        );
    }
}