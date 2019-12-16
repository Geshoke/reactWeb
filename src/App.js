import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class App extends Component {
  render() {
    return (
      <View style={[styles.app, {}]}>
        {/* <View style={[styles.app,{flexDirection:"row"}]}> */}
        <View
          style={{
            // flex:1,
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <View style={{}}>
            <Text style={{ color: "#ffffff" }}>hello</Text>
          </View>

          <View style={{ backgroundColor: "red" }}>
            <Text style={{ color: "#ffffff" }}>world</Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: "#d65056",
            margin: 15,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10
          }}
        >
          <Text>hello</Text>

          <View style={{ padding: 5 }}>
            <Carousel autoPlay>
              <div>
                <img src="https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg" />
                <p className="legend">Legend 1</p>
              </div>
              <div>
                <img src="https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg" />
                <p className="legend">Legend 2</p>
              </div>
              <div>
                <img src="https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg" />
                <p className="legend">Legend 3</p>
              </div>
            </Carousel>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    // marginHorizontal: "auto",
    // maxWidth: 500,
    backgroundColor: "#000000"
  }
});

export default App;
