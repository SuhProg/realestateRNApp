import { StyleSheet } from 'react-native';
import stylesColors from './colors';

const stylesText = StyleSheet.create({
    mainText: {
        fontSize: 13,
        lineHeight: 20,
        fontWeight: '400',
        color: stylesColors.black,
        textAlign: 'left',
    },
    mainTitle: {
        padding: 10,
        fontSize: 16,
        lineHeight: 22,
        fontWeight: 'bold',
        color: stylesColors.darkBlue,
        textAlign: 'left',
        textTransform: 'uppercase',
        letterSpacing: 0
    },
});

export default stylesText;