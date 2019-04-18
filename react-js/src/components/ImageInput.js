import React from "react";
import Form from "react-bootstrap/Form";

export default class ImageInput extends React.Component {
    constructor() {
        super();
        this.input = React.createRef();

        this.state = {
            displayText: "No images chosen"
        }
    }

    getDisplayText(event) {
        let files = event.target.files, text;

        if(files.length) 
            text = (files.length > 1) ? `${files.length} images` : files[0].name;
        else 
            text = "No images chosen";

        this.setState({displayText: text});
    }

    render() {
        return (     
            <Form.Group>
                <div className="custom-file">
                  <input
                    ref={this.input}
                    className="custom-file-input"
                    type="file" 
                    name="request" 
                    multiple 
                    accept="image/*" 
                    onChange={(event) => {this.getDisplayText(event); this.props.change(event)}} 
                    />
                  <label className="custom-file-label">
                    {this.state.displayText}
                  </label>
                </div>
            </Form.Group>
        );
    }
}