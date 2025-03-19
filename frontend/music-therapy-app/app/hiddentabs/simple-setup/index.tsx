import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { pastelStyles } from '../../(tabs)/styles'; // From simple-setup folder, go up one level to (tabs)

export default function SimpleSetup() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [genre, setGenre] = useState('');

  return (
    <View style={pastelStyles.container}>
      <Text style={pastelStyles.title}>Simple Set-Up</Text>

      <TextInput
        style={pastelStyles.input}
        placeholder="Name"
        placeholderTextColor="#999"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={pastelStyles.input}
        placeholder="Date of Birth"
        placeholderTextColor="#999"
        value={dob}
        onChangeText={setDob}
      />
      <TextInput
        style={pastelStyles.input}
        placeholder="Genre Preference"
        placeholderTextColor="#999"
        value={genre}
        onChangeText={setGenre}
      />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={pastelStyles.navButton} onPress={() => router.back()}>
          <Text style={pastelStyles.navButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={pastelStyles.navButton} onPress={() => router.push('/(tabs)/main-player')}>
          <Text style={pastelStyles.navButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
