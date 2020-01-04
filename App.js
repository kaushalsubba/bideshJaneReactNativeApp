import React from 'react';
import { StyleSheet, Text, View,Button,Alert } from 'react-native';
import SearchJobs from './components/SearchJobs';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome !</Text>
      <SearchJobs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width:500,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
