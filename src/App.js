import React, {Component} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Grid} from 'react-bootstrap';
import './App.css';
import ListBooks from "./Component/ListBooks";

class App extends Component {
    render() {
        return (
            <Grid>
                    <ListBooks idSelected={id => this.setState({id: id})}/>
            </Grid>
        );
    }
}

export default App;
