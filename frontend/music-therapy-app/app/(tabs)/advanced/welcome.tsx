import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { pastelStyles } from '../styles';

export default function Welcome() {
  const router = useRouter();

  return (
    <View style={pastelStyles.container}>
      <Text style={pastelStyles.title}>Welcome to Remembra! 🎶</Text>
      <Text style={pastelStyles.body}>
        Remembra uses music to awaken memories, spark emotions, and bring comfort tailored to you.
      </Text>
      <Text style={pastelStyles.body}>Before we begin, we'll ask a few quick questions:</Text>
      <Text style={pastelStyles.body}>
        ✅ Find songs that resonate with your experiences{'\n'}
        ✅ Understand your musical journey and influences{'\n'}
        ✅ Refine your tastes over time
      </Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity
          style={pastelStyles.navButton}
          onPress={() => router.back()}
        >
          <Text style={pastelStyles.navButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={pastelStyles.navButton}
          onPress={() => router.push('/(tabs)/advanced/tell-us-about-yourself')}
        >
          <Text style={pastelStyles.navButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
