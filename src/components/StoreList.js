// components/StoreList.js
import React, { Component } from 'react';
import axios from 'axios';

class StoreList extends Component {

    state = {
        listOfStores: []
    }

    componentDidMount() {
        this.getStores();
    }

    getStores = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(responseFromAPI => {
            console.log(responseFromAPI);
            this.setState({
                listOfStores: responseFromAPI.data
            })
        });

        /* let service = axios.create({
            baseURL: `${process.env.REACT_APP_SERVER}`,
            withCredentials: true
        });
        return (service.get(`/services`).then(responseFromAPI => {
                this.setState({
                    listOfStores: responseFromAPI.data
                });
        })); */
    }




    

    render() {
        return (
            <>
                <h1 className="App-title">StoreList</h1>

                {this.state.listOfStores.map((store, i) => {
                    return(
                    <div key={i}> {store.id} </div>
                    )
                })}

            </>
        )
    }

}
 
export default StoreList;