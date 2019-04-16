import React from "react";
import $ from "jquery";

export default class ImageInput extends React.Component {
    constructor() {
        super();

        this.input = React.createRef();
    }

    handleChange = (event) => {

    }

    render() {
        $(this.input.current).click();

        return (
            <input 
                ref={this.input}
                type="file" 
                name="images" 
                multiple 
                accept="image/*" 
                onChange={this.handleChange.bind(this)} />
        );
    }
}