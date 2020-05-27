import React from 'react';
import {Card, Container, Pagination} from "react-bootstrap";
import axios from "axios";

class UsersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: null
        }
    }

    componentDidMount() {
        this.getUsers(1);
    }

    getUsers = (page) => {
        axios.get(`https://randomuser.me/api/?page=${page}&results=10&seed=cl_test`)
            .then(response => this.setState({users: response.data.results}))

    }

    render() {
        let pages = [];
        let usersList = <div/>;
        for (let n = 1; n <= 5; n++) {
            pages.push(
                <Pagination.Item key={n} onClick={() => this.getUsers(n)}>
                    {n}
                </Pagination.Item>,
            );
        }
        if (this.state.users !== null) {
            usersList = this.state.users.map((user, i) =>
                <Card key={i} style={cardStyle} onClick={() => this.props.changePage(user)}>
                    <Card.Img style={{'width': '72px', 'height': '72px'}}
                              src={user.picture.medium}/>
                    <Card.Body style={{'padding': '0 0 0 20px', 'textAlign': 'left'}}>
                        <h4>{user.name.first} {user.name.last}</h4>
                        <p style={{opacity: '0.5'}}>{user.phone}</p>
                    </Card.Body>
                </Card>
            );
        }

        return (
            <Container className="App">
                <Card.Header><h2>Users</h2></Card.Header>
                <div>{usersList}</div>
                <Pagination style={paginationStyle}>{pages}</Pagination>
            </Container>
        );
    }
}

export default UsersList;


const cardStyle = {
    'display': 'flex',
    'flexDirection': 'row',
    'height': '74px'
}

const paginationStyle = {
    'margin': '10px 0 0 0',
    'display': 'flex',
    'flexDirection': 'row',
    'justifyContent': 'center',
    'alignItems': 'center'
}
