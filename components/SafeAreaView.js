import { SafeAreaView } from 'react-native'
import React from 'react'

const CustomSafeAreaView = ({ children }) => (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        {children}
    </SafeAreaView>
)

export default CustomSafeAreaView
