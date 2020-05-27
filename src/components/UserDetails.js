import React from 'react';
import {Button, Card, Container, ListGroup} from "react-bootstrap";

class UsersList extends React.Component {

    render() {
        let user = this.props.user;

        return (
            <Container className="App">
                <Card.Header><h2>User details</h2></Card.Header>
                <Card style={cardStyle}>
                    <Card.Img style={{'width': '128px', 'height': '128px'}} src={user.picture.large}/>
                    <ListGroup style={{'width': '70%', 'textAlign': 'left'}} variant="flush">
                        <ListGroup.Item><b>First Name:</b> {user.name.first}</ListGroup.Item>
                        <ListGroup.Item><b>Last Name:</b> {user.name.last}</ListGroup.Item>
                        <ListGroup.Item><b>Email:</b> {user.email}</ListGroup.Item>
                        <ListGroup.Item><b>Phone:</b> {user.phone}</ListGroup.Item>
                    </ListGroup>
                </Card>

                <Button variant="dark" style={{'margin': '10px 0 0 0'}}
                        onClick={() => this.props.changePage(null)}>Go back</Button>
            </Container>
        );
    }
}

export default UsersList;


const cardStyle = {
    'display': 'flex',
    'flexDirection': 'row',
    'justifyContent': 'space-around',
    'alignItems': 'center',
    'padding': '0 0 0 20px'
}