// app/(tabs)/advanced/music-scene.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { pastelStyles } from '../../(tabs)/styles';

export default function MusicScene() {
  const router = useRouter();
  const [socialGroup, setSocialGroup] = useState('');
  const [musicScenes, setMusicScenes] = useState('');

  return (
    <View style={pastelStyles.container}>
      <Text style={pastelStyles.title}>What Was Your Scene?</Text>
      <Text style={pastelStyles.body}>
        Music and identity are intertwined. Describe your social circle and any music scenes you connected with during your younger years.
      </Text>
      <TextInput
        style={pastelStyles.input}
        placeholder="Describe your social group"
        placeholderTextColor="#999"
        value={socialGroup}
        onChangeText={setSocialGroup}
      />
      <TextInput
        style={pastelStyles.input}
        placeholder="Music scenes you connected with"
        placeholderTextColor="#999"
        value={musicScenes}
        onChangeText={setMusicScenes}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={pastelStyles.navButton} onPress={() => router.back()}>
          <Text style={pastelStyles.navButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={pastelStyles.navButton} onPress={() => router.push('/hiddentabs/advanced/music-memories')}>
          <Text style={pastelStyles.navButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
