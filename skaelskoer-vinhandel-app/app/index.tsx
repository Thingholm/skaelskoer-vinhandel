
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";


export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <View style={styles.headerContainer}>
        
        <Image
          source={require('@/assets/images/Skaelskoer_vinhandel_logo.png')}
          style={styles.headerImage}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFD",
  },
  headerContainer: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#003538",
    paddingTop: 50,
  },
  headerImage: {
    width: '80%',
    height: '80%',
    marginBottom: 50,
    marginLeft: 45,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    padding: 20,
  }
});
