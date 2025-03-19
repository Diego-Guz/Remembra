// app/(tabs)/main-player.tsx
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { pastelStyles } from './styles';

// Import the local image (make sure testimage.jpeg is in the same folder)
import testImage from './testimage.jpeg';

export default function MainPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={[pastelStyles.container, { padding: 20 }]}>
      <Text style={styles.greeting}>
        Good Afternoon! <Text style={{ fontSize: 24 }}>👋</Text>
      </Text>

      {/* Image with aspectRatio to avoid cutting off */}
      <Image
        source={testImage}
        style={styles.albumCover}
        resizeMode="contain" // Ensure the entire image is visible
      />

      <View style={styles.progressContainer}>
        <View style={styles.progressBar} />
      </View>

      <Text style={styles.songTitle}>We’ve Got It Goin’ On</Text>
      <Text style={styles.artist}>Backstreet Boys</Text>

      <View style={styles.controlsRow}>
        <TouchableOpacity style={styles.controlButton}>
          <Text style={styles.controlIcon}>⏮️</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.controlButton} onPress={handlePlayPause}>
          <Text style={styles.controlIcon}>
            {isPlaying ? '⏸️' : '▶️'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.controlButton}>
          <Text style={styles.controlIcon}>⏭️</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.libraryButton}>
        <Text style={styles.libraryButtonText}>My Library</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  greeting: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
  albumCover: {
    // Full width, but height determined by aspectRatio to avoid cropping
    width: '100%',
    height: undefined,
    aspectRatio: 1.6, // Adjust to match your image's natural ratio
    borderRadius: 10,
    marginBottom: 20,
  },
  progressContainer: {
    width: '100%',
    height: 6,
    backgroundColor: '#F3E8FF',
    borderRadius: 3,
    marginBottom: 15,
    overflow: 'hidden',
  },
  progressBar: {
    width: '40%',
    height: '100%',
    backgroundColor: '#F9A8D4',
  },
  songTitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 5,
    color: '#4B5563',
  },
  artist: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 25,
    color: '#4B5563',
  },
  controlsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  controlButton: {
    marginHorizontal: 20,
  },
  controlIcon: {
    fontSize: 36,
    color: '#C71585',
  },
  libraryButton: {
    backgroundColor: '#C4B5FD',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  libraryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
