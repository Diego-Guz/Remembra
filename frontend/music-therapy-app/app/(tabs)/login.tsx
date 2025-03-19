

// app/login.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { pastelStyles } from './styles'; // Or wherever your shared styles are
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../config/firebase';
import { doc, setDoc } from 'firebase/firestore';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false); // toggles between login & signup
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setErrorMessage('');
      // After a successful login, navigate to the Setup Choice screen or directly to your app
      router.push('../my-profile');
    } catch (error: any) {
      console.error('Login error:', error);
      setErrorMessage(error.message || 'Login failed');
    }
  };

  const handleSignUp = async () => {
    try {
      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Write extra info to Firestore if needed
      // For example, create a doc in "users" with the user’s UID
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        createdAt: new Date().toISOString(),
        // add more fields if needed
      });

      setErrorMessage('');
      Alert.alert('Sign-Up Successful', 'You can now set up your profile.');
      // Navigate to Setup Choice
      router.push('../hiddentabs/setup-choice');
    } catch (error: any) {
      console.error('Sign-Up error:', error);
      setErrorMessage(error.message || 'Sign-Up failed');
    }
  };

  return (
    <View style={pastelStyles.container}>
      <Text style={pastelStyles.title}>{isSignUp ? 'Sign Up' : 'Login'}</Text>
      {errorMessage ? <Text style={pastelStyles.body}>{errorMessage}</Text> : null}
      <TextInput
        style={pastelStyles.input}
        placeholder="Email"
        placeholderTextColor="#C71585"
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={pastelStyles.input}
        placeholder="Password"
        placeholderTextColor="#C71585"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />

      {/* Toggle between sign up & login */}
      {isSignUp ? (
        <TouchableOpacity style={pastelStyles.button} onPress={handleSignUp}>
          <Text style={pastelStyles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={pastelStyles.button} onPress={handleLogin}>
          <Text style={pastelStyles.buttonText}>Login</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        onPress={() => setIsSignUp(!isSignUp)}
        style={{ marginTop: 10 }}
      >
        <Text style={pastelStyles.signupText}>
          {isSignUp ? 'Already have an account? Login' : 'No account? Sign Up'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
