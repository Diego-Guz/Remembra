import { useEffect } from 'react';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Replace with your real Spotify client ID
const CLIENT_ID = 'fdf80a9e4c064742a349304190dcf755';
const SCOPES = ['user-read-private', 'user-read-email', 'playlist-read-private'];

// Generate the redirect URI for Expo
const redirectUri = makeRedirectUri({
  // @ts-ignore:
  useProxy: true,
});
console.log('Redirect URI:', redirectUri);

// Spotify discovery endpoints
const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

export function useSpotifyAuth() {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: CLIENT_ID,
      scopes: SCOPES,
      redirectUri,
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const { access_token } = response.params;
      if (access_token) {
        AsyncStorage.setItem('spotify_token', access_token);
      }
    }
  }, [response]);

  return { request, response, promptAsync };
}
