import { useContext, useState } from "react";
import { Button, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import AppContext from '../context/AppContext';

const HomeScreen = ({navigation}) => {
    const {items, addToCart, getCartItemsCount} = useContext(AppContext);

    return (
        <View style={[styles.container]}>
          <View style={[styles.headerCont]}>
            <View style={[styles.headInfo]}>
              <Text style={[styles.shopName]}>Sewar Shop</Text>
              <Text style={[styles.shopTag]}>Choose your favorite gadgets</Text>
            </View>
            <Pressable onPress={() => navigation.navigate('Details')}>
              <Text style={[styles.cart]}>Cart ({getCartItemsCount()})</Text>
            </Pressable>
          </View>

          <View style={styles.specialDealsCont}>
            <View style={[styles.info]}>
              <Text style={[styles.A]}>Special Deals</Text>
              <Text style={[styles.B]}>Get the best tech accessories with a smooth shopping experience.</Text>
            </View>

            <Text style={[styles.C]}>Today Only</Text>
          </View>

          <ScrollView style={[styles.scrollView]} showsVerticalScrollIndicator={false}>
            {items.map((item) => (
              <View style={[styles.card]}>
                
                  <ImageBackground source={{uri: item.image}} style={[styles.imagePlaceholder]} resizeMode="cover">
                    <View style={[styles.tag, item.tag == 'Popular' ? styles.popularTag : item.tag == 'New' ? styles.newTag : styles.defaultTag]}>
                      <Text style={[styles.tagText]}>{item.tag}</Text>
                    </View>
                  </ImageBackground>

                <View style={[styles.cardCont]}>
                  <Text style={[styles.proName]}>{item.name}</Text>
                  <Text style={[styles.proPrice]}>${item.price}</Text>
                </View>

                <Pressable style={[styles.addButton]} onPress={() => addToCart(item.id)}>
                  <Text style={[styles.addButtonText]}>Add to Cart</Text>
                </Pressable>

              </View>
            ))}
          </ScrollView>

        </View>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#1a1a2e',
    paddingVertical: 20,
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
    fontSize: 15,
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
  specialDealsCont: {
    backgroundColor: '#252544',
    marginVertical: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 16,
    borderColor: '#39395a',
    borderWidth: 1,
  },
  info: {
    width: 210,
  },
  A: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  B: {
    fontSize: 14,
    color: '#c4b5fd',
  },
  C: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: '#ff6b95',
    borderRadius: 24,
  },
  scrollView: {
    flex: 1,
  },
  card: {
    borderWidth: 1,
    borderColor: '#39395a',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    backgroundColor: '#252544',
  },
  imagePlaceholder: {
    height: 170,
    backgroundColor: '#39395a',
    borderRadius: 8,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    overflow: 'hidden',
    marginBottom: 10,
  },
  imageText: {
    color: '#666666',
    fontSize: 14,
  },
  tag: {
    position: 'absolute',
    top: 8,
    left: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  popularTag: {
    backgroundColor: '#ff6b95',
  },
  newTag: {
    backgroundColor: '#09acc2ff',
  },
  defaultTag: {
    backgroundColor: '#ffb619ff',
  },
  tagText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  cardCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  proName: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
    flex: 1,
  },
  proPrice: {
    fontSize: 18,
    color: '#86efac',
    fontWeight: 'bold',
    marginLeft: 12,
  },
  addButton: {
    backgroundColor: '#7e57c2',
    paddingVertical: 10,
    borderRadius: 24,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;