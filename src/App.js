
import React, { Component } from "react";

import { withRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

/* styles */
import 'antd/dist/antd.css';
import "./App.scss";

/* components */
import Header from './components/general/Header';
import StoreForm from './components/StoreForm';
import StoreList from './components/StoreList';
/* auth service */
import AuthService from './components/auth/AuthService';

 
class App extends Component {
    service = new AuthService();

    state = {
        isUserLoggedIn: false,
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
                    {/* <Route exact path='/' render={() =>(
                        !this.state.isUserLoggedIn ? (
                            <Redirect to='/www.pathToLogin.com'/>
                        ) : (
                            <StoreList />
                        )
                    )} /> */}
                    <Route exact path='/'>
                        <p>This is home</p>
                    </Route>

                    <Route path='/storeform'><StoreForm /></Route>
                    <Route path='/storelist'><StoreList /></Route>
                </Switch>
        </div>
        );
    }
}


 
export default withRouter(App) ;