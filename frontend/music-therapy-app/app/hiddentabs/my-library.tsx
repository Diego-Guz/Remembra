import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList, Image } from 'react-native';
import { pastelStyles } from '../(tabs)/styles';
import { useSpotifyAuth } from '../utils/spotifyAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MyLibrary() {
  const { promptAsync } = useSpotifyAuth();
  const [playlists, setPlaylists] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchPlaylists = async () => {
      setLoading(true);
      const token = await AsyncStorage.getItem('spotify_token');
      if (token) {
        try {
          const response = await fetch('https://api.spotify.com/v1/me/playlists', {
            headers: { Authorization: `Bearer ${token}` },
          });
          const data = await response.json();
          // Spotify returns a playlists object with an "items" array.
          if (data && data.items) {
            setPlaylists(data.items);
          }
        } catch (error) {
          console.error('Failed to fetch playlists:', error);
        }
      }
      setLoading(false);
    };

    fetchPlaylists();
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <View style={{ marginVertical: 10, alignItems: 'center' }}>
      {item.images && item.images.length > 0 ? (
        <Image
          source={{ uri: item.images[0].url }}
          style={{ width: 100, height: 100, borderRadius: 8 }}
        />
      ) : (
        <View style={{ width: 100, height: 100, backgroundColor: '#ddd', borderRadius: 8 }} />
      )}
      <Text style={[pastelStyles.body, { textAlign: 'center', marginTop: 5 }]}>{item.name}</Text>
    </View>
  );

  return (
    <View style={pastelStyles.container}>
      <Text style={pastelStyles.title}>My Library</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#C4B5FD" />
      ) : playlists.length > 0 ? (
        <FlatList 
          data={playlists}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ alignItems: 'center' }}
        />
      ) : (
        <View>
          <Text style={pastelStyles.body}>
            You are not connected to Spotify or have no playlists.
          </Text>
          <TouchableOpacity style={pastelStyles.button} onPress={() => promptAsync()}>
            <Text style={pastelStyles.buttonText}>Connect to Spotify</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
