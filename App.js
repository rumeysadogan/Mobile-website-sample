import React,{Component} from 'react'
import {View,Text} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreens from './src/screens/login';
import HomeScreens from './src/screens/home';
import AboutScreens from './src/screens/about';
import ServicesScreens from './src/screens/services';
import HardwareScreens from './src/screens/hardware';
import SoftwareScreens from './src/screens/software';

  const Drawer = createDrawerNavigator();

export default class MyComponent extends Component {
constructor(props){
super(props)
}


render(){
return ( 
<NavigationContainer >
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="AcruxDT." component={HomeScreens} />
    <Drawer.Screen name="About Us" component={AboutScreens} />
    <Drawer.Screen name="Services" component={ServicesScreens} />
    <Drawer.Screen name="Hardware" component={HardwareScreens} />
    <Drawer.Screen name="Software" component={SoftwareScreens} />
    <Drawer.Screen name="Contact" component={LoginScreens} />
  </Drawer.Navigator>
</NavigationContainer>
);
}
}




