// app/(tabs)/advanced/tell-us-about-yourself.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { pastelStyles } from '../../(tabs)/styles';

export default function TellUsAboutYourself() {
  const router = useRouter();
  const [age, setAge] = useState('');
  const [gradYear, setGradYear] = useState('');
  const [location, setLocation] = useState('');

  return (
    <View style={pastelStyles.container}>
      <Text style={pastelStyles.title}>Tell Us About Yourself</Text>
      <Text style={pastelStyles.body}>
        Music is shaped by where and when you grew up. Please provide a few details:
      </Text>
      <TextInput
        style={pastelStyles.input}
        placeholder="Your Age"
        placeholderTextColor="#999"
        value={age}
        onChangeText={setAge}
      />
      <TextInput
        style={pastelStyles.input}
        placeholder="Graduation Year"
        placeholderTextColor="#999"
        value={gradYear}
        onChangeText={setGradYear}
      />
      <TextInput
        style={pastelStyles.input}
        placeholder="Where did you grow up?"
        placeholderTextColor="#999"
        value={location}
        onChangeText={setLocation}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={pastelStyles.navButton} onPress={() => router.back()}>
          <Text style={pastelStyles.navButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={pastelStyles.navButton} onPress={() => router.push('/hiddentabs/advanced/music-filled-home')}>
          <Text style={pastelStyles.navButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
