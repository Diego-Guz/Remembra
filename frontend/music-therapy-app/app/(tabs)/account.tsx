// app/(tabs)/account.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { auth } from '../../config/firebase';
import { onAuthStateChanged, updateEmail, signOut } from 'firebase/auth';
import { pastelStyles } from './styles';

export default function Account() {
  const [user, setUser] = useState<any>(null);
  const [newEmail, setNewEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setNewEmail(currentUser?.email || '');
    });
    return () => unsubscribe();
  }, []);

  const handleUpdateEmail = async () => {
    if (!user) return;
    try {
      await updateEmail(user, newEmail);
      Alert.alert('Success', 'Email updated successfully');
      setErrorMessage('');
    } catch (error: any) {
      console.error('Update email error:', error);
      setErrorMessage(error.message || 'Failed to update email');
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      Alert.alert('Signed Out', 'You have been signed out successfully');
    } catch (error: any) {
      console.error('Sign out error:', error);
      setErrorMessage(error.message || 'Failed to sign out');
    }
  };

  if (!user) {
    return (
      <View style={pastelStyles.container}>
        <Text style={pastelStyles.title}>Account</Text>
        <Text style={pastelStyles.body}>No user is logged in. Please login first.</Text>
      </View>
    );
  }

  return (
    <View style={pastelStyles.container}>
      <Text style={pastelStyles.title}>Account Settings</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Current Email:</Text>
        <Text style={styles.value}>{user.email}</Text>
      </View>

      {errorMessage !== '' && (
        <Text style={[pastelStyles.body, { color: 'red', marginVertical: 5 }]}>{errorMessage}</Text>
      )}

      <View style={styles.updateContainer}>
        <Text style={styles.updateLabel}>Update Email:</Text>
        <TextInput
          style={[pastelStyles.input, { marginBottom: 10 }]}
          value={newEmail}
          onChangeText={setNewEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TouchableOpacity style={pastelStyles.button} onPress={handleUpdateEmail}>
          <Text style={pastelStyles.buttonText}>Save Email</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[pastelStyles.button, { marginTop: 30, backgroundColor: '#EF4444' }]} onPress={handleSignOut}>
        <Text style={pastelStyles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4B5563',
  },
  value: {
    fontSize: 16,
    color: '#111827',
    marginTop: 5,
  },
  updateContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
    alignSelf: 'stretch',
  },
  updateLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4B5563',
    marginBottom: 5,
  },
});
