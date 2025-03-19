import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { pastelStyles } from './styles';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={pastelStyles.container}>
      <Text style={pastelStyles.title}>Welcome to Remembra</Text>
      <Text style={pastelStyles.body}>
      Tap the button below to begin your music therapy journey!
      </Text>

      <TouchableOpacity
        style={pastelStyles.button}
        onPress={() => router.push('../login')}
      >
        <Text style={pastelStyles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
