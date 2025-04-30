import { Text, StyleSheet, View, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import AppLayout from '@/components/AppLayout';

export default function AllProducts() {
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