import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { pastelStyles } from './styles';

export default function MyProfile() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={pastelStyles.container}>
      <Text style={pastelStyles.title}>John Doe</Text>

      <Text style={pastelStyles.body}>
        <Text style={{ fontWeight: 'bold' }}>My Info</Text>{'\n'}
        Born: 1990{'\n'}
        Graduated High School: 2008{'\n'}
        Region: West Coast
      </Text>

      <Text style={pastelStyles.body}>
        <Text style={{ fontWeight: 'bold' }}>Music Influences</Text>{'\n'}
        Household Music: Classic Rock, Motown{'\n'}
        Listening Habit: iPods → Streaming{'\n'}
        Social Scene: Indie music fan, skater kid
      </Text>

      <Text style={pastelStyles.body}>
        <Text style={{ fontWeight: 'bold' }}>Memories & Favorites</Text>{'\n'}
        Favorite Album: The Black Parade - My Chemical Romance{'\n'}
        Most Nostalgic Song: Mr. Brightside - The Killers
      </Text>

      <TouchableOpacity
        style={pastelStyles.navButton}
        onPress={() => router.back()}
      >
        <Text style={pastelStyles.navButtonText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
