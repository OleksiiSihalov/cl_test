import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UsersList from "./components/UsersList";
import UserDetails from "./components/UserDetails";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    changePage = (user) => {
        this.setState({user: user})
    }

    render() {
        let page = <UsersList changePage={this.changePage}/>
        if (this.state.user !== null) {
            page = <UserDetails changePage={this.changePage} user={this.state.user}/>
        }

        return (
            <div className="App">
                {page}
            </div>
        );
    }
}

export default App;
