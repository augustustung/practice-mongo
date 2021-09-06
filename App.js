/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import Toast from 'react-native-toast-message';
import store from './store'
import BlogApp from './navigation'

function App() {
  return (
    <>
      <Provider store={store}>
        <BlogApp />
      </Provider>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  )
};

export default App;
