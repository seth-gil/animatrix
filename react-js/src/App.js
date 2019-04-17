import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ImageInput from './components/ImageInput';

class App extends React.Component {
  state = {
    files: null
  };

  handleChange = (event) => {
    console.log("e.t.f", event.target.files);
    this.setState({files: event.target.files});
  }

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state.files);
    
    var formData = new FormData();
    var fileList = this.state.files;
    for(var index = 0; index < fileList.length; index++) {
      formData.append('file' + index, fileList.item(index));	
    }
  
    fetch("http://192.168.1.113:5000/api/v1/video/tester", {
      method:'POST',
      body:formData	
    }).then(function(res) {
      console.log('Status', res);
    }).catch(function(err) {
      console.log('Error', err);
    });
  }

  render() {
    return (
      <div className="App">
        <Form onSubmit={this.handleSubmit.bind(this)} encType="multipart/form-data">
          <ImageInput change={this.handleChange.bind(this)} />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default App;
