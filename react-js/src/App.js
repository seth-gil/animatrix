import React from 'react';
import Form from "react-bootstrap/Form";
import ImageInput from './components/ImageInput';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Form>
          <ImageInput />
        </Form>
      </div>
    );
  }
}

export default App;
