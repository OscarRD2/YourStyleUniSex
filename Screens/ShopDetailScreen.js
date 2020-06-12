import React from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Dimensions, Image } from "react-native";
import plancha from '../assets/plancha.jpg'
/*
import HoodieGrey from '../assets/hoodie-grey.jpg'
*/
import Fondo from '../assets/FondoUniSex.jpg'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class ShopDetailScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.fondo} source={Fondo}>
                    <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('')}>
                        <TouchableOpacity style={styles.productos} onPress={() => this.props.navigation.navigate('')}>
                            <Image style={styles.image} source={plancha} />
                            <Text style={styles.text}>Plancha de pelo GHD</Text>
                            <Text style={styles.detalles}>Detalles:</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    fondo: {
        flex: 1,
        height: screenHeight,
        width: screenWidth,
        
    },
    boton: {
        backgroundColor: '#FFFFFF80',
        marginLeft: 20,
        borderRadius: 1,
        width: screenWidth - 30,
        height: screenHeight - 160,
        alignItems: "center",
        paddingTop:20,
        marginTop: 270
    },
    productos: {
        marginLeft: 10,
        backgroundColor: "white",
        width: screenWidth - 50,
        height: 370,
        flexDirection: 'row',
        alignSelf: 'flex-start'
    },
    image: {
        flex: 1,
        marginRight: 1,
        marginTop: -170,
        marginBottom: 10,
        resizeMode: 'contain'
    },
    text: {
        
        marginTop:140,
        marginLeft: -100,
    },
    detalles: {
     marginRight: 70,
     marginTop: 200,
    }   
});
