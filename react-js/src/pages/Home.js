import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import $ from "jquery";

export default class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            modalShow: false
        }

        this.name = React.createRef();
    }
    

    handleSubmit(event) {
        event.preventDefault();
        
        $.post("http://192.168.1.113:5000/api/v1/project", {name: this.name})
        .done(res => {
            let json = $.parseJSON(res);
            this.props.history.push(`/project/${json.id}`);
            console.log("response", json);
        })
        .fail(err => {
            console.error(err);
        });
    }

    handleShow() {
        this.setState({modalShow: true});
    }

    handleClose() {
        this.setState({modalShow: false});
    }

    render() {
        return (
            <main>
                <section style={{
                    textAlign: "center",
                    position: "absolute",
                    left: "50%", top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "100%"
                    }}>
                    <h1>Welcome to Animatrix!</h1>
                    <h4>The free online stop-motion animation software.</h4><br/>
                    <Button variant="secondary" onClick={this.handleShow.bind(this)}>Get started</Button>
                </section>

                <Modal show={this.state.modalShow} onHide={this.handleClose.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Let's get started!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            <Form.Group>
                                <Form.Label>
                                    What do you want to call your new project?
                                </Form.Label>
                                <Form.Control ref={this.name} type="text" placeholder="Enter project name"/>
                            </Form.Group>
                            <Form.Group>
                                <Button type="submit">
                                    Create
                                </Button>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                </Modal>
            </main>
        )
    } 
}