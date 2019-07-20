import React from 'react';
import { View, Platform, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { createStackNavigator, createDrawerNavigator, createAppContainer, DrawerItems, SafeAreaView } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent';
import AboutUs from './AboutUsComponent';
import ContectUs from './ContectUs';


const HomeNavigator = createStackNavigator({
  Home: { screen: Home },
}, {
  navigationOptions: ({ navigation }) => ({
    headerLeft: <Icon name="menu" size={24} 
      color= 'white'
      onPress={ () => navigation.toggleDrawer() } 
    />          
  }) 
});

const AboutNavigator = createStackNavigator({
  About: { screen: AboutUs },
}, {
  navigationOptions: ({ navigation }) => ({
    headerLeft: <Icon name="menu" size={24} 
      color= 'white'
      onPress={ () => navigation.toggleDrawer() } 
    />          
  }) 
});

const ContectNavigator = createStackNavigator({
  Contect: { screen: ContectUs },
},{
  navigationOptions: ({ navigation }) => ({
    headerLeft: <Icon name="menu" size={24} 
      color= 'white'
      onPress={ () => navigation.toggleDrawer() } 
    />          
  }) 
});

const MenuNavigator = createStackNavigator({
  Menu: { screen: Menu,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <Icon name="menu" size={24} 
        color= 'white'
        onPress={ () => navigation.toggleDrawer() } 
      />          
    })  
  },
  Dishdetail: { screen: Dishdetail }
},{
  initialRouteName:'Menu'
});

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <View style={styles.drawerHeader}>
        <View style={{flex:1}}>
        <Image source={require('../images/logo.png')} style={styles.drawerImage} />
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
        </View>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const MainNavigator = createDrawerNavigator({
  Home: 
    { screen: HomeNavigator,
      navigationOptions: {
        title: 'Home',
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor, focused }) => (
          <Icon
            name='home'
            type='font-awesome'            
            size={24}
            color={tintColor}
          />
        ),
      }
    },
  About: 
    { screen: AboutNavigator,
      navigationOptions: {
        title: 'About Us',
        drawerLabel: 'About Us',
        drawerIcon: ({ tintColor, focused }) => (
          <Icon
            name='info-circle'
            type='font-awesome'            
            size={24}
            color={tintColor}
          />
        ),
      }, 
    },
  Menu: 
    { screen: MenuNavigator,
      navigationOptions: {
        title: 'Menu',
        drawerLabel: 'Menu',
        drawerIcon: ({ tintColor, focused }) => (
          <Icon
            name='list'
            type='font-awesome'            
            size={24}
            color={tintColor}
          />
        ),
      }, 
    },
  Contect: 
    { screen: ContectNavigator,
      navigationOptions: {
        title: 'Contect Us',
        drawerLabel: 'Contect Us',
        drawerIcon: ({ tintColor, focused }) => (
          <Icon
            name='address-card'
            type='font-awesome'            
            size={24}
            color={tintColor}
          />
        ),
      }, 
    }    
}, {
  drawerBackgroundColor: '#D1C4E9',
  contentComponent: CustomDrawerContentComponent
});

const Main = createAppContainer(MainNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#512DA8',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60
  }
});
  
export default Main;
