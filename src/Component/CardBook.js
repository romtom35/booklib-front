import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Badge } from 'reactstrap';
import {Col} from "react-bootstrap";

class CardBook extends Component {
    render() {
        const categories = this.props.book.category.map(category => <Badge color="success" pill key={category.id}>{category.name} </Badge>);
        return (
            <Col md={3}>
                <Card>
                    <CardImg top width="100%" src={"http://localhost/php/booklib/public/uploads/" + this.props.book.image} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{this.props.book.title}</CardTitle>
                        <CardSubtitle className="text-primary">{this.props.book.author.firstname} {this.props.book.author.lastname}</CardSubtitle>
                        {categories}
                        <CardText>{this.props.book.synopsis}</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </Col>


        )
            ;
    }
}

export default CardBook;