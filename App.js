import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "adaeb5b7674b723f84d69010bef2a96c";

export default class extends React.Component {
  state = {
    isLoading : true
  };

  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`
    );
    console.log(data);
  };

  getLocation = async() => {
    try{
      const response = await Location.requestPermissionsAsync();
      console.log(response)
      const {
        coords : {latitude, longitude}
      } = await Location.getCurrentPositionAsync()
      this.getWeather(latitude, longitude)
      this.setState({isLoading:false})
      
    }catch (error){
      Alert.alert("Can't find you.","So sad")
    }
    
  }

  componentDidMount(){
    this.getLocation();
  }

  render(){
    const { isLoading } = this.state;
    return isLoading ? <Loading/> : null;
  }
}