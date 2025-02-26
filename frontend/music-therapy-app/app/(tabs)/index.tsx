// app/(tabs)/index.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { pastelStyles } from './styles';

export default function LandingScreen() {
  const router = useRouter();

  return (
    <View style={pastelStyles.container}>
      <Text style={pastelStyles.title}>Remembra</Text>

      <TouchableOpacity
        style={pastelStyles.navButton}
        onPress={() => router.push('/(tabs)/simple-setup')}
      >
        <Text style={pastelStyles.navButtonText}>Simple Set-Up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={pastelStyles.navButton}
        onPress={() => router.push('/(tabs)/advanced/welcome')}
      >
        <Text style={pastelStyles.navButtonText}>Advanced Set-Up</Text>
      </TouchableOpacity>
    </View>
  );
}
