import React from "react";
import $ from "jquery";

export default class ImageInput extends React.Component {
    constructor() {
        super();

        this.input = React.createRef();
    }

    render() {
        return (
            <input 
                ref={this.input}
                type="file" 
                name="request" 
                multiple 
                accept="image/*" 
                onChange={this.props.change} />
        );
    }
}