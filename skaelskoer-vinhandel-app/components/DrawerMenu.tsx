// import React, { useState } from "react";
// import { View, StyleSheet} from "react-native";
// import { Drawer } from "react-native-paper";
// import Categories from '@/data/Categories.json' 

// interface DrawerContentProps {
//     onItemPress?: (screen: string) => void;
// }

// const DrawerContent = ({ onItemPress }: DrawerContentProps) => {
//     const [active, setActive] = useState('home');

//     const handleItemPress = (screen: string) => {
//         setActive(screen);
//         if (onItemPress) {
//             onItemPress(screen);
//         }
//     };

//     return (
//     <View style={styles.drawerContent}>
//         <Drawer.Section>
//           {Categories.map(Item => {
//             return ( 
//               <Drawer.Item
//               label={Item.name}
//               key={Item.id}
//               active={active === Item.id.toString()}
//               onPress={() => handleItemPress(Item.id.toString())}
//               />
//             )
//           })}
//         </Drawer.Section>
//       </View>
//     );
// };

//   const styles = StyleSheet.create({
//     drawerContent: {
//         flex: 1,
//         paddingTop: 50,
//         backgroundColor: "#FFFFFD",
//       },
//   })

//   export default DrawerContent;