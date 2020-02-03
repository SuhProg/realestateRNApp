import React, { Component } from 'react';
import { View, Button, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';

/*********         IMPORT STYLES         **********/
import Containers from '../styles/container';
import stylesListItem from '../styles/listItem';



export default class ItemsList extends Component {
    render() {

        const { navigate } = this.props.navigation;

        const formatPrice = (price) => {
            return `$${price}`
        }

        const propertiesList = this.props.properties.map(property => {
            return (
                <View style={stylesListItem.item} key={property.id}>
                    <View style={stylesListItem.badgeTag}>
                        <Text style={stylesListItem.badgeTagText}>New</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigate('Item', property)}>
                        <Image style={stylesListItem.mainImage} source={{ uri: property.image }} />
                    </TouchableOpacity>

                    <View style={stylesListItem.itemText}>
                        <Text style={stylesListItem.itemTextInner} >{property.title}</Text>
                        <Text style={stylesListItem.itemTextInner} >{formatPrice(property.value)}</Text>
                    </View>
                </View>
            );
        });

        return (
            <ScrollView style={Containers.listContainer} >
                {propertiesList}
            </ScrollView>
        );
    }
}

