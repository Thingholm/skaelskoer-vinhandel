import AppLayout from "@/components/AppLayout";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Index() {
  return (
      <AppLayout>
        <SafeAreaView style={styles.contentContainer}>
          <Text style={styles.heading}>Welcome to Skælskør Vinhandel</Text>
          <Text style={styles.paragraph}>Explore our selection of fine wines and spirits.</Text>
        </SafeAreaView>
      </AppLayout>
    
  );
}
  

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 20,
    marginTop: -60,
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