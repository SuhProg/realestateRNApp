import React, { useState, Component } from 'react';
import { View, Button, TextInput } from 'react-native';
import axios from 'axios';

/*********         IMPORT STYLES         **********/
import Containers from './../styles/container';
import stylesButton from './../styles/button';
import stylesInput from './../styles/input';
import stylesColors from '../styles/colors';



export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            TextInputValue: ''
        }
    }

    buttonSearchClickListener = () => {
        const { TextInputValue } = this.state;
        this.props.test('https://my-json-server.typicode.com/eduardobvale/demo/rentals?_page=1&_limit=10&q=' + TextInputValue);
    }

    handleKeyDown = () => {
        if (this.state.TextInputValue.length === 0) {
            this.props.test('https://my-json-server.typicode.com/eduardobvale/demo/rentals?_page=1&_limit=10');
        }
    }

    render() {
        return (
            <View style={Containers.flexContainer} >
                <TextInput
                    style={stylesInput.mainInput}
                    placeholder='Street, City'
                    onChangeText={TextInputValue => this.setState({ TextInputValue })}
                    onKeyPress={this.handleKeyDown}
                    clearButtonMode='while-editing'
                />
                <Button
                    color={stylesColors.darkBlue}
                    title="Filter"
                    onPress={this.buttonSearchClickListener} />

            </View>
        );
    }
}

