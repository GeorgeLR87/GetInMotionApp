import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import TypeWriter from "react-native-typewriter";

const image = {
  uri: "https://www.xtrafondos.com/wallpapers/vertical/champinones-brillando-6513.jpg",
};

export default function efectoMaquina() {
  return (   

    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>       

        <TypeWriter style={styles.text} typing={1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices faucibus nibh tincidunt gravida. Nam lectus ex, tincidunt quis viverra ut, fermentum sed augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc id finibus turpis. Pellentesque aliquam eros pellentesque diam volutpat, pellentesque pretium nunc dapibus.</TypeWriter> 
      </ImageBackground>
    </View>
  );
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
      fontSize: 20,
      lineHeight: 50,
      fontWeight: "normal",
      textAlign: "center",
      
    }
  });
