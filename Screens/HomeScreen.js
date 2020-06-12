import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image, Dimensions } from "react-native";
import * as firebase from "firebase"
import { TouchableOpacity } from "react-native-gesture-handler";
import Fondo from '../assets/FondoUniSex.jpg'
import Shop from '../assets/Shop.png'
import Profile from '../assets/Perfil.png'
import Cita from '../assets/Cita.png'
import Catalogo from '../assets/Catalogo.png'
import Promociones from '../assets/Promociones.png'
import Ubicacion from '../assets/Ubicacion.png'


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;



export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    email: "",
    displayName: "",
    emailVerified: null
  };

  componentDidMount() {
    const { email, displayName, emailVerified } = firebase.auth().currentUser;
    this.setState({ email, displayName, emailVerified });
    if (emailVerified === false) {
      this.props.navigation.navigate("Login");
      window.alert("Necesitas verificar tu cuenta para poder utilizar la aplicacción - Revisa tu correo")
      const user = firebase.auth().currentUser;
      user.sendEmailVerification();
    }
  }

  

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.fondo} source={Fondo}>
          <View style={styles.greeting}>
          </View>

          <View style={styles.botones}>
          <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('Shop')}>
              <Image style={styles.Shop} source={Shop} />
              <Text style={styles.text}>Tienda </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('Profile')}>
              <Image style={styles.Shop} source={Profile} />
              <Text style={styles.text}>Mi Perfil </Text>
            </TouchableOpacity>
            
          </View>

          <View style={styles.botones}>
            <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('')}>
              <Image style={styles.Shop} source={Cita} />
              <Text style={styles.text}>Cita </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('')}>
              <Image style={styles.Shop} source={Catalogo} />
              <Text style={styles.text}>Catàlogo </Text>
            </TouchableOpacity>

          </View>

          <View style={styles.botones}>
            <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('Ubicacion')}>
              <Image style={styles.Shop} source={Ubicacion} />
              <Text style={styles.text}>Ubicación </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('Promotions')}>
              <Image style={styles.Shop} source={Promociones} />
              <Text style={styles.text}>Promociones </Text>
            </TouchableOpacity>

          </View>
          

        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  fondo: {
    flex: 1,
    height: screenHeight,
    width: screenWidth
  },
  greeting: {
    width: 50,
    height: 200,
    alignContent: 'center',
    marginLeft: 40,
    marginBottom: 40,
  },
  boton: {
    backgroundColor: '#F7F7F7',
    marginLeft: 60,
    borderRadius:140,
    width: 90,
    height: 100,
    alignItems: "center",
    paddingTop: 10,
    marginTop: 15
  },
  text: {
    paddingTop: 5
  },
  botones: {
    flexDirection: 'row',
    alignSelf: 'flex-start'
  },
  Shop: {
    height: 50,
    width: 50,
    
  }
});
