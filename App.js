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
    }}>
      <View style={{
        backgroundColor: 'dodgerblue',
        flex: 2,
      }} />
      <View style={{
        backgroundColor: 'gold',
        flex: 1,
      }} />
      <View style={{
        backgroundColor: 'red',
        flex: 1,
      }} />
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
