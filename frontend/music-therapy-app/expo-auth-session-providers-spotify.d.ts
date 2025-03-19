declare module 'expo-auth-session/providers/spotify' {
    import * as AuthSession from 'expo-auth-session';
    
    export interface SpotifyProviderOptions {
      clientId: string;
      scopes?: string[];
      redirectUri?: string;
    }
    
    export function useAuthRequest(
      options: SpotifyProviderOptions,
      discovery: AuthSession.DiscoveryDocument
    ): [any, any, (options?: Partial<AuthSession.AuthRequestOptions>) => Promise<void>];
  }
  