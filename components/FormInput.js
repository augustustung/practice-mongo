import React, { useState } from 'react'
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    Image
} from 'react-native'
import { SCREEN_WIDTH } from '../ultis/Dimentions'

export default ({
    title,
    value,
    setValue,
    uri,
    placeholder,
    onFocus,
    disable,
    onBlur,
    borderColor,
    marginBottom,
    height,
    numberOfLine,
    ...rest
}) => {
    const [color, setColor] = useState('#EBF0FF')

    return (
        <View style={styles.containInput}>
            {title && <Text style={styles.title}>{title}</Text>}
            <View style={[styles.fromGroup, { borderColor: borderColor ? borderColor : color }]}>
                {uri && <Image
                    source={uri}
                    style={styles.leading}
                />}
                <TextInput
                    style={[styles.input, , { height: height }]}
                    numberOfLines={numberOfLine ? numberOfLine : 1}
                    editable={disable ? false : true}
                    selectTextOnFocus={disable ? false : true}
                    onFocus={() => {
                        setColor("#40BFFF")
                        onFocus && onFocus()
                    }}
                    onBlur={() => {
                        setColor("#EBF0FF")
                        onBlur && onBlur()
                    }}
                    value={value}
                    placeholderTextColor="#9098B1"
                    placeholder={placeholder ? placeholder : ''}
                    onChangeText={(text) => setValue(text)}
                    autoCorrect={false}
                    {...rest}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containInput: {
        marginBottom: 16,
        width: SCREEN_WIDTH - 32
    },
    fromGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5
    },
    leading: {
        width: 24,
        height: 24,
        marginLeft: 16,
        resizeMode: 'contain'
    },
    title: {
        marginBottom: 12,
        color: "#223263",
        fontWeight: '700',
        fontSize: 15,
        lineHeight: 21
    },
    input: {
        paddingVertical: 13,
        paddingHorizontal: 16,
        color: '#9098B1',
        fontWeight: '700',
        fontSize: 12,
        overflow: 'hidden',
        width: '80%',
        lineHeight: 21.7
    }
})