import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ImageInput from '../components/ImageInput';
import Col from "react-bootstrap/Col";

export default class Upload extends React.Component {
  state = {
    files: null,
    project: null
  };

  handleChange = (event) => {
    console.log("e.t.f", event.target.files);
    this.setState({files: event.target.files});
  }

  handleSubmit = (event) => {
    var _this = this;

    event.preventDefault();

    console.log(this.state.files);
    
    var formData = new FormData();
    var fileList = this.state.files;
    for(var index = 0; index < fileList.length; index++) {
      formData.append("files[]", fileList.item(index), index + ".jpg");	
    }
    formData.append("project", "placeholder");
  
    fetch("http://192.168.1.113:5000/api/v1/upload", {
      method: 'POST',
      body: formData	
    }).then(function(res) {
      res.text().then((text) => {
        _this.setState({video: text});
      })
    }).catch(function(err) {
      console.log('Error', err);
    });
  }

  render() {
    return (
      <section>
        <h2>Upload Images</h2>
        <p>Choose a project and add some media to get started.</p>
        <Form onSubmit={this.handleSubmit.bind(this)} encType="multipart/form-data">
          <Form.Row>
            <Col sm>
              <Form.Group>
                <Form.Label>Choose images</Form.Label>
                <ImageInput change={this.handleChange.bind(this)} />
              </Form.Group>
            </Col>
            <Col sm>
              <Form.Group>
                <Form.Label>Choose project</Form.Label>
                <Form.Control as="select">
                  <option value="123">My First Project</option>
                  <option value="124">Lego Movie</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>
          <Button variant="primary" type="submit">
            Add Media
          </Button>
        </Form>
      </section>
    );
  }
}