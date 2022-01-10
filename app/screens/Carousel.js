import React, { Component } from "react";
import { ImageBackground, StyleSheet, Text, View, Dimensions } from "react-native";
import Carousel from "react-native-looped-carousel";

const { width, height } = Dimensions.get("window");
const image = { uri: "https://reactjs.org/logo-og.png" };
const image2 = { uri: "https://mywebarticle.com/wp-content/uploads/2021/08/Top-7-Reasons-to-Use-React-Native-for-Mobile-App-Development.jpg" };
const image3 = { uri: "https://miro.medium.com/max/1200/1*OlJRlBDWcCahIr6eDprXIQ.png" };
const image4 = { uri: "https://cardea.imgix.net/media/lists/cover_images/OriginalGithubExpoAvatar_YmljYOZ.png" };

export default class CarouselExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: { width, height },
    };
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  };

  render() {
    return (
      <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
        <Carousel
          //delay={2000}
          style={this.state.size}
          autoplay={false}
          pageInfo
          currentPage={2}
          onAnimateNextPage={(p) => console.log(p)}
        >          

          <View style={styles.container}>
            <ImageBackground
              source={image}
              resizeMode="cover"
              style={styles.image}>
              <Text style={styles.text}>App</Text>
            </ImageBackground>
          </View>

          <View style={styles.container}>
            <ImageBackground
              source={image2}
              resizeMode="cover"
              style={styles.image}>
              <Text style={styles.text}>Desarrollo</Text>
            </ImageBackground>
          </View>

          <View style={styles.container}>
            <ImageBackground
              source={image3}
              resizeMode="cover"
              style={styles.image}>
              <Text style={styles.text}>React Native</Text>
            </ImageBackground>
          </View>

          <View style={styles.container}>
            <ImageBackground
              source={image4}
              resizeMode="cover"
              style={styles.image}>
              <Text style={styles.text}>En Expo</Text>
            </ImageBackground>
          </View>

        </Carousel>
      </View>
    );

    
  }
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
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",      
    }
  });