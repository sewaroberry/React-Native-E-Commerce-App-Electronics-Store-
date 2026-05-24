import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppContext from './context/AppContext';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [items, setItems] = useState([
    { 
      id: '1', 
      name: 'Wireless Headphones', 
      price: 59.99, 
      tag: 'Popular', 
      image: 'https://plus.unsplash.com/premium_photo-1679177184017-7777cdbb2ba5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8', 
      quantity: 0 
    },
    { 
      id: '2', 
      name: 'Smart Watch', 
      price: 79.99, 
      tag: 'New', 
      image: 'https://images.unsplash.com/photo-1664730022901-b1ef21076535?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      quantity: 0 
    },
    { 
      id: '3', 
      name: 'Bluetooth Speaker', 
      price: 39.99, 
      tag: 'Popular', 
      image: 'https://images.unsplash.com/photo-1598034989845-48532781987e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      quantity: 0 
    },
    { 
      id: '4', 
      name: 'Gaming Mouse', 
      price: 29.99, 
      tag: 'Sale', 
      image: 'https://images.unsplash.com/photo-1629429408209-1f912961dbd8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      quantity: 0 
    },
    { 
      id: '5', 
      name: 'USB-C Cable', 
      price: 19.99, 
      tag: 'New', 
      image: 'https://images.unsplash.com/photo-1615086169217-83e1c06c9f4f?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      quantity: 0 
    },
    { 
      id: '6', 
      name: 'Phone Case', 
      price: 14.99, 
      tag: 'Sale', 
      image: 'https://images.unsplash.com/photo-1674854263676-c5a7acd2406d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      quantity: 0 
    },
    { 
      id: '7', 
      name: 'Laptop Stand', 
      price: 49.99, 
      tag: 'New', 
      image: 'https://images.unsplash.com/photo-1641057349981-48bdca8fe870?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      quantity: 0 
    },
    { 
      id: '8', 
      name: 'Wireless Charger', 
      price: 34.99, 
      tag: 'Popular', 
      image: 'https://images.unsplash.com/photo-1603674554159-b62f6febbce5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      quantity: 0 
    },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    let found = false;
    let newCart = [];
    
    for(let i = 0; i < cart.length; i++) {
      if(cart[i].id == id) {
        found = true;
        newCart = [...newCart, {...cart[i], quantity: cart[i].quantity + 1}];
      }
      else {
        newCart = [...newCart, cart[i]];
      }
    }
    
    if(!found) {
      for(let i = 0; i < items.length; i++) {
        if(items[i].id == id) {
          newCart = [...newCart, {...items[i], quantity: 1}];
          break;
        }
      }
    }
    
    setCart(newCart);
  };

  const removeFromCart = (id) => {
    let newCart = [];
    for(let i = 0; i < cart.length; i++) {
      if (cart[i].id != id) {
        newCart = [...newCart, cart[i]];
      }
    }
    setCart(newCart);
  };

  const updateQuantity = (id, newQuantity) => {
    if(newQuantity == 0) {
      removeFromCart(id);
    }
    else {
      let newCart = [];
      for(let i = 0; i < cart.length; i++) {
        if(cart[i].id == id) {
          newCart = [...newCart, {...cart[i], quantity: newQuantity}];
        }
        else {
          newCart = [...newCart, cart[i]];
        }
      }
      setCart(newCart);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    let total = 0;
    for(let i = 0; i < cart.length; i++) {
      total += cart[i].price * cart[i].quantity;
    }
    return total;
  };

  const getCartItemsCount = () => {
    let count = 0;
    for (let i = 0; i < cart.length; i++) {
      count += cart[i].quantity;
    }
    return count;
  };

  const sharedData = {items, cart, addToCart, removeFromCart, updateQuantity, clearCart, getCartTotal, getCartItemsCount};

  return (
    <AppContext.Provider value={sharedData}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}