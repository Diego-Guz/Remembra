import React, { useState } from 'react';
import { ScrollView, Text, Switch, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import { pastelStyles } from './styles';

export default function Settings() {
  const router = useRouter();
  const [allMusicRecs, setAllMusicRecs] = useState(true);
  const [biosensor, setBiosensor] = useState(false);

  return (
    <ScrollView contentContainerStyle={pastelStyles.container}>
      <Text style={pastelStyles.title}>Settings</Text>

      <View style={pastelStyles.toggleRow}>
        <Switch
          value={allMusicRecs}
          onValueChange={setAllMusicRecs}
          trackColor={{ true: '#F9A8D4', false: '#ccc' }}
          thumbColor={allMusicRecs ? '#C4B5FD' : '#fff'}
        />
        <Text style={pastelStyles.toggleLabel}>All Music Recommendations</Text>
      </View>
      <Text style={pastelStyles.body}>
        Refine suggestions over time based on your listening habits.
      </Text>

      <View style={pastelStyles.toggleRow}>
        <Switch
          value={biosensor}
          onValueChange={setBiosensor}
          trackColor={{ true: '#F9A8D4', false: '#ccc' }}
          thumbColor={biosensor ? '#C4B5FD' : '#fff'}
        />
        <Text style={pastelStyles.toggleLabel}>Biosensor Connection</Text>
      </View>
      <Text style={pastelStyles.body}>
        Track real-time heart rate and movement to enhance song selection.
      </Text>

      <TouchableOpacity style={pastelStyles.button}>
        <Text style={pastelStyles.buttonText}>Edit Music Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={pastelStyles.button}>
        <Text style={pastelStyles.buttonText}>Adjust Memory-Based Playlists</Text>
      </TouchableOpacity>
      <TouchableOpacity style={pastelStyles.button}>
        <Text style={pastelStyles.buttonText}>Export My Data</Text>
      </TouchableOpacity>
      <TouchableOpacity style={pastelStyles.button}>
        <Text style={pastelStyles.buttonText}>Reset Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={pastelStyles.button}>
        <Text style={pastelStyles.buttonText}>Help & Support</Text>
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
