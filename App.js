import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button,  View } from 'react-native';

export default function App() {

  const [age, setAge] = useState('');
  const [lowerheartRate, setLowerHeartRate] = useState(0);
  const [upperheartRate, setUpperHeartRate] = useState(0);

  function calculate(text) {
    setAge(text);
    const lower = (220 - text.replace(',', '.')) * 0.65;
    const upper = (220 - text.replace(',', '.')) * 0.85;
    setLowerHeartRate(lower);
    setUpperHeartRate(upper);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}> Age </Text>
      <TextInput style={styles.field} onChangeText={text => calculate(text)} value={age}
      keyboardType='decimal-pad'/>
      <Text style={styles.field}> Hr limits </Text>
      <Text style={styles.field}> {Math.round(upperheartRate) + ' - ' + Math.round(lowerheartRate)} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop : 50,
    marginLeft: 10,
    },
    field: {
      marginBottom: 10,
      fontSize: 24,
    }
});
