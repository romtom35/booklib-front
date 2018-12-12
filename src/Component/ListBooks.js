import React, {Component} from 'react';
import CardBook from "./CardBook";
import {Row} from "react-bootstrap";

class ListBooks extends Component {

    constructor(props) {
        super(props);
        this.state = {books: []};
    }
    componentDidMount() {
        fetch('http://localhost/php/booklib/public/book', {
            method:'GET',
            headers:{'X-Requested-With': 'XMLHttpRequest'}
        })
            .then(response => response.json())
            .then(data => this.setState({books: data}))
    }
    idSelected(id){
        this.props.idSelected(id);
    }

    render() {
        const books = this.state.books.map(book => <CardBook key={book.id} book={book} idSelected={id => this.idSelected(id)}/>);
        return (
            <Row>
               {books}
            </Row>

        );
    }
}

export default ListBooks;