import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { pastelStyles } from './styles';

export default function Account() {
  const router = useRouter();

  return (
    <View style={pastelStyles.container}>
      <Text style={pastelStyles.title}>Account Page</Text>
      <Text style={pastelStyles.body}>This is a placeholder for account details...</Text>

      <TouchableOpacity
        style={pastelStyles.navButton}
        onPress={() => router.back()}
      >
        <Text style={pastelStyles.navButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}
