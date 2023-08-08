import {StyleSheet} from 'react-native';
import React from 'react';
import Header from './src/components/header';
import Products from './src/components/products';
import {Provider} from 'react-redux';
import store from './src/components/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Products />
    </Provider>
  );
};

export default App;
