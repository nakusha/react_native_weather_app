import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze:{
        iconName:"weather-fog",
        gradient:["#BBD2C5", "#536976"],
        title:"Haze",
        subTitle:"Be careful when you driving!"
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title:"Thunderstorm",
        subTitle:"Don't go out when ThunderStorm"
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title:"Drizzle",
        subTitle:"Look out throw the window"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title:"Rain",
        subTitle:"Don't forget umbrella"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title:"Snow",
        subTitle:"play with snowman"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title:"Clear",
        subTitle:"Go out and take a walk"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title:"Clouds",
        subTitle:"Don't be depressed"
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title:"Mist",
        subTitle:"It will be fine"
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title:"Dust",
        subTitle:"Plase wearing mask"
    }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
        style={styles.container}
        colors={weatherOptions[condition].gradient}
        >
        <StatusBar barStyle="light-content"/>
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons 
                name={weatherOptions[condition].iconName} 
                size={96} 
                color="white"/>
            <Text style={styles.temp}>{temp}º</Text>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>{weatherOptions[condition].subTitle}</Text>
        </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition:PropTypes.oneOf([
      "Thunderstorm", 
      "Drizzle", 
      "Rain", 
      "Snow", 
      "Atmosphere", 
      "Clear", 
      "Clouds",
      "Haze",
      "Mist",
      "Smoke",
      "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  temp:{
    fontSize:42,
    color:"white"
  },
  halfContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  title: {
    color:"white",
    fontSize:44,
    fontWeight:"300",
    marginBottom:10,
    textAlign:"left"
  },
  subtitle :{
    color:"white",
    fontWeight:"600",
    fontSize:24,
    textAlign:"left"
  },
  textContainer:{
    alignItems: "flex-start",
    paddingHorizontal: 40,
    justifyContent: "center",
    flex: 1
  }
});