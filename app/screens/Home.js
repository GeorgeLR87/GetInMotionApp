import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = { uri: "https://www.xtrafondos.com/wallpapers/vertical/champinones-brillando-6513.jpg" };

export default function Home(){
    return(
        <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={styles.text}>Proyecto de Jorge Luis Rangel para Get In Motion Corp </Text>
        </ImageBackground>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "flex-start"
    },
    text: {
      color: "white",
      fontSize: 30,
      lineHeight: 50,
      fontWeight: "normal",
      textAlign: "center",
      
    }
  });