import React, { useState, Component } from 'react';
import { View, Button, Text } from 'react-native';

/*********         IMPORT STYLES         **********/
import Containers from './../styles/container';
import stylesInput from './../styles/input';
import stylesColors from '../styles/colors';
import stylesText from '../styles/text';



export default class FilterBar extends Component {
    render() {
        return (
            <View style={Containers.flexContainer} >
                <Button
                    color={stylesColors.darkBlue}
                    title='Price' />

                <Text style={stylesText.mainText}>
                    Filters
                </Text>
            </View>
        );
    }
}

