import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { pastelStyles } from './styles';

export default function FineTune() {
  const router = useRouter();
  const [biosensorEnabled, setBiosensorEnabled] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState(true);

  return (
    <View style={pastelStyles.container}>
      <Text style={pastelStyles.title}>Fine-Tune Your Music Experience</Text>
      <Text style={pastelStyles.body}>
        Want to make Remembra even more personalized? Opt into real-time heart rate 
        tracking and AI-powered recommendations.
      </Text>

      <View style={pastelStyles.toggleRow}>
        <Switch
          value={biosensorEnabled}
          onValueChange={setBiosensorEnabled}
          trackColor={{ true: '#F9A8D4', false: '#ccc' }}
          thumbColor={biosensorEnabled ? '#C4B5FD' : '#fff'}
        />
        <Text style={pastelStyles.toggleLabel}>Biosensor Connection</Text>
      </View>

      <View style={pastelStyles.toggleRow}>
        <Switch
          value={aiSuggestions}
          onValueChange={setAiSuggestions}
          trackColor={{ true: '#F9A8D4', false: '#ccc' }}
          thumbColor={aiSuggestions ? '#C4B5FD' : '#fff'}
        />
        <Text style={pastelStyles.toggleLabel}>AI-Powered Music Suggestions</Text>
      </View>

      <TouchableOpacity
        style={pastelStyles.navButton}
        onPress={() => router.push('/main-player')}
      >
        <Text style={pastelStyles.navButtonText}>Finish</Text>
      </TouchableOpacity>
    </View>
  );
}
