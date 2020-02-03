import React, { Component } from 'react';
import { View, Button, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';

/*********         IMPORT STYLES         **********/
import Containers from '../styles/container';
import stylesListItem from '../styles/listItem';
import stylesText from '../styles/text';

export default class RecommendedList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            properties: []
        }
    }

    componentDidMount() {
        return axios.get('https://my-json-server.typicode.com/eduardobvale/demo/rentals?_page=1&_limit=6')
            .then(
                response => { this.setState({ properties: response.data }) },
                error => { console.log(error); }
            );
    }


    render() {

        const { navigate } = this.props.navigation;

        const propertiesList = this.state.properties.map(property => {
            return (
                <View style={Containers.horizontalListContainer} key={property.id}>
                    <TouchableOpacity onPress={() => navigate('Item', property)}>
                        <Image style={stylesListItem.mainImage} source={{ uri: property.image }} />
                    </TouchableOpacity>
                    <Text style={stylesListItem.badgeTag}>New</Text>
                    <View style={stylesListItem.itemSmallText}>
                        <Text style={stylesListItem.itemSmallTextInner}>{property.title}</Text>
                    </View>
                </View>
            );
        });

        return (
            <View style={Containers.whiteContainer}>
                <Text style={stylesText.mainTitle}>Properties you might like... </Text>
                <ScrollView horizontal={true} style={Containers.scrollView}>
                    {propertiesList}
                </ScrollView>
            </View>

        );
    }
}
