import { StyleSheet } from 'react-native'
import { SCREEN_WIDTH } from '../../ultis/Dimentions'

export default StyleSheet.create({
    plusButton: {
        width: 24,
        height: 24
    },
    scrollView: {
        padding: 16
    },
    input: {
        width: SCREEN_WIDTH - 49
    },
    flatList: {
        marginBottom: 16,
        alignSelf: 'center'
    }
})