// app/(tabs)/advanced/did-we-miss-something.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { pastelStyles } from '../../(tabs)/styles';

export default function DidWeMissSomething() {
  const router = useRouter();
  const [additionalDetails, setAdditionalDetails] = useState('');

  return (
    <View style={pastelStyles.container}>
      <Text style={pastelStyles.title}>Did We Miss Something?</Text>
      <Text style={pastelStyles.body}>
        Sometimes the best memories don't fit neatly into categories. Is there anything else you'd like to share?
      </Text>
      <TextInput
        style={pastelStyles.input}
        placeholder="Any extra details or memories?"
        placeholderTextColor="#999"
        value={additionalDetails}
        onChangeText={setAdditionalDetails}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={pastelStyles.navButton} onPress={() => router.back()}>
          <Text style={pastelStyles.navButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={pastelStyles.navButton} onPress={() => router.push('/(tabs)/fine-tune')}>
          <Text style={pastelStyles.navButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
