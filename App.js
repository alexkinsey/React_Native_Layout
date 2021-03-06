import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, Dimensions } from 'react-native';
// INSTALL npm i @react-native-community/hooks
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  const { landscape } = useDeviceOrientation();

  return (
    // <SafeAreaView style={styles.container}>
    //   <View
    //     style={{
    //       backgroundColor: 'blue',
    //       width: '100%',
    //       height: landscape ? '100%' : '30%',
    //     }}
    //   ></View>
    //   <StatusBar style="auto" />
    // </SafeAreaView>
    <View style={{
      backgroundColor: 'white',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      alignContent: 'center', //needs wrapping
      // flexWrap: 'wrap',
    }}>
      <View style={{
        backgroundColor: 'dodgerblue',
        flexBasis: 100,
        // flexGrow: 1,
        // width: 100,
        height: 100,
        // alignSelf: 'flex-start'
      }} />
      <View style={{
        backgroundColor: 'gold',
        width: 100,
        height: 100,
        position: 'absolute',
        top: 50,
        left: 20,
      }} />
      <View style={{
        backgroundColor: 'red',
        width: 100,
        height: 100,
      }} />
      <View style={{
        backgroundColor: 'greenyellow',
        width: 100,
        height: 100,
      }} />
      {/* <View style={{
        backgroundColor: 'grey',
        width: 100,
        height: 100,
      }} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
