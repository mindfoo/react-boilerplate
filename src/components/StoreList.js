// components/StoreList.js
import React, { Component } from 'react';
import axios from 'axios';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

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

        /* let apiCall = axios.create({
            baseURL: `${process.env.REACT_APP_SERVER}`,
            withCredentials: true
        });
        return (apiCall.get(`/stores`).then(responseFromAPI => {
                this.setState({
                    listOfStores: responseFromAPI.data
                });
        })); */
    }


    render() {
        return (
            <>
                <h1 className="title">StoreList</h1>

                {this.state.listOfStores.map((store, i) => {
                    return(
                        <>
                            <Card 
                                key={i}
                                size="small" 
                                title={`Loja ${store.id}`} 
                                bodyStyle={{padding:0}} 
                                extra={<Link to={`/${store.id}`} >View</Link>} 
                                style={{marginTop: 20}} 
                            >
                            </Card>
                        </>
                    )
                })}

            </>
        )
    }

}
 
export default StoreList;