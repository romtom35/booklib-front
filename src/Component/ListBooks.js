import React, {Component} from 'react';
import CardBook from "./CardBook";
import {Row} from "react-bootstrap";
import FormFilterBook from "./FormFilterBook";

class ListBooks extends Component {

    constructor(props) {
        super(props);
        this.state = {books: [], filters: {}};
    }

    componentDidMount() {
        fetch('http://localhost/php/booklib/public/book', {
            method: 'GET',
            headers: {'X-Requested-With': 'XMLHttpRequest'}
        })
            .then(response => response.json())
            .then(data => this.setState({books: data}))
    }

    handleFilters(filters) {
        this.setState({filters: filters});
    }

    idSelected(id) {
        this.props.idSelected(id);
    }

    render() {
        if (this.state.books.length === 0) {
            return <div>Chargement en cours...</div>
        }

        const filteredbooks = this.state.books.filter(book => {
            let result = false;
            if(this.state.filters.category && this.state.filters.category != 0){
                for (let i = 0; i < book.category.length; i++) {
                    if (book.category[i].id == this.state.filters.category) {
                        result = true;
                    }
                }
            }else{
                result = true;
            }

            return result;
        });
        const books = filteredbooks.map(book => <CardBook key={book.id} book={book}
                                                          idSelected={id => this.idSelected(id)}/>);
        return (
            <React.Fragment>
                <FormFilterBook handleFilters={filters => this.handleFilters(filters)}/>
                <Row>
                    {books}
                </Row>
            </React.Fragment>

        )
            ;
    }
}

export default ListBooks;