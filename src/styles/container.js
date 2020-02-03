import { StyleSheet } from 'react-native';
import stylesColors from './colors';

const Containers = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: stylesColors.white,
        padding: 10,
    },
    centerContentContainer: {
        flex: 1,
        backgroundColor: stylesColors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteContainer: {
        backgroundColor: stylesColors.white,
    },
    listContainer: {
        marginTop: 15,
    },
    flexContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    horizontalListContainer: {
        width: 150,
        marginRight: 10,

        paddingBottom: 10
    },
    scrollView: {
        margin: 10,
    }
});

export default Containers;