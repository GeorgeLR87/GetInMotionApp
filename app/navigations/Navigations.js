
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home'
import typeWriter from '../screens/TypeWritter'
import carousel from '../screens/Carousel'
import snoweffect from '../screens/SnowEffect'


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>      
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Typewriter" component={typeWriter} />
      <Drawer.Screen name="Carousel" component={carousel} />
      <Drawer.Screen name="Snoweffect" component={snoweffect} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
