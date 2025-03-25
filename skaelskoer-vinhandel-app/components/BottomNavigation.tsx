import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { BottomNavigation } from "react-native-paper";

const homeRoute = () => (
  <View style={styles.routeContainer}>
    <Text style={styles.heading}>Welcome to Skælskør Vinhandel</Text>
    <Text style={styles.paragraph}>Explore our selection of fine wines and spirits.</Text>
  </View>
);

const searchRoute = () => (
  <View style={styles.routeContainer}>
    <Text style={styles.heading}>Search</Text>
    <Text style={styles.paragraph}>Find your favorite wines and spirits.</Text>
  </View>
);

const accountRoute = () => (
  <View style={styles.routeContainer}>
    <Text style={styles.heading}>Account</Text>
    <Text style={styles.paragraph}>Manage your account and preferences.</Text>
  </View>
);

const cartRoute = () => (
  <View style={styles.routeContainer}>
    <Text style={styles.heading}>Shopping Cart</Text>
    <Text style={styles.paragraph}>View and manage your selected items.</Text>
  </View>
);

const BottomMenu = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'home', title: 'Hjem', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'search', title: 'Søg', focusedIcon: 'magnify', unfocusedIcon: 'magnify'},
    { key: 'account', title: 'Konto', focusedIcon: 'account', unfocusedIcon: 'account-outline'},
    { key: 'cart', title: 'Kurv', focusedIcon: 'cart', unfocusedIcon: 'cart-outline'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: homeRoute,
    search: searchRoute,
    account: accountRoute,
    cart: cartRoute,
  });

  return (
    <BottomNavigation 
      barStyle={{backgroundColor: '#003538'}}
      activeColor="#FFFFFD"
      inactiveColor="#FFFFFD"
      activeIndicatorStyle={{backgroundColor: '#004D52'}}
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      />
  );
};

const styles = StyleSheet.create({
  routeContainer: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
  }
});

export default BottomMenu;
