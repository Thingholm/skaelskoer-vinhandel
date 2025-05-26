import { Text, StyleSheet, View, SafeAreaView, FlatList, Image, TouchableOpacity, Dimensions, ScrollViewComponent } from 'react-native'
import React from 'react'
import AppLayout from '@/components/AppLayout';
import Products from '@/data/Products.json'

interface Product {
  ProductNumber: string;
  Name: string;
  Price: number;
  Description: string;
  Producer: string;
  Amount: number;
  image?: string;
}

const ProductTile = ({ item } : {item: Product}) => {
  return (
    <TouchableOpacity style={styles.productTile}>
      <Image 
        source={{ uri: item.image || 'https://via.placeholder.com/150' }} 
        style={styles.productImage} 
        resizeMode="cover"
      />
      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={2}>{item.Name}</Text>
        <Text style={styles.productPrice}>{item.Amount} kr.</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function AllProducts() {
  return (
    <AppLayout>
      <SafeAreaView style={styles.contentContainer}>
        <Text style={styles.heading}>Alle produkter</Text>
        
        <FlatList
          data={Products}
          renderItem={({ item }) => <ProductTile item={item} />}
          keyExtractor={(item) => item.ProductNumber.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </SafeAreaView>
    </AppLayout>
  );
}

const { width } = Dimensions.get('window');
// Recalculate tile width with proper margins
const tileWidth = (width - 80) / 2; // 60 = container padding (20*2) + gap between tiles (20)

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  listContainer: {
    paddingHorizontal: 10, // Add a bit of padding inside the list
    paddingBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    marginTop: 20,
  },
  row: {
    justifyContent: 'space-around',
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  productTile: {
    width: tileWidth,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  productImage: {
    width: '100%',
    height: 150,
    backgroundColor: '#f9f9f9',
  },
  productInfo: {
    padding: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black', 
  }
});