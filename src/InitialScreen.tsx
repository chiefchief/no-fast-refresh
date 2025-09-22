import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const InitialScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Random text#1</Text>
      <Text>Random text#2</Text>
      <Text>Random text#3</Text>
      <Text>Random text#4</Text>
      <Text>Random text#5</Text>
      <Text>Random text#6</Text>
      <Text>Random text#7</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
});
