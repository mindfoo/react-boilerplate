// components/StoreForm.js
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
 
class StoreForm extends Component {
    componentDidMount(){
        axios.get('www.whereAlltheStoresarecomingFrom.com')
        .then(response => {
            this.setState({stores: response.data});
        });
    }

    state = {
        stores: []
    }

    render(){
        return (
            <h1 className="App-title">StoreForm</h1>
        );
    }
}


 
export default StoreForm;
