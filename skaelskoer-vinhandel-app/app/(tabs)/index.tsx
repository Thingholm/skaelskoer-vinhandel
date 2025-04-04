import AppLayout from "@/components/AppLayout";
import Slider from "@/components/Slider";
import { ImageSlider } from "@/data/SliderData";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Index() {
  return (
      <AppLayout>
        <SafeAreaView style={styles.contentContainer}>
         <Slider itemList={ImageSlider}/>
        </SafeAreaView>
      </AppLayout>
    
  );
}
  

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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