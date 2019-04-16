import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ImageInput from './components/ImageInput';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Form action="http://localhost:8080/api/v1/video/1234" method="post" enctype="multipart/form-data">
          <ImageInput />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default App;
