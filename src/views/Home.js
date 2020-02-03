import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import Containers from '../styles/container';
import ItemsList from '../components/ItemsList';


export default class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    constructor(props) {
        super(props);
        this.state = {
            properties: []
        }
    }

    componentDidMount() {
        this.getDataFromApi('https://my-json-server.typicode.com/eduardobvale/demo/rentals?_page=1&_limit=10');
    }

    getDataFromApi = (url) => {
        return axios.get(url)
            .then(
                response => { this.setState({ properties: response.data }) },
                error => { console.log(error); }
            );
    }

    test = (strr) => {
        console.log(strr)
    }

    render() {

        return (
            <View style={Containers.container}>
                <SearchBar test={this.getDataFromApi} />
                <ItemsList navigation={this.props.navigation} properties={this.state.properties} />
            </View>
        );
    }
}