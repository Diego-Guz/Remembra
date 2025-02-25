# Remembra Music Therapy App

Remembra is a multi-screen music therapy application built with Expo, React Native, and Expo Router. 

## Table of Contents

- [Folder Structure](#folder-structure)
- [Installation & Setup](#installation--setup)
- [Running the App](#running-the-app)
- [Customization](#customization)
- [Dependencies](#dependencies)
- [Troubleshooting](#troubleshooting)

## Folder Structure

The core files are organized under the `app/(tabs)` folder. For example:

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
├── requirements.txt
└── README.md
```

> **Note:** The advanced wizard screens are in `app/(tabs)/advanced/`, and the shared pastel styles are in `app/(tabs)/styles.ts`.

## Installation & Setup

1. **Install Node.js & npm (if not already installed):**
   - Download and install Node.js from [https://nodejs.org](https://nodejs.org).
   - Verify installation:
     ```bash
     node -v
     npm -v
     ```

2. **Install Python 3 & pip (if not already installed):**
   - Download and install Python from [https://www.python.org](https://www.python.org/downloads/).
   - Verify installation:
     ```bash
     python3 --version
     pip --version
     ```

3. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd remembra
   ```

4. **Create and Activate a Virtual Environment (Recommended for Python Dependencies):**
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On macOS/Linux
   venv\Scripts\activate     # On Windows
   ```

5. **Install JavaScript Dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

6. **Sync Expo Router (if needed):**
   ```bash
   npx expo-router sync
   ```

7. **Install Python Dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

8. **(Optional) Install Custom Fonts:**
   ```bash
   npx expo install expo-font @expo-google-fonts/pacifico
   ```

## Running the App

1. **Start the Expo Development Server:**
   ```bash
   npx expo start
   ```
2. **Run the App on a Device:**
   - Scan the QR code in the Expo CLI with the Expo Go app (Android/iOS)
   - Or press `i` to open the iOS simulator, `a` for Android emulator.

3. **If Changes Don’t Appear, Clear Cache and Restart:**
   ```bash
   npx expo start -c
   ```

## Dependencies

- **Node.js & npm/yarn** (for running the frontend)
- **Expo SDK** (for React Native development)
- **Expo Router** (for navigation)
- **Python 3.x** (if backend processing is needed)
- **pip** (for managing Python dependencies)
- **Virtual Environment (venv)** (Recommended for Python dependency management)
- **Additional Python Libraries** (if applicable, listed in `requirements.txt`)

## Customization

- **UI Theme:**  
  Modify the pastel theme in `app/(tabs)/styles.ts` to change colors, fonts, and styles.

- **Navigation:**  
  The app uses Expo Router’s file-based routing. Modify files in `app/(tabs)` to change screen names and routes.

- **Content & Logic:**  
  Replace placeholders (album art, user info, input fields) with actual logic as needed.

## Troubleshooting

- **Route Not Found Errors:**  
  Ensure your folder and file names match the paths used in `router.push()` calls. If TypeScript complains, use `as any` or run:
  ```bash
  npx expo-router sync
  ```

- **UI Not Updating:**  
  Restart Expo with:
  ```bash
  npx expo start -c
  ```

- **Font Issues:**  
  If using custom fonts, confirm they’re properly loaded before rendering the app. [Using Custom Fonts](https://docs.expo.dev/guides/using-custom-fonts/)

- **Python Dependency Issues:**  
  Ensure Python 3 is installed, create and activate a virtual environment, then install dependencies:
  ```bash
  python3 -m venv venv
  source venv/bin/activate  # On macOS/Linux
  venv\Scripts\activate     # On Windows
  pip install -r requirements.txt
  ```

---

Enjoy building Remembra and personalizing the music therapy experience!

