import React from "react";
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import styled from "styled-components"

const Container = styled.View`
    flex:1;
    justifyContent:"flex-end";
    paddingHorizontal: 30;
    paddingVertical: 100;
    backgroundColor:"#FDF6AA";
`;

const LoadingText = styled.Text`
    color:"#2c2c2c";
    fontSize: 30;
`

export default function Loading(){
    return (
    //<View style={styles.container}>
    //<Text style={styles.text}>Getting the current Weather</Text>
    //</View>
    <Container>
        <StatusBar barStyle="dark-content"/>
        <LoadingText>Getting the current Weather</LoadingText>        
    </Container>
    
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor:"#FDF6AA"
    },
    text:{
        
    }
});