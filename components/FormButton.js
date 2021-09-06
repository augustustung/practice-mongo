import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { SCREEN_HEIGHT } from '../ultis/Dimentions'
import CONSTANT from '../ultis/constant'

const FormButton = ({
    title,
    titleColor,
    onPress,
    backgroundColor,
    borderColor
}) => {
    return (
        <TouchableOpacity
            style={[styles.btn, {
                borderColor: borderColor ? borderColor : "#fff",
                borderWidth: borderColor ? 1 : 0,
                backgroundColor: backgroundColor ? backgroundColor : CONSTANT.PRIMARY_RED,
            }]}
            onPress={onPress}
        >
            <Text style={[styles.title, {
                color: titleColor ? titleColor : "#fff"
            }]}>{title}</Text>
        </TouchableOpacity>
    )
}
export default FormButton
const styles = StyleSheet.create({
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        shadowColor: 'rgba(64, 191, 255, 0.24)',
        shadowOffset: { width: 0, height: 3 },
        height: SCREEN_HEIGHT / 13,
        marginBottom: 18,
        elevation: 5
    },
    title: {
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 25.2
    }
})
