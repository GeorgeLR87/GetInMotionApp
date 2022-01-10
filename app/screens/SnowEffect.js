import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Snow from "react-native-snow";

const image = {
  uri: "https://www.xtrafondos.com/wallpapers/vertical/champinones-brillando-6513.jpg",
};

export default function efectoNieve() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Snow style={styles.snowflake} /> 
      
        
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  snowflake: {
    color: "blue",
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-start",
  },
  text: {
    color: "white",
    fontSize: 30,
    lineHeight: 50,
    fontWeight: "normal",
    textAlign: "center",
  },
});



