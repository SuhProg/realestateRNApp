import { StyleSheet } from 'react-native';
import stylesColors from './colors';

const stylesListItem = StyleSheet.create({
    item: {
        marginBottom: 10,
        position: 'relative'
    },
    itemText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        position: 'absolute',
        bottom: 0,
        backgroundColor: stylesColors.darkBlue + '80',
        width: '100%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    itemTextInner: {
        fontSize: 13,
        lineHeight: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        color: stylesColors.white
    },
    itemSmallText: {
        padding: 5,
        position: 'absolute',
        bottom: 10,
        backgroundColor: stylesColors.darkBlue + '80',
        width: '100%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        maxHeight: 30
    },
    itemSmallTextInner: {
        fontSize: 12,
        lineHeight: 22,
        fontWeight: 'bold',
        textAlign: 'left',
        color: stylesColors.white
    },
    horizontalItem: {
        marginBottom: 10,
        position: 'relative',
        flex: .5
    },
    mainImage: {
        borderRadius: 10,
        width: '100%',
        height: 150,
        flex: 1
    },
    badgeTag: {
        backgroundColor: stylesColors.midnightBlue,
        color: stylesColors.babyBlue,
        padding: 3,
        borderRadius: 5,
        position: 'absolute',
        top: 5,
        right: 5,
        zIndex: 2
    },
    badgeTagText: {
        color: stylesColors.babyBlue,
        fontSize: 10
    }
});

export default stylesListItem;