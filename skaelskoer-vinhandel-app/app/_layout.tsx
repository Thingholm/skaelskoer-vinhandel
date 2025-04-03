import { Stack } from "expo-router";
import 'react-native-gesture-handler';

export default function RootLayout() {
  return (
  <Stack>
    <Stack.Screen name="(tabs)" options={{ headerShown: false}} />
  </Stack>
  );
}
