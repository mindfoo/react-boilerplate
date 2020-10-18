// components/StoreForm.js
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import {
    Form,
    Input,
    Button,
    Select,
    TreeSelect
} from 'antd';
 
/* class StoreForm extends Component {
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
} */

class StoreForm extends Component {
    state = {
        loja:'',
        loja1:'',
        loja2:'',
        input:'',
        myRef: React.createRef()
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]:value});
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.submitStoreForm(this.state);
    }


    render(){
        
        return (
        <>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="vertical"
                onSubmit={this.handleFormSubmit}
            >
                <Form.Item label="Input" name="input" value={this.state.input} onChange={ e => this.handleChange(e)}>
                    <Input placeholder="Write something here..."/>
                </Form.Item>
                <Form.Item label="Select" name="loja"> 
                    <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="TreeSelect" name="loja1">
                    <TreeSelect
                    treeData={[
                        {
                        title: 'Light',
                        value: 'light',
                        children: [
                            {
                            title: 'Bamboo',
                            value: 'bamboo',
                            },
                        ],
                        },
                    ]}
                    />
                </Form.Item>
                <Form.Item label="Input" name="loja2">
                    <Input placeholder="Write something here..."/>
                </Form.Item>

                <Form.Item>
                    <Button type="submit">Submit</Button>
                </Form.Item>
            </Form>
        </>
        );
    }
  };

 
export default StoreForm;
