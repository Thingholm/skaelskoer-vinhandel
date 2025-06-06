import React, { useState, useRef } from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Drawer, IconButton, PaperProvider, MD3LightTheme } from "react-native-paper";
import { DrawerLayout, GestureHandlerRootView } from "react-native-gesture-handler";
import Categories from '@/data/Categories.json'
import { useRouter } from "expo-router"

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const [active, setActive] = useState('home');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef<DrawerLayout>(null);
  const router = useRouter();

  const handleItemPress = (screen: string) => {
    setActive(screen);

    //Category ID til route mapping
    const categoryRoutes: Record<string, string> = {
      'home': '/',
      '1': '/categories/allProducts',
      '2': '/categories/redWine',
      '3': '/categories/whiteWine',
      '4': '/categories/dessertWine',
      '5': '/categories/sparklingWine',
      '6': '/categories/whisky',
      '7': '/categories/rum',
      '8': '/categories/liquor',
      '9': '/categories/specialities',
      '10': '/categories/glass',
      'aboutUs': '/aboutUs',
    };

    //Navigation vha. ovenstående mapping
    const route = categoryRoutes[screen];
    if(route) {
      router.push(route as any);
    }
  

    // Close drawer after selection
    if (drawerRef.current) {
      drawerRef.current.closeDrawer();
      setDrawerOpen(false);
    }
  };

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
        <ScrollView>
          <Drawer.Section>
            <Drawer.Item
            label="Hjem"
            key="Home"
            active={active === "home"}
            onPress={() => handleItemPress("home")}
            />
            {Categories.map(Item => {
              return ( 
                <Drawer.Item
                label={Item.name}
                key={Item.id}
                active={active === Item.id.toString()}
                onPress={() => handleItemPress(Item.id.toString())}
                />
              )
            })}
            <Drawer.Item
            label="Om os"
            key="aboutUs"
            active={active === "aboutUs"}
            onPress={() => handleItemPress("aboutUs")}
            />
          </Drawer.Section>
        </ScrollView>
      </View>
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
              <View style={styles.content}>
                {children}
              </View>
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
  },
  drawerContent: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#FFFFFD",
  },
});