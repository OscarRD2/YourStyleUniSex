import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  LayoutAnimation,
  ImageBackground, 
  Dimensions
} from "react-native";
import * as firebase from "firebase"
import LogoApp from "../assets/icon1.png";
import Fondo from '../assets/FondoUniSex.jpg'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    email: "",
    password: "",
    errorMessage: null
  };

  handleLogin = () => {
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.fondo} source={Fondo}>
          <StatusBar barStyle={"light-content"}></StatusBar>
          <View style={styles.greeting}>
            
          </View>
          <View style={styles.errorMessage}>
            {this.state.errorMessage && (
              <Text style={styles.error}>{this.state.errorMessage}</Text>
            )}
          </View>
          <View style={styles.form}>
            <View>
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
          <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
            <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign in</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ alignSelf: "center", marginTop: 32 }}
            onPress={() => this.props.navigation.navigate("Register")}
          >
            <Text style={{ color: "#414959", fontSize: 13 }}>
              New to YourStyle?{" "}
              <Text style={{ fontWeight: "500", color: "#E9446A" }}>Sign up</Text>
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  greeting: {
    marginTop: 100,
    width: 150,
    height: 150,
    alignContent: 'center',
    marginLeft: '27%',
    marginBottom: 40

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
    height: 40,
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
