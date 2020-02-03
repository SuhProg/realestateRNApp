import { StyleSheet } from 'react-native';
import stylesColors from './colors';

const stylesItem = StyleSheet.create({
    itemImage: {
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        width: '100%',
        height: 300,
        flex: 1
    },
    itemBoxInfo: {
        backgroundColor: stylesColors.midnightBlue,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    itemTextInfo: {
        color: stylesColors.white

    }
});

export default stylesItem;