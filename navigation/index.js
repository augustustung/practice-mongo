import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppNavigation from './AppNavigation';

function BlogApp() {
    return (
        <NavigationContainer>
            <AppNavigation />
        </NavigationContainer>
    )
}



export default BlogApp