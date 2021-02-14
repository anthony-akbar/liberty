import React, {Component} from 'react';
import {Card} from "react-bootstrap";

class DriverListItem extends Component {
    render() {
        console.log("this.props.data")
        return (
            <Card border="secondary" style={{ width: '18rem' }}>
                <Card.Header>{this.props.data.name}</Card.Header>
                <Card.Body>
                    <Card.Title>Secondary Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default DriverListItem;