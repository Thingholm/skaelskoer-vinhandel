// For your dynamic category page
import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function CategoryScreen() {
  const { id } = useLocalSearchParams();
  
  // Now use the id to fetch and display content for this category
  return (
    <View>
      <Text>Category ID: {id}</Text>
      {/* Rest of your category page */}
    </View>
  );
}