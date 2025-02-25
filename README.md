# Remembra Music Therapy App

Remembra is a multi-screen music therapy application built with Expo, React Native, and Expo Router. 

## Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Installation & Setup](#installation--setup)
- [Running the App](#running-the-app)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)

## Features

- **Multi-Screen Navigation:** Built with Expo Router using a folder-based route structure.
- **Advanced Wizard Flow:** Includes screens for "Tell Us About Yourself", "Music & Memories", "Music Scene", "Did We Miss Something?", and more.
- **Simple Setup:** A basic user input flow that leads to the main player screen.
- **Main Player:** Features playback controls, album art, shuffle toggle, and navigation to the music library.
- **Additional Screens:** Fine-Tune, My Profile, My Library, Settings, Account, and Explore screens.
- **Pastel “Cutesy” Theme:** A shared style file (`styles.ts`) provides a consistent pastel UI throughout the app.

## Folder Structure

The majority of the core files are organized under the `app/(tabs)` folder. For example:

```
remembra/
├── app/
│   └── (tabs)/
│       ├── _layout.tsx              // Defines the stack layout for the tabs
│       ├── index.tsx                // Landing screen
│       ├── simple-setup/
│       │   └── index.tsx            // Simple Setup screen
│       ├── advanced/
│       │   ├── tell-us-about-yourself.tsx
│       │   ├── music-filled-home.tsx
│       │   ├── music-scene.tsx
│       │   ├── music-memories.tsx
│       │   └── did-we-miss-something.tsx
│       ├── fine-tune.tsx
│       ├── my-profile.tsx
│       ├── main-player.tsx
│       ├── my-library.tsx
│       ├── settings.tsx
│       ├── account.tsx
│       └── explore.tsx
├── package.json
└── README.md
```

> **Note:** The advanced wizard screens are in `app/(tabs)/advanced/`, and the shared pastel styles are in `app/(tabs)/styles.ts`.

## Installation & Setup

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd remembra
   ```

2. **Install Dependencies:**

   Use npm or yarn to install the required packages:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Sync Expo Router (if needed):**

   If you update your folder structure or add new routes, run:

   ```bash
   npx expo-router sync
   ```

4. **(Optional) Install Custom Fonts:**

   To use a custom font (e.g., Pacifico for a playful look):

   ```bash
   npx expo install expo-font @expo-google-fonts/pacifico
   ```

   Then load the font in your root layout or `App.js`.

## Running the App

Start the Expo development server:

```bash
npx expo start
```

Use the Expo Go app on your mobile device or an emulator to run the app. If changes don’t appear, try clearing the cache:

```bash
npx expo start -c
```

## Customization

- **UI Theme:**  
  All screens use the shared pastel theme defined in `app/(tabs)/styles.ts`. Modify colors, fonts, and other style properties there to suit your preferences.

- **Navigation:**  
  The app uses Expo Router’s file-based routing. Routes are determined by the file and folder names under `app/(tabs)`. For example, the "Simple Setup" screen is in `app/(tabs)/simple-setup/index.tsx`.

- **Content & Logic:**  
  Each screen contains basic placeholders (e.g., album art, user info, input fields). Replace these with your own logic and data as needed.

## Troubleshooting

- **Route Not Found Errors:**  
  Ensure your folder and file names match the paths used in your `router.push()` calls. If TypeScript complains about route types, you can use type overrides (e.g., `as any`) or run `npx expo-router sync`.

- **UI Not Updating:**  
  If you don’t see your changes, restart the Expo server with `npx expo start -c`.

- **Font Issues:**  
  If using custom fonts, confirm they’re properly loaded before rendering your app. Check the Expo documentation for [using custom fonts](https://docs.expo.dev/guides/using-custom-fonts/).


Enjoy building Remembra and personalizing the music therapy experience!

