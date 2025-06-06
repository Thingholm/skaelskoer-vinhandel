import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Tabs } from 'expo-router';
import { View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs  
    screenOptions={{ 
        //farve på ikoner, når de aktive og inaktive
        tabBarActiveTintColor: 'white', 
        tabBarInactiveTintColor: 'white', 

        //Styling til tabbaren
        tabBarStyle: { 
            backgroundColor: '#003538',
            height: 100,
            paddingBottom: 10,
            paddingTop: 5
        },
        //Gør labels nemmere at læse
        tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            marginBottom: 5,
            marginTop: 10,
        },
        //Margin til ikoner
        tabBarIconStyle: { 
            marginTop: 5 
        }
        }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Hjem',
          tabBarIcon: ({ color, focused }) => (
            <View style={{
                //Sætter farven på ikonet alt efter om det er fokuseret eller ej
              backgroundColor: focused ? 'grey' : 'transparent',
              borderRadius: 20,
              width: 50,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <FontAwesome size={28} name="home" color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Søg',
          tabBarIcon: ({ color, focused }) => (
            <View style={{
                //Sætter farven på ikonet alt efter om det er fokuseret eller ej
              backgroundColor: focused ? 'grey' : 'transparent',
              borderRadius: 20,
              width: 50,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <FontAwesome size={28} name="search" color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Konto',
          tabBarIcon: ({ color, focused }) => (
            <View style={{
                //Sætter farven på ikonet alt efter om det er fokuseret eller ej
              backgroundColor: focused ? 'grey' : 'transparent',
              borderRadius: 20,
              width: 50,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <MaterialCommunityIcons size={28} name="account" color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Kurv',
          tabBarIcon: ({ color, focused }) => (
            <View style={{
                //Sætter farven på ikonet alt efter om det er fokuseret eller ej
              backgroundColor: focused ? 'grey' : 'transparent',
              borderRadius: 20,
              width: 50,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <AntDesign size={28} name="shoppingcart" color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}