import React, {Component} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ListBooks from "./Component/ListBooks";
import {Container} from "reactstrap";
import {Route} from "react-router-dom";
import Contact from "./Component/Contact";
import Menu from "./Component/Menu";

class App extends Component {
    render() {
        return (
            <React.Fragment>
            <Menu/>
            <Container>
                <Route exact path="/" component={ListBooks}/>
                <Route path="/contact" component={Contact}/>
            </Container>
            </React.Fragment>
        );
    }
}

export default App;
