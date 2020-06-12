import React from "react";
import { View, Text, StyleSheet, TextInput,Dimensions, ImageBackground, TouchableOpacity } from "react-native";
import * as firebase from 'firebase';
import Fondo from '../assets/FondoUniSex.jpg'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default class ProfileScreen extends React.Component {
    state = {
        email: "",
        displayName: "",
        phoneNumber: "",
        emailVerified: null
    };

    
    signOutUser = () => {
        firebase.auth().signOut();
      };
      

      componentDidMount() {
        var { email, displayName, emailVerified, phoneNumber } = firebase.auth().currentUser;
        this.setState({ email, displayName, emailVerified, phoneNumber });
    }

    render() {
        return (
          <View style={styles.container}>
        <ImageBackground style={styles.fondo} source={Fondo}></ImageBackground>
          <Text style={styles.greeting}></Text>

          <View style={styles.errorMessage}>
          {this.state.errorMessage && (
            <Text style={styles.error}>{this.state.errorMessage}</Text>
          )}
          </View>

          <View style={styles.form}>
          
          <View style={{ marginTop: 32 }}>
                <Text style={styles.input}>Name</Text>
                    <TextInput
                        disabled="disabled"
                        style={styles.input}
                        autoCapitalize="none"
                        value={this.state.displayName}
                    />
                </View>

                <View style={{ marginTop: 32 }}>
                <Text style={styles.input}>Telefono</Text>
                    <TextInput
                        disabled="disabled"
                        style={styles.input}
                        autoCapitalize="none"
                        value={this.state.phoneNumber}
                    />
                </View>

          <View style={{ marginTop: 32 }}>
          <View>
                <Text style={styles.input}>E-Mail</Text>
                    <TextInput
                        disabled="disabled"
                        style={styles.input}
                        autoCapitalize="none"
                        value={this.state.email}
                    />
                </View>

          </View>

          <View style={{ marginTop: 32 }}>
          <View>
                <Text style={styles.input}>Contraseña</Text>
                    <TextInput
                        disabled="disabled"
                        style={styles.input}
                        autoCapitalize="none"
                        value={this.state.password}
                    />
                </View>

          </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={this.handleRegister}>
          <Text style={{ color: "#FFF", fontWeight: "500" }}>GUARDAR DATOS</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignSelf: "center", marginTop: 50, }} onPress={this.signOutUser}>
          <Text style={{ color: "#414959", fontSize: 13,marginTop:-35 }}>
            Salir de mi cuenta {" "}
            <Text style={{ fontWeight: "500", color: "#FFF" }}>LOG OUT</Text>
          </Text>
          </TouchableOpacity>
      </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greeting: {
    marginTop: 140,
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center"
  },
  errorMessage: {
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30
  },
  error: {
    color: "#E9446A",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center"
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30
  },
  inputTitle: {
    color: "#020203",
    fontSize: 10,
    textTransform: "uppercase"
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 15,
    fontSize: 15,
    color: "#161F3D"
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "#e08422",
    borderRadius: 4,
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  fondo: {
    flex: 1,
    height: screenHeight,
    width: screenWidth
  },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
});