// File: app/(tabs)/styles.ts
import { StyleSheet } from 'react-native';

export const pastelStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7F0', // Pastel peach
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#4B5563',
    // fontFamily: 'Pacifico_400Regular', // Uncomment if using a custom font
  },
  body: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 22,
    color: '#4B5563',
  },
  input: {
    borderWidth: 2,
    borderColor: '#F9A8D4', // Pink border
    backgroundColor: '#FFF',
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 8,
    color: '#4B5563',
  },
  button: {
    backgroundColor: '#C4B5FD', // Lavender
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  toggleLabel: {
    fontSize: 16,
    marginLeft: 8,
    color: '#4B5563',
  },
  separator: {
    height: 1,
    backgroundColor: '#F9A8D4',
    marginVertical: 15,
  },
  navButton: {
    borderWidth: 2,
    borderColor: '#F9A8D4', // Pink border
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
    backgroundColor: '#C4B5FD', // Lavender fill
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotText: {
    color: '#C71585',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  signupText: {
    color: '#C71585',
    marginTop: 10,
  }
});
