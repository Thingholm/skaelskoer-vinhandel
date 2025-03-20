
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Drawer, IconButton, Modal, Portal, PaperProvider } from "react-native-paper";
import { useState } from "react";


export default function Index() {

  const [active, setActive] = useState('');
  const [ drawerVisible, setDrawerVisible] = useState(false);

  return (
    <PaperProvider>
      <View style={styles.container}>
        <StatusBar style="auto"/>
        <View style={styles.headerContainer}>
          <IconButton
            icon="menu"
            iconColor="#FFFFFD"
            size={24}
            style={styles.menuButton}
            onPress={() => setDrawerVisible(true)}
          />
          <Image
            source={require('@/assets/images/Skaelskoer_vinhandel_logo.png')}
            style={styles.headerImage}
            resizeMode="contain"
          />
        </View>
        <Portal>
          <Modal
            visible={drawerVisible}
            onDismiss={() => setDrawerVisible(false)}
            style={styles.drawer}
            >
                <Drawer.Section title="Menu">
                <Drawer.Item
                  label="Home"
                  active={active === 'home'}
                  onPress={() => {
                    setActive('home');
                    setDrawerVisible(false);
                  }}
                />
                <Drawer.Item
                  label="Products"
                  active={active === 'products'}
                  onPress={() => {
                    setActive('products');
                    setDrawerVisible(false);
                  }}
                />
                <Drawer.Item
                  label="About"
                  active={active === 'about'}
                  onPress={() => {
                    setActive('about');
                    setDrawerVisible(false);
                  }}
                />
              </Drawer.Section>
          </Modal>
        </Portal>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFD",
  },
  headerContainer: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#003538",
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  menuButton: {
    marginRight: 10,
  },
  headerImage: {
    flex: 1,
    height: 40,
    alignSelf: "center",
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    padding: 20,
  },
  drawer: {
    paddingTop: 30,
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
