import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import CreatePost from './CreatePost';

const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Blog" component={HomeScreen} />
            <Stack.Screen name="Create Or Update Post" component={CreatePost} />
        </Stack.Navigator>
    );
}

export default AppNavigation;

