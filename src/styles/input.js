import { StyleSheet } from 'react-native';
import stylesColors from './colors';

const stylesInput = StyleSheet.create({
    mainInput: {
        height: 38,
        borderColor: stylesColors.blueGray,
        borderBottomWidth: 1,
        padding: 5,
        flex: .95
    },
});

export default stylesInput;