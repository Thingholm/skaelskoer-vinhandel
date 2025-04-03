import { View, Text, StyleSheet } from 'react-native';
import AppLayout from '@/components/AppLayout';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Tab() {
   return (
      <SafeAreaView>
        <AppLayout>
          <View style={styles.contentContainer}>
            <Text style={styles.heading}>Welcome to Skælskør Vinhandel</Text>
            <Text style={styles.paragraph}>Explore our selection of fine wines and spirits.</Text>
          </View>
        </AppLayout>
      </SafeAreaView>
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
