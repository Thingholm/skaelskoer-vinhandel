import React, { useState, useRef } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Drawer, IconButton, PaperProvider, BottomNavigation, MD3LightTheme } from "react-native-paper";
import { DrawerLayout, GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
  const [active, setActive] = useState('home');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef<DrawerLayout>(null);

  const toggleDrawer = () => {
    try {
      if (drawerRef.current) {
        if (drawerOpen) {
          drawerRef.current.closeDrawer();
        } else {
          drawerRef.current.openDrawer();
        }
        setDrawerOpen(!drawerOpen);
      }
    } catch (error) {
      console.log('Drawer error:', error);
    }
  };

  const renderDrawerContent = () => {
    return (
      <View style={styles.drawerContent}>
        <Drawer.Section>
          <Drawer.Item 
            label="Home"
            active={active === 'home'}
            onPress={() => {
              setActive('home');
              toggleDrawer();
            }}
          />
          <Drawer.Item  
            label="Products"
            active={active === 'products'}
            onPress={() => {
              setActive('products');
              toggleDrawer();
            }}
          />
          <Drawer.Item  
            label="About"
            active={active === 'about'}
            onPress={() => {
              setActive('about');
              toggleDrawer();
            }}
          />
        </Drawer.Section>
      </View>
    );
  };

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

  const theme = {
    ...MD3LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      secondaryContainer: '#D3D3D3',
    },
  };

  return (
    <View style={styles.outerContainer}>
      <StatusBar style="auto" />
      <GestureHandlerRootView style={{flex: 1}}>
        <PaperProvider theme={theme}>
          <DrawerLayout
            ref={drawerRef}
            drawerPosition="left"
            drawerType="front"
            drawerWidth={250}
            drawerBackgroundColor="#FFFFFD"
            renderNavigationView={renderDrawerContent}
            onDrawerOpen={() => setDrawerOpen(true)}
            onDrawerClose={() => setDrawerOpen(false)}
          >
            <View style={styles.container}>
              <StatusBar style="auto"/>
              <View style={styles.headerContainer}>
                <IconButton
                  icon="menu"
                  iconColor="#FFFFFD"
                  size={24}
                  style={styles.menuButton}
                  onPress={toggleDrawer}
                />
                <Image
                  source={require('@/assets/images/Skaelskoer_vinhandel_logo.png')}
                  style={styles.headerImage}
                  resizeMode="contain"
                />
              </View>
              <BottomMenu/>
            </View>
          </DrawerLayout>
        </PaperProvider>
      </GestureHandlerRootView>
    </View>
  );
}



const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFD",
  },
  headerContainer: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#003538",
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  menuButton: {
    marginRight: 10,
    marginBottom: 35,
  },
  headerImage: {
    flex: 1,
    height: 40,
    marginBottom: 40,
    alignSelf: "center",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    padding: 20,
  },
  drawerContent: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#FFFFFD",
  },
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