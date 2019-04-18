import React from "react";
import $ from "jquery";
import GridBox from "../components/GridBox";
import CardColumns from "react-bootstrap/CardColumns";

export default class Projects extends React.Component {
    state = {
        loading: true
    }

    componentDidMount() {
        $.ajax({
            url: ""
        })
    }

    render() {
        const projects = [
            {
                id: 12393,
                name: "My First Lego Movie",
                thumbnail: "https://www.wctrib.com/sites/default/files/styles/16x9_620/public/fieldimages/0122/lego-96923822-1a72-11e9-8813-cb9dec761e73_0.jpg?itok=S18NDKeo",
                description: "A mildly boring film about some lego figures"
            },
            {
                id: 34923,
                name: "Another Project",
                thumbnail: "https://localtvwjw.files.wordpress.com/2018/11/31224231718_152a54689b_z.jpg?quality=85&strip=all&w=640",
                description: "Much of the same daft content. Surprisingly charming formality."
            }
        ];

        return (
            <main>
                <CardColumns>
                    {
                        projects.map((project, index) => {
                            return React.createElement(
                                GridBox, {...project, key: index}, null
                            )
                        })
                    }
                </CardColumns>
            </main>
        )
    } 
}  