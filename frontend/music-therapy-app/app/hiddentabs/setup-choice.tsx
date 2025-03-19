// app/setup-choice.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { pastelStyles } from '../(tabs)/styles'; // adjust path

export default function SetupChoice() {
  const router = useRouter();

  return (
    <View style={pastelStyles.container}>
      <Text style={[pastelStyles.title, { marginBottom: 20 }]}>Let's Get You Started</Text>
      <Text style={pastelStyles.body}>
        Provide only the essentials and start exploring right away.
      </Text>
      <TouchableOpacity
        style={pastelStyles.button}
        onPress={() => router.push('/hiddentabs/simple-setup')}
      >
        <Text style={pastelStyles.buttonText}>Quick Setup</Text>
      </TouchableOpacity>
      
      <Text style={[pastelStyles.body, { marginTop: 20 }]}>
        Add memories, preferences, and personal details for a truly customized experience.
      </Text>
      <TouchableOpacity
        style={pastelStyles.button}
        onPress={() => router.push('/hiddentabs/advanced/welcome')}
      >
        <Text style={pastelStyles.buttonText}>Detailed Setup</Text>
      </TouchableOpacity>
    </View>
  );
}
