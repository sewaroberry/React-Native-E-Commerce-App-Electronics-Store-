import { useContext, useState } from "react";
import { Button, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import AppContext from '../context/AppContext';

const DetailsScreen = ({navigation}) => {
    const {cart, updateQuantity, removeFromCart, clearCart, getCartTotal} = useContext(AppContext);

    return (
        <View style={[styles.container]}>
            <View style={[styles.headerCont]}>
                <View style={[styles.headInfo]}>
                    <Text style={[styles.shopName]}>Your Cart</Text>
                    <Text style={[styles.shopTag]}>Review items before checkout</Text>
                </View>
                <Pressable onPress={() => navigation.navigate('Home')}>
                    <Text style={[styles.cart]}>Shop</Text>
                </Pressable>
            </View>

            <ScrollView style={[styles.scrollView]} showsVerticalScrollIndicator={false}>
                {cart.length === 0 ? (
                    <Text style={[styles.emptyText]}>Your cart is empty</Text>
                ) : (
                    cart.map((item) => (
                        <View key={item.id} style={styles.card}>
                            <View style={[styles.cardInfo]}>
                                <View style={[styles.A]}>
                                    <View style={[styles.circle]}>
                                        <Text style={[styles.letter]}>{item.name[0]}</Text>
                                    </View>
                                    <View style={[styles.B]}>
                                        <Text style={[styles.productName]}>{item.name}</Text>
                                        <Text style={[styles.productPrice]}>${item.price}</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.buttons}>
                                <Pressable 
                                    style={[styles.qtyBtn]}
                                    onPress={() => {
                                        if (item.quantity == 1) {
                                            removeFromCart(item.id);
                                        } else {
                                            updateQuantity(item.id, item.quantity - 1);
                                        }
                                    }}
                                >
                                    <Text style={[styles.qtyBtnText]}>-</Text>
                                </Pressable>
                                <View style={[styles.qtyCircle]}>
                                    <Text style={[styles.qtyText]}>{item.quantity}</Text>
                                </View>
                            </View>
                        </View>
                    ))
                )}
            </ScrollView>

            {cart.length > 0? (
                <View style={[styles.checkoutCard]}>
                    <View style={[styles.totalRow]}>
                        <Text style={[styles.totalLabel]}>Total</Text>
                        <Text style={[styles.totalPrice]}>${getCartTotal().toFixed(2)}</Text>
                    </View>

                    <View style={[styles.buttonsRow]}>
                        <Pressable style={[styles.clearBtn]} onPress={clearCart}>
                            <Text style={[styles.btnText]}>Clear Cart</Text>
                        </Pressable>
                        <Pressable style={[styles.checkoutBtn]}>
                            <Text style={[styles.btnText]}>Checkout</Text>
                        </Pressable>
                    </View>
                </View>
            ) : null}
        </View>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 20,
    backgroundColor: '#1a1a2e',
  },
  headerCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  headInfo: {
    flexDirection: 'column',
    gap: 4,
  },
  shopName: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  shopTag: {
    fontSize: 16,
    color: '#a5b4fc',
  },
  cart: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    backgroundColor: '#252544',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 29,
    borderColor: '#39395a',
    borderWidth: 1,
  },
  scrollView: {
    flex: 1,
    marginTop: 20,
  },
  emptyText: {
    color: '#a5b4fc',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 40,
  },
  card: {
    backgroundColor: '#252544',
    borderWidth: 1,
    borderColor: '#39395a',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardInfo: {
    flex: 1,
  },
  A: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#252544',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#39395a',
    borderWidth: 1,
  },
  letter: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  B: {
    flexDirection: 'column',
    gap: 4,
  },
  productName: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
  productPrice: {
    fontSize: 14,
    color: '#86efac',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  qtyBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#7e57c2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  qtyCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#39395a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  checkoutCard: {
    backgroundColor: '#252544',
    borderWidth: 1,
    borderColor: '#39395a',
    borderRadius: 12,
    padding: 16,
    marginTop: 24,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
  },
  totalPrice: {
    fontSize: 20,
    color: '#86efac',
    fontWeight: 'bold',
  },
  buttonsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  clearBtn: {
    flex: 2,
    backgroundColor: '#ff6b95',
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: 'center',
  },
  checkoutBtn: {
    flex: 1,
    backgroundColor: '#7e57c2',
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default DetailsScreen;