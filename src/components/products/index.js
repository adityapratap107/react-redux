import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {addToCart} from '../redux/action';
import {useDispatch, useSelector} from 'react-redux';

const DATA = [
  {
    name: 'Puma Shoes',
    price: '2599/- Rs',
    id: 1,
  },
  {
    name: 'Samsung Mobile',
    price: '30000/- Rs',
    id: 2,
  },
  {
    name: 'Apple iPhone',
    price: '80000/- Rs',
    id: 3,
  },
  {
    name: 'Keyboard',
    price: '6000/- Rs',
    id: 4,
  },
  {
    name: 'Watch',
    price: '30000/- Rs',
    id: 5,
  },
];

const Products = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.reducer);
  const [myData, setMyData] = useState([]);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = value => {
    console.log('called', value);
    // setMyData(value);
    dispatch(addToCart(value));
    // cartItems.forEach(item => {
    //   console.log(item);
    //   if (item.id == value.id) {
    //     console.log('matched');
    //     setIsAdded(true);
    //   }
    // });
  };
  console.log('cart_data', cartItems);
  useEffect(() => {
    if (cartItems && cartItems.length) {
      cartItems.forEach(elem => {
        if (cartItems.includes(elem)) {
          console.log('matched', elem);
          setIsAdded(true);
        }
      });
    }
  }, [cartItems]);

  const renderItem = item => {
    return (
      <View key={item.id} style={styles.innerView}>
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
        {!isAdded ? (
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => handleAddToCart(item)}>
            <Text>Add to Cart</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => handleAddToCart(item)}>
            <Text>Remove from Cart</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.productsView}>
        <FlatList
          data={DATA}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 16,
    marginHorizontal: 8,
  },
  productsView: {
    width: '100%',
    flex: 1,
  },
  innerView: {
    backgroundColor: 'lightgreen',
    height: 200,
    marginBottom: 16,
    borderRadius: 8,
  },
  addButton: {
    backgroundColor: 'yellow',
    width: '34%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
  },
});
