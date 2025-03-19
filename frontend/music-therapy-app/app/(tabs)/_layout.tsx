import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Hide the top header for all tabs
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="login" options={{ title: 'Login' }} />
      {/* <Tabs.Screen name="simple-setup" options={{ title: 'Simple Setup' }} /> */}
      {/* <Tabs.Screen name="advanced/welcome" options={{ title: 'Wizard' }} /> */}
      <Tabs.Screen name="main-player" options={{ title: 'Player' }} />
      {/* <Tabs.Screen name="my-library" options={{ title: 'Library' }} /> */}
      <Tabs.Screen name="my-profile" options={{ title: 'Profile' }} />
      <Tabs.Screen name="fine-tune" options={{ title: 'Fine-Tune' }} />
      <Tabs.Screen name="account" options={{ title: 'Account' }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
      {/* <Tabs.Screen name="explore" options={{ title: 'Explore' }} /> */}
    </Tabs>
  );
}
