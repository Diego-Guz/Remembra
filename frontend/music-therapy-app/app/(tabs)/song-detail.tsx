import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { pastelStyles } from './styles';

export default function SongDetail() {
  const router = useRouter();

  return (
    <View style={pastelStyles.container}>
      <Text style={pastelStyles.title}>Song Detail</Text>
      <Text style={pastelStyles.body}>Show info about a specific song here...</Text>

      <TouchableOpacity
        style={pastelStyles.navButton}
        onPress={() => router.back()}
      >
        <Text style={pastelStyles.navButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}
