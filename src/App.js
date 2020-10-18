import React, { Component } from "react";
//import {hot} from "react-hot-loader";
import { withRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

/* styles */
import "./App.css";
/* components */
import Header from './components/general/Header';
import StoreForm from './components/StoreForm';
import StoreList from './components/StoreList';
/* auth service */
import AuthService from './components/auth/AuthService';

 
class App extends Component {
    service = new AuthService();

    state = {
        isUserLoggedIn: null,
        loading: true,
    }

    componentDidMount() {
        this.setState({ loading: false });
    }
  
    setCurrentUser = (userObj) => {
        this.setState({
            isUserLoggedIn: userObj
        });
    }
  
    render() {
        return (
        <div className="App">
                <Header></Header>

                <Switch>
                    <Route exact path='/' render={() =>(
                        !isUserLoggedIn ? (
                            <Redirect to='/www.pathToLogin.com'/>
                        ) : (
                            <StoreList />
                        )
                    )} />
                    <Route path='/storeform'><StoreForm /></Route>
                    <Route path='/storelist'><StoreList /></Route>
                </Switch>
        </div>
        );
    }
}


 
export default withRouter(App);