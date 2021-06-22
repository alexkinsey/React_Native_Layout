import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, Dimensions } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={{
      backgroundColor: 'blue',
      width: '100%',
      height: '30%',
    }}></View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
