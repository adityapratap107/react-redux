import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

const Header = () => {
  const cartData = useSelector(state => state.reducer);
  const [cartItems, setCartItems] = useState(0);
  //   console.log('cartData', cartData);
  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingView}>
        <Text style={styles.headingText}>Add to cart using redux</Text>
      </View>
      <View style={styles.countView}>
        <Text style={[styles.headingText]}>{cartItems}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    flexDirection: 'row',
  },
  headingView: {
    backgroundColor: '#678678',
    borderRadius: 8,
    padding: 24,
  },
  headingText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#fff',
  },
  countView: {
    backgroundColor: '#678678',
    padding: 12,
    left: 20,
    borderRadius: 8,
  },
});
