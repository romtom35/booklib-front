import React, {Component} from 'react';
import {Form, FormGroup, Input, Label} from 'reactstrap';

class FormFilterBook extends Component {


    constructor(props) {
        super(props);
        this.state = {categories: [], authors: []};
    }
    componentDidMount() {
        fetch('http://localhost/php/booklib/public/category', {
            method:'GET',
            headers:{'X-Requested-With': 'XMLHttpRequest'}
        })
            .then(response => response.json())
            .then(data => this.setState({categories: data}))

        fetch('http://localhost/php/booklib/public/author', {
            method:'GET',
            headers:{'X-Requested-With': 'XMLHttpRequest'}
        })
            .then(response => response.json())
            .then(data => this.setState({authors: data}))
    }
    render() {

        const categories = this.state.categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>);
        const authors = this.state.authors.map(author => <option key={author.id} value={author.id}>{author.firstname} {author.lastname}</option>);

        return (
            <Form>
                <FormGroup>
                    <Label>Catégories : </Label>
                    <Input type="select" name="category"
                           onChange={event => this.props.handleFilters({category: event.target.value})}>
                        <option disabled selected>Choisissez une catégories</option>
                        <option value='0'>Toutes les catégories</option>
                        {categories}
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label>Auteurs : </Label>
                    <Input type="select" name="author"
                           onChange={event => this.props.handleFilters({author: event.target.value})}>
                        <option disabled selected>Choisissez un auteur</option>
                        <option value='0'>Tous les auteurs</option>
                        {authors}
                    </Input>
                </FormGroup>
            </Form>


        );
    }
}

export default FormFilterBook;