import { useEffect } from 'react';
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const SplashScreen = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Parent');
    }, 4000);
  }, []);
   
  
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        <Image
          source={require('../assets/splashlogo.png')}
          style={styles.logoImage}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0e6ec',
    },
    logoImage: {
      position: 'absolute',
      width: 260,
      height: 84,
      left: 65,
      top: 380,
    },
  });
  
  export default SplashScreen;