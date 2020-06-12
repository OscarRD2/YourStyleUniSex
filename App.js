import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {Dimensions} from "react-native";
import * as firebase from 'firebase';
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import LoginScreen from './Screens/LoginScreen'
import LoadingScreen from './Screens/LoadingScreen'
import RegisterScreen from './Screens/RegisterScreen'
import ShopScreen from './Screens/ShopScreen'
import ShopDetailScreen from './Screens/ShopDetailScreen'
import PromotionsScreen from './Screens/PromotionsScreen'
import UbicacionScreen from './Screens/UbicacionScreen'
import Fondo from '../YourStyle/assets/FondoUniSex.jpg';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;



var firebaseConfig = {
  apiKey: "AIzaSyDciIsTaui0tdC2qw0jsqlDiuf9jA0G9cY",
  authDomain: "yourstyleunisex.firebaseapp.com",
  databaseURL: "https://yourstyleunisex.firebaseio.com",
  projectId: "yourstyleunisex",
  storageBucket: "yourstyleunisex.appspot.com",
  messagingSenderId: "746631536802",
  appId: "1:746631536802:web:82ff53f691f79e04bf77fb",
  measurementId: "G-4L5VZK9N0W"
};


// Initialize Firebase and Analytics
firebase.initializeApp(firebaseConfig);


const AppStack = createStackNavigator({
    Home: HomeScreen
  })
  const AuthStack = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen
  })

  const MenuStack = createStackNavigator({
    Menu: HomeScreen,
    Profile: ProfileScreen,
    Shop: ShopScreen,
    ShopDetail: ShopDetailScreen,
    Promotions: PromotionsScreen,
    Ubicacion: UbicacionScreen,
  })

  export default createAppContainer(
    createSwitchNavigator(
      {
        Loading: LoadingScreen,
        App: AppStack,
        Auth: AuthStack,
        Menu: MenuStack,
        
      },
      {
        initialRouteName: 'Loading'
      }
    )
  )