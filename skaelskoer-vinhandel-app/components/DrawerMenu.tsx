import React, { useState } from "react";
import { View, StyleSheet} from "react-native";
import { Drawer } from "react-native-paper";

interface DrawerContentProps {
    onItemPress?: (screen: string) => void;
}

const DrawerContent = ({ onItemPress }: DrawerContentProps) => {
    const [active, setActive] = useState('home');

    const handleItemPress = (screen: string) => {
        setActive(screen);
        if (onItemPress) {
            onItemPress(screen);
        }
    };

    return (
    <View style={styles.drawerContent}>
        <Drawer.Section>
          <Drawer.Item 
            label="Alle produkter"
            active={active === 'Alle produkter'}
            onPress={() => handleItemPress('Alle produkter')}
          />
          <Drawer.Item  
            label="Products"
            active={active === 'products'}
            onPress={() => handleItemPress('products')}
          />
          <Drawer.Item  
            label="About"
            active={active === 'about'}
            onPress={() => handleItemPress('about')}
          />
        </Drawer.Section>
      </View>
    );
};

  const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: "#FFFFFD",
      },
  })

  export default DrawerContent;