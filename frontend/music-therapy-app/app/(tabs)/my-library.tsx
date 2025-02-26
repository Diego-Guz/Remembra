import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { pastelStyles } from './styles';

export default function MyLibrary() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={pastelStyles.container}>
      <Text style={pastelStyles.title}>My Library</Text>

      <Text style={pastelStyles.body}>
        <Text style={{ fontWeight: 'bold' }}>Recents:</Text>{'\n'}
        Britney Spears - Toxic{'\n'}
        Bon Jovi - Livin' On A Prayer{'\n'}
        Doechii - DENIAL A RIVER
      </Text>

      <TouchableOpacity style={pastelStyles.button}>
        <Text style={pastelStyles.buttonText}>Songs</Text>
      </TouchableOpacity>
      <TouchableOpacity style={pastelStyles.button}>
        <Text style={pastelStyles.buttonText}>Artists</Text>
      </TouchableOpacity>
      <TouchableOpacity style={pastelStyles.button}>
        <Text style={pastelStyles.buttonText}>Albums</Text>
      </TouchableOpacity>
      <TouchableOpacity style={pastelStyles.button}>
        <Text style={pastelStyles.buttonText}>Playlists</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={pastelStyles.navButton}
        onPress={() => router.back()}
      >
        <Text style={pastelStyles.navButtonText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
