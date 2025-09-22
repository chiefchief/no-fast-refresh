import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export const InitialScreen: FC = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Random text#1</Text>
      <Text>Random text#2</Text>
      <Text>Random text#3</Text>
      <Text>Random text#4</Text>
      <Text>Random text#5</Text>
      <Text>Random text#6</Text>
      <Text>Random text#7</Text>
      <Button title="Navigate" onPress={() => navigate('SecondScreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
});
