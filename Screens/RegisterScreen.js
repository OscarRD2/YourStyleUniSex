import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ImageBackgroundBase,
  ImageBackground
} from "react-native";
import * as firebase from "firebase";
import Fondo from '../assets/FondoUniSex.jpg'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default class RegisterScreen extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    errorMessage: null
  };

  handleRegister = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(userCredentials => {
        return userCredentials.user.updateProfile({
          name: this.state.name,
          emailVerified: false,
          phoneNumber: this.state.phoneNumber,
          disabled: false
        });
      })
      .catch(error => this.setState({ errorMessage: error.message }))
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
          <View>
            <Text style={styles.inputTitle}>Name</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={name => this.setState({ name })}
              value={this.state.name}
            />
          </View>
          <View style={{ marginTop: 32 }}>
            <Text style={styles.inputTitle}>Phone</Text>
            <TextInput
               style={styles.input}
               autoCapitalize="none"
               onChangeText={phoneNumber => this.setState({ phoneNumber })}
               value={this.state.phoneNumber}
            />
          </View>
          <View style={{ marginTop: 32 }}>
            <Text style={styles.inputTitle}>Email Address</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
          </View>

          <View style={{ marginTop: 32 }}>
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
          </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={this.handleRegister}>
          <Text style={{ color: "#FFF", fontWeight: "500" }}>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignSelf: "center", marginTop: 50, }} onPress={() => this.props.navigation.navigate("Login")}>
          <Text style={{ color: "#414959", fontSize: 13,marginTop:-35 }}>
            Already have an account?{" "}
            <Text style={{ fontWeight: "500", color: "#E9446A" }}>Login</Text>
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
  }
});
