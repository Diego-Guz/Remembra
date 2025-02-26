import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { pastelStyles } from './styles';

export default function MainPlayer() {
  const router = useRouter();
  const [shuffle, setShuffle] = useState(false);

  return (
    <View style={pastelStyles.container}>
      <Text style={pastelStyles.title}>Hello John 👋</Text>

      {/* Album Art Placeholder */}
      <View style={{ alignItems: 'center', marginVertical: 20 }}>
        <View
          style={{
            width: 150,
            height: 150,
            borderRadius: 75,
            backgroundColor: '#F9A8D4',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Album Art</Text>
        </View>
      </View>

      <Text style={[pastelStyles.body, { textAlign: 'center', fontWeight: 'bold' }]}>
        Somebody Told Me
      </Text>
      <Text style={[pastelStyles.body, { textAlign: 'center' }]}>The Killers</Text>

      <TouchableOpacity
        style={pastelStyles.navButton}
        onPress={() => router.push('/(tabs)/my-library')}
      >
        <Text style={pastelStyles.navButtonText}>My Music Library</Text>
      </TouchableOpacity>

      <View style={pastelStyles.toggleRow}>
        <Switch
          value={shuffle}
          onValueChange={setShuffle}
          trackColor={{ true: '#F9A8D4', false: '#ccc' }}
          thumbColor={shuffle ? '#C4B5FD' : '#fff'}
        />
        <Text style={pastelStyles.toggleLabel}>Shuffle</Text>
      </View>

      {/* Playback Controls */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          width: '100%',
          marginTop: 10,
        }}
      >
        <TouchableOpacity style={pastelStyles.button}>
          <Text style={pastelStyles.buttonText}>⏮</Text>
        </TouchableOpacity>
        <TouchableOpacity style={pastelStyles.button}>
          <Text style={pastelStyles.buttonText}>⏯</Text>
        </TouchableOpacity>
        <TouchableOpacity style={pastelStyles.button}>
          <Text style={pastelStyles.buttonText}>⏭</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
