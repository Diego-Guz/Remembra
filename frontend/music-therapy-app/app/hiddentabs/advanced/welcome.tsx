import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { pastelStyles } from '../../(tabs)/styles';

export default function Welcome() {
  const router = useRouter();

  return (
    <View style={pastelStyles.container}>
      <Text style={pastelStyles.title}>Welcome to the Advanced Setup</Text>
      <Text style={pastelStyles.body}>
        Let&apos;s walk through a few steps to tailor your music therapy experience.
      </Text>
      <TouchableOpacity
        style={pastelStyles.button}
        onPress={() => router.push('../advanced/tell-us-about-yourself')}
      >
        <Text style={pastelStyles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
