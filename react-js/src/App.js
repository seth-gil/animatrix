import React from 'react';
import {Route} from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavBar from "./components/Navigator";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Projects from "./pages/Projects";
import Project from "./pages/Project";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Container style={{marginTop: "15px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/upload/" component={Upload} />
          <Route path="/projects/" component={Projects} />
          <Route path="/project/:id/" component={Project} />

          <video autoPlay controls width="400" height="300">
            <source src={require("./default.mp4")} type="video/mp4" />
          </video>
        </Container>
      </div>
    );
  }
}
