import React from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, Dimensions } from "react-native";
import Fondo from '../assets/FondoUniSex.jpg'
//import * as firebase from 'firebase'
import Cita from '../assets/Cita.png'
import Plancha from '../assets/plancha.jpg'
import Cremas from '../assets/Cremas.png'
import Crema from '../assets/Crema.png'
import Secador from '../assets/Secador.jpg'
/*
import Camiseta from '../assets/camiseta.png'
import Banador from '../assets/nadar.png'
import Vikini from '../assets/bikini.png'
*/
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class ShopScreen extends React.Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.fondo} source={Fondo}>
                    <View style={styles.greeting}>

                    </View>
                    <View style={styles.botones}>
                        <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('ShopDetail')}>
                        <Image style={styles.Shop} source={Plancha} />
                            <Text style={styles.text}>Plancha </Text>
                            <Text style={styles.text}>139,99€ </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.boton} onPress={() => navigator.navigate('')}>
                        <Image style={styles.Shop} source={Cremas} />
                            <Text style={styles.text}>Tinte</Text>
                            <Text style={styles.text}>12,99€ </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.botones}>
                        <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('')}>
                        <Image style={styles.Shop} source={Crema} />
                            <Text style={styles.text}>Reparador Mask </Text>
                            <Text style={styles.text}>9,99€ </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.boton} onPress={() => navigator.navigate('')}>
                        <Image style={styles.Shop} source={Secador} />
                            <Text style={styles.text}>Secador</Text>
                            <Text style={styles.text}>49,99€ </Text>
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
    botones: {
        flexDirection: 'row',
        alignSelf: 'flex-start'
    },
    boton: {
        backgroundColor: '#F7F7F7',
        marginLeft: 30,
        borderRadius: 100,
        width: 150,
        height: 190,
        alignItems: "center",
        paddingTop: 20,
        marginTop: 8
    },
    text: {
        paddingTop: 6
    },
    greeting: {
        width: 130,
        height: 150,
        alignContent: 'center',
        marginLeft: '27%',
        marginBottom: 100
    },
    Shop: {
        height: 74,
        width: 110,
        marginTop: 10,
      }
});