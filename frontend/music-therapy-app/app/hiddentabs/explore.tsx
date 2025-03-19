import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { pastelStyles } from '../(tabs)/styles';

export default function Explore() {
  const router = useRouter();

  return (
    <View style={pastelStyles.container}>
      <Text style={pastelStyles.title}>Explore</Text>
      <Text style={pastelStyles.body}>Discover new music, playlists, or memory-based suggestions.</Text>

      <TouchableOpacity
        style={pastelStyles.navButton}
        onPress={() => router.back()}
      >
        <Text style={pastelStyles.navButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}
