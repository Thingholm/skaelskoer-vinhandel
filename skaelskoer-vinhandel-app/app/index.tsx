
import { Text, View, StyleSheet, Image } from "react-native";


export default function Index() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{light: "#FFFFFD", dark: "#003538"}}
      headerImage={
        <Image
        source={require('@/assets/images/Skaelskoer_vinhandel_logo.png')}
        />
      }>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create ({
formatting: {
  flex: 1, 
  justifyContent: "center",
  alignItems: "center",
},
headerImage: {

},
});
