import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { pastelStyles } from '../styles'; // One folder up from advanced

export default function MusicMemories() {
  const router = useRouter();
  const [meaningfulMusic, setMeaningfulMusic] = useState('');
  const [importantMoments, setImportantMoments] = useState('');

  return (
    <View style={pastelStyles.container}>
      <Text style={pastelStyles.title}>Music & Memories</Text>
      <Text style={pastelStyles.body}>
        Certain songs are part of our life story. Share albums, artists, or songs that hold deep meaning, and any memorable moments.
      </Text>
      <TextInput
        style={pastelStyles.input}
        placeholder="Albums/Artists/Songs that matter"
        placeholderTextColor="#999"
        value={meaningfulMusic}
        onChangeText={setMeaningfulMusic}
      />
      <TextInput
        style={pastelStyles.input}
        placeholder="Important moments/memories"
        placeholderTextColor="#999"
        value={importantMoments}
        onChangeText={setImportantMoments}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={pastelStyles.navButton} onPress={() => router.back()}>
          <Text style={pastelStyles.navButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={pastelStyles.navButton} onPress={() => router.push('/(tabs)/advanced/did-we-miss-something')}>
          <Text style={pastelStyles.navButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
