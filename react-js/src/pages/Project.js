import React from "react";
import $ from "jquery";

export default class Project extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id,
            loaded: false,
            data: null
        }
    }

    componentDidMount() {
        $.getJSON(`http://192.168.1.113:5000/api/v1/project/${this.state.id}`)
        .done((data) => {
            this.setState({data, loaded: true});
        })
        .fail((err) => {
            console.error(err);
        });
    }

    render() {
        return (
            <main>
                {
                    this.state.loaded ? (
                        <section>
                            <h1>{}</h1>
                            <p>
                                {}
                            </p>
                            <hr/>
                        </section>
                    ) : (
                        <p>Loading project data...</p>
                    )
                }
            </main>
        );
    }
}