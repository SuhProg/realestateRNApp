import React, { useState, Component } from 'react';
import { View, Button, Text, Image } from 'react-native';
import RecommendedList from '../components/RecommendedList';
import Containers from '../styles/container';
import stylesItem from '../styles/item';
import { ScrollView } from 'react-native-gesture-handler';


export default class Item extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title')
        }
    }

    render() {

        const { state } = this.props.navigation;

        const formatPrice = (price) => {
            return `$${price}`
        }

        return (
            <ScrollView style={Containers.whiteContainer}>
                <View style={Containers.container}>
                    <Image style={stylesItem.itemImage} source={{ uri: state.params.image }} />
                    <View style={stylesItem.itemBoxInfo} >
                        <Text style={stylesItem.itemTextInfo}>{state.params.title}</Text>
                        <Text style={stylesItem.itemTextInfo}>{formatPrice(state.params.value)}</Text>
                    </View>

                </View>
                <RecommendedList navigation={this.props.navigation} />
            </ScrollView>
        );
    }
}