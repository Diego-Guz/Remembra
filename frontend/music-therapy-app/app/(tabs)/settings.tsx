// app/(tabs)/settings.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Switch, Alert, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { pastelStyles } from './styles';

export default function Settings() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      Alert.alert('Signed Out', 'You have been signed out successfully');
    } catch (error: any) {
      console.error('Sign out error:', error);
      setErrorMessage(error.message || 'Failed to sign out');
    }
  };

  // If no user is logged in, show a friendly UI
  if (!user) {
    return (
      <View style={pastelStyles.container}>
        <Text style={pastelStyles.title}>Settings</Text>
        <View style={styles.notLoggedInBox}>
          <Text style={styles.notLoggedInText}>Oops!</Text>
          <Text style={styles.notLoggedInSubText}>
            It looks like no one is logged in right now. 
          </Text>
          <Text style={styles.notLoggedInSubText}>
            Please log in to personalize your settings and preferences.
          </Text>
          <TouchableOpacity
            style={[pastelStyles.button, { marginTop: 20 }]}
            onPress={() => router.push('../login')}
          >
            <Text style={pastelStyles.buttonText}>Go to Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={pastelStyles.container}>
      <Text style={pastelStyles.title}>Settings</Text>
      {errorMessage !== '' && (
        <Text style={[pastelStyles.body, { color: 'red', marginVertical: 5 }]}>{errorMessage}</Text>
      )}

      <Text style={[pastelStyles.body, { marginBottom: 20 }]}>
        Logged in as: {user.email}
      </Text>

      {/* Notifications Toggle */}
      <View style={styles.settingRow}>
        <Text style={styles.label}>Enable Notifications</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#C4B5FD' }}
          thumbColor={notificationsEnabled ? '#fff' : '#f4f3f4'}
          onValueChange={() => setNotificationsEnabled(!notificationsEnabled)}
          value={notificationsEnabled}
        />
      </View>

      {/* Dark Mode Toggle */}
      <View style={styles.settingRow}>
        <Text style={styles.label}>Dark Mode</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#C4B5FD' }}
          thumbColor={darkMode ? '#fff' : '#f4f3f4'}
          onValueChange={() => setDarkMode(!darkMode)}
          value={darkMode}
        />
      </View>

      <TouchableOpacity
        style={[pastelStyles.button, { marginTop: 40, backgroundColor: '#EF4444' }]}
        onPress={handleSignOut}
      >
        <Text style={pastelStyles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#FFF',
    // Shadows
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1.5 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  label: {
    fontSize: 16,
    color: '#4B5563',
  },
  notLoggedInBox: {
    marginTop: 30,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    // Shadows
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1.5 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  notLoggedInText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#EF4444',
    marginBottom: 10,
  },
  notLoggedInSubText: {
    fontSize: 16,
    color: '#4B5563',
    textAlign: 'center',
    marginBottom: 5,
  },
});
