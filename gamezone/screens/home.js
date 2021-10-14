import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Text>Home Screen</Text>
=======
      <Text style={styles.titleText}>Home Screen</Text>
>>>>>>> 68a25856d722f944d19518b700d6b98dc46194ee
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  titleText: {
    fontFamily: 'nunito-bold',
    fontSize: 18,
  }
});