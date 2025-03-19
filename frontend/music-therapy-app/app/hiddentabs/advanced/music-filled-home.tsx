import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { pastelStyles } from '../../(tabs)/styles';

export default function MusicFilledHome() {
  const router = useRouter();
  const [parentsMusic, setParentsMusic] = useState('');
  const [kidsMusic, setKidsMusic] = useState('');
  const [stylesRemindHome, setStylesRemindHome] = useState('');

  return (
    <View style={pastelStyles.container}>
      <Text style={pastelStyles.title}>What Music Filled Your Home?</Text>
      <Text style={pastelStyles.body}>
        The sounds we grow up with often stick with us for life. What kind of music was playing?
      </Text>

      <TextInput
        style={pastelStyles.input}
        placeholder="Parents' favorite genre or artist?"
        placeholderTextColor="#999"
        value={parentsMusic}
        onChangeText={setParentsMusic}
      />
      <TextInput
        style={pastelStyles.input}
        placeholder="If you have kids, what do they love?"
        placeholderTextColor="#999"
        value={kidsMusic}
        onChangeText={setKidsMusic}
      />
      <TextInput
        style={pastelStyles.input}
        placeholder="Any styles that remind you of home?"
        placeholderTextColor="#999"
        value={stylesRemindHome}
        onChangeText={setStylesRemindHome}
      />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity
          style={pastelStyles.navButton}
          onPress={() => router.back()}
        >
          <Text style={pastelStyles.navButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={pastelStyles.navButton}
          onPress={() => router.push('/hiddentabs/advanced/music-scene')}
        >
          <Text style={pastelStyles.navButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
