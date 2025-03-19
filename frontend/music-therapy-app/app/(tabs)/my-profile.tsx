
// import React, { useEffect, useState } from 'react';
// import { View, Text, ActivityIndicator, FlatList, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import { onAuthStateChanged } from 'firebase/auth';
// import { doc, getDoc } from 'firebase/firestore';

// import { auth, db } from '../../config/firebase'; // Adjust the path as needed
// import { pastelStyles } from './styles';

// // Hard-coded recommendations for AI simulation
// const DUMMY_RECOMMENDATIONS = [
//   {
//     id: 'rec-1',
//     title: 'Bohemian Rhapsody - Queen',
//     reason: 'A timeless classic that may help memory recall.',
//   },
//   {
//     id: 'rec-2',
//     title: 'Imagine - John Lennon',
//     reason: 'Calming melody for stress relief.',
//   },
//   {
//     id: 'rec-3',
//     title: "Don't Stop Me Now - Queen",
//     reason: 'Energetic vibe to lift your mood.',
//   },
// ];

// export default function MyProfile() {
//   const [user, setUser] = useState<any>(null);
//   const [favSongs, setFavSongs] = useState<string[]>([]);
//   const [loadingFav, setLoadingFav] = useState(true);

//   // For AI simulation
//   const [aiLoading, setAiLoading] = useState(false);
//   const [showRecommendations, setShowRecommendations] = useState(false);

//   useEffect(() => {
//     // Listen for Firebase Auth changes
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, []);

//   useEffect(() => {
//     // Fetch favorite songs from Firestore if user is logged in
//     const fetchFavSongs = async () => {
//       if (!user) {
//         setLoadingFav(false);
//         return;
//       }
//       try {
//         const userDocRef = doc(db, 'users', user.uid);
//         const docSnap = await getDoc(userDocRef);

//         if (docSnap.exists()) {
//           const data = docSnap.data();
//           if (data.FavSongs) {
//             const songsArray = Object.values(data.FavSongs) as string[];
//             setFavSongs(songsArray);
//           }
//         }
//       } catch (error) {
//         console.error('Error fetching favorite songs:', error);
//       } finally {
//         setLoadingFav(false);
//       }
//     };

//     fetchFavSongs();
//   }, [user]);

//   // Handle "Get Recommendations" button press
//   const handleGetRecommendations = () => {
//     setAiLoading(true);
//     setShowRecommendations(false); // Reset first
//     // Simulate a brief delay like an AI call
//     setTimeout(() => {
//       setAiLoading(false);
//       setShowRecommendations(true);
//     }, 1500);
//   };

//   if (!user) {
//     return (
//       <View style={pastelStyles.container}>
//         <Text style={pastelStyles.title}>My Profile</Text>
//         {/* More appealing UI for not logged in state */}
//         <View style={styles.notLoggedInBox}>
//           <Text style={styles.notLoggedInTitle}>Whoops!</Text>
//           <Text style={styles.notLoggedInText}>
//             It looks like you're not logged in right now.
//           </Text>
//           <Text style={styles.notLoggedInText}>
//             Log in to see your profile and personalized recommendations.
//           </Text>
//           <TouchableOpacity
//             style={[pastelStyles.button, { marginTop: 20 }]}
//             onPress={() => console.log('Navigate to login')}
//           >
//             <Text style={pastelStyles.buttonText}>Go to Login</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }

//   return (
//     <ScrollView contentContainerStyle={pastelStyles.container}>
//       <Text style={pastelStyles.title}>My Profile</Text>
//       <Text style={pastelStyles.body}>Welcome, {user.email}!</Text>

//       {/* Favorite Songs Section */}
//       <Text style={[pastelStyles.body, { marginTop: 20, fontWeight: 'bold' }]}>Your Favorite Songs:</Text>
//       {loadingFav ? (
//         <ActivityIndicator size="large" color="#C4B5FD" style={{ marginTop: 10 }} />
//       ) : favSongs.length > 0 ? (
//         <FlatList
//           data={favSongs}
//           keyExtractor={(_, index) => index.toString()}
//           renderItem={({ item }) => (
//             <View style={styles.songCard}>
//               <Text style={styles.cardText}>{item}</Text>
//             </View>
//           )}
//           contentContainerStyle={{ paddingBottom: 10 }}
//           scrollEnabled={false}
//         />
//       ) : (
//         <Text style={[pastelStyles.body, { marginTop: 10 }]}>No favorite songs found.</Text>
//       )}

//       {/* AI Simulation Section */}
//       <Text style={[pastelStyles.body, { marginTop: 20, fontWeight: 'bold' }]}>
//         Recommended for You (Simulated AI):
//       </Text>

//       {!showRecommendations && !aiLoading && (
//         <TouchableOpacity
//           style={[pastelStyles.button, { marginTop: 10 }]}
//           onPress={handleGetRecommendations}
//         >
//           <Text style={pastelStyles.buttonText}>Get Recommendations</Text>
//         </TouchableOpacity>
//       )}

//       {aiLoading && (
//         <ActivityIndicator size="large" color="#C4B5FD" style={{ marginTop: 20 }} />
//       )}

//       {showRecommendations && (
//         <FlatList
//           data={DUMMY_RECOMMENDATIONS}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <View style={styles.recommendCard}>
//               <Text style={styles.cardTitle}>{item.title}</Text>
//               <Text style={styles.cardReason}>{item.reason}</Text>
//             </View>
//           )}
//           contentContainerStyle={{ paddingBottom: 20, marginTop: 10 }}
//           scrollEnabled={false}
//         />
//       )}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   songCard: {
//     backgroundColor: '#fff',
//     padding: 15,
//     marginVertical: 6,
//     marginHorizontal: 16,
//     borderRadius: 10,
//     // Shadows
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//   },
//   recommendCard: {
//     backgroundColor: '#fff',
//     padding: 15,
//     marginVertical: 6,
//     marginHorizontal: 16,
//     borderRadius: 10,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//   },
//   cardText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   cardTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   cardReason: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 5,
//   },
//   // "not logged in" styling
//   notLoggedInBox: {
//     marginTop: 30,
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//     // Shadows
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1.5 },
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//     alignItems: 'center',
//     marginHorizontal: 20,
//   },
//   notLoggedInTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#EF4444',
//     marginBottom: 10,
//   },
//   notLoggedInText: {
//     fontSize: 16,
//     color: '#4B5563',
//     textAlign: 'center',
//     marginBottom: 5,
//   },
// });

// app/(tabs)/main-player.tsx

import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { pastelStyles } from './styles';
import { doc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { onAuthStateChanged, User, signOut } from 'firebase/auth';

// import your firebase config (auth, db)
import { auth, db } from '../../config/firebase'; // Adjust path as needed


// 2. Local array of 50 popular songs (no cover)
const topSongs = [
  { id: '1', title: 'Blinding Lights', artist: 'The Weeknd' },
  { id: '2', title: 'Dance Monkey', artist: 'Tones and I' },
  { id: '3', title: 'Shape of You', artist: 'Ed Sheeran' },
  { id: '4', title: 'One Dance', artist: 'Drake' },
  { id: '5', title: 'Lean On', artist: 'Major Lazer, DJ Snake' },
  { id: '6', title: 'Closer', artist: 'The Chainsmokers, Halsey' },
  { id: '7', title: 'Rockstar', artist: 'Post Malone' },
  { id: '8', title: 'Despacito', artist: 'Luis Fonsi, Daddy Yankee' },
  { id: '9', title: 'Sorry', artist: 'Justin Bieber' },
  { id: '10', title: 'Girls Like You', artist: 'Maroon 5' },
  { id: '11', title: 'Sunflower', artist: 'Post Malone, Swae Lee' },
  { id: '12', title: 'Senorita', artist: 'Shawn Mendes, Camila Cabello' },
  { id: '13', title: 'Faded', artist: 'Alan Walker' },
  { id: '14', title: 'God\'s Plan', artist: 'Drake' },
  { id: '15', title: 'Bad Guy', artist: 'Billie Eilish' },
  { id: '16', title: 'Believer', artist: 'Imagine Dragons' },
  { id: '17', title: 'Havana', artist: 'Camila Cabello' },
  { id: '18', title: 'High Hopes', artist: 'Panic! At The Disco' },
  { id: '19', title: 'Uptown Funk', artist: 'Mark Ronson, Bruno Mars' },
  { id: '20', title: 'Sugar', artist: 'Maroon 5' },
  { id: '21', title: 'Roar', artist: 'Katy Perry' },
  { id: '22', title: 'Sicko Mode', artist: 'Travis Scott' },
  { id: '23', title: 'Photograph', artist: 'Ed Sheeran' },
  { id: '24', title: 'No Tears Left To Cry', artist: 'Ariana Grande' },
  { id: '25', title: 'Circles', artist: 'Post Malone' },
  { id: '26', title: 'Lucid Dreams', artist: 'Juice WRLD' },
  { id: '27', title: 'Hotline Bling', artist: 'Drake' },
  { id: '28', title: 'Beautiful People', artist: 'Ed Sheeran, Khalid' },
  { id: '29', title: 'One Kiss', artist: 'Calvin Harris, Dua Lipa' },
  { id: '30', title: 'Something Just Like This', artist: 'The Chainsmokers, Coldplay' },
  { id: '31', title: 'RITMO', artist: 'Black Eyed Peas, J Balvin' },
  { id: '32', title: 'Don\'t Let Me Down', artist: 'The Chainsmokers' },
  { id: '33', title: 'Starboy', artist: 'The Weeknd' },
  { id: '34', title: 'Thinking Out Loud', artist: 'Ed Sheeran' },
  { id: '35', title: 'Cheap Thrills', artist: 'Sia' },
  { id: '36', title: 'Love Yourself', artist: 'Justin Bieber' },
  { id: '37', title: 'Hello', artist: 'Adele' },
  { id: '38', title: 'Stressed Out', artist: 'Twenty One Pilots' },
  { id: '39', title: 'Don\'t Start Now', artist: 'Dua Lipa' },
  { id: '40', title: 'Treat You Better', artist: 'Shawn Mendes' },
  { id: '41', title: 'All About That Bass', artist: 'Meghan Trainor' },
  { id: '42', title: 'Timber', artist: 'Pitbull, Kesha' },
  { id: '43', title: 'Thunder', artist: 'Imagine Dragons' },
  { id: '44', title: 'Love Me Like You Do', artist: 'Ellie Goulding' },
  { id: '45', title: 'Dark Horse', artist: 'Katy Perry' },
  { id: '46', title: 'Blank Space', artist: 'Taylor Swift' },
  { id: '47', title: 'Counting Stars', artist: 'OneRepublic' },
  { id: '48', title: 'Shake It Off', artist: 'Taylor Swift' },
  { id: '49', title: 'Baby', artist: 'Justin Bieber' },
  { id: '50', title: 'We Don\'t Talk Anymore', artist: 'Charlie Puth' },
];

export default function MainPlayer() {
  const [user, setUser] = useState<User | null>(null); // store the logged-in user
  const [likedSongs, setLikedSongs] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [loadingAuth, setLoadingAuth] = useState(true); // to handle initial auth check

  // 1. Listen for auth state changes => user stays logged in on refresh
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser || null);
      setLoadingAuth(false); // done checking
    });
    // Cleanup the subscription
    return () => unsubscribe();
  }, []);

  // 2. Fetch liked songs if we have a logged-in user
  const fetchLikedSongs = useCallback(async () => {
    if (!user) return;

    try {
      const userDocRef = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userDocRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();
        setLikedSongs(userData.likedSongs || []);
      } else {
        // If no doc, initialize
        await updateDoc(userDocRef, { likedSongs: [] });
        setLikedSongs([]);
      }
    } catch (error) {
      console.error('Error fetching liked songs:', error);
    }
  }, [user]);

  // 3. Generate recommendations based on likedSongs
  const generateRecommendations = useCallback(() => {
    if (likedSongs.length === 0) {
      // No liked songs => pick 5 random from topSongs
      const randomSongs = shuffleArray(topSongs).slice(0, 5);
      setRecommendations(randomSongs);
    } else {
      // Has liked => pick 5 random (or more advanced logic)
      const randomSongs = shuffleArray(topSongs).slice(0, 5);
      setRecommendations(randomSongs);
    }
  }, [likedSongs]);

  // 4. Like a song => update Firestore & local state
  const likeSong = async (songId: string) => {
    if (!user) return;

    try {
      const userDocRef = doc(db, 'users', user.uid);
      await updateDoc(userDocRef, {
        likedSongs: arrayUnion(songId),
      });
      setLikedSongs((prev) => [...prev, songId]);
    } catch (error) {
      console.error('Error liking song:', error);
    }
  };

  // 5. signOut user
  const handleLogout = async () => {
    try {
      await signOut(auth);
      // user will become null automatically from onAuthStateChanged
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  // 6. On mount or user change => fetch liked songs
  useEffect(() => {
    if (user) {
      fetchLikedSongs();
    }
  }, [user, fetchLikedSongs]);

  // 7. Whenever likedSongs changes => new recommendations
  useEffect(() => {
    generateRecommendations();
  }, [likedSongs, generateRecommendations]);

  // 8. If still checking auth, show loader
  if (loadingAuth) {
    return (
      <View style={[pastelStyles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  // If no user => show a prompt to log in
  if (!user) {
    return (
      <View style={[pastelStyles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Please log in to see your songs.</Text>
        {/* You might have a Login button that navigates to your login screen */}
      </View>
    );
  }

  // user is logged in => show UI
  return (
    <View style={[pastelStyles.container, { padding: 20 }]}>
      <Text style={styles.header}>Welcome!</Text>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>

      {/* Liked Songs Section (if any) */}
      <Text style={styles.title}>Liked Songs ({likedSongs.length})</Text>
      {likedSongs.length > 0 ? (
        <FlatList
          data={likedSongs}
          keyExtractor={(id) => id}
          style={{ marginBottom: 20, marginTop: 5 }}
          renderItem={({ item }) => {
            const detail = topSongs.find((ts) => ts.id === item);
            if (!detail) return null;
            return (
              <View style={styles.itemContainer}>
                <View style={styles.textContainer}>
                  <Text style={styles.songTitle}>{detail.title}</Text>
                  <Text style={styles.artist}>{detail.artist}</Text>
                </View>
              </View>
            );
          }}
        />
      ) : (
        <Text style={styles.subheader}>No liked songs yet.</Text>
      )}

      {/* Recommendations Section */}
      <Text style={[styles.title, { marginTop: 10 }]}>Recommended for You</Text>
      <FlatList
        data={recommendations}
        keyExtractor={(item) => item.id}
        style={{ marginTop: 15 }}
        renderItem={({ item }) => (
          <RecommendationItem
            song={item}
            likedSongs={likedSongs}
            onLike={() => likeSong(item.id)}
          />
        )}
      />
    </View>
  );
}

// Child component for a recommended item
function RecommendationItem({
  song,
  likedSongs,
  onLike,
}: {
  song: any;
  likedSongs: string[];
  onLike: () => void;
}) {
  const isLiked = likedSongs.includes(song.id);

  return (
    <View style={styles.itemContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.songTitle}>{song.title}</Text>
        <Text style={styles.artist}>{song.artist}</Text>
      </View>

      <TouchableOpacity
        style={[styles.likeButton, isLiked && { backgroundColor: '#C4B5FD' }]}
        onPress={onLike}
        disabled={isLiked}
      >
        <Text style={styles.likeButtonText}>{isLiked ? 'Liked' : 'Like'}</Text>
      </TouchableOpacity>
    </View>
  );
}

// Some basic styling
const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
  },
  logoutButton: {
    borderWidth: 2,
    borderColor: '#888',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 15,
  },
  logoutText: {
    fontSize: 14,
    color: '#888',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  subheader: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    elevation: 2,
  },
  textContainer: {
    flex: 1,
  },
  songTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  artist: {
    color: '#666',
    fontSize: 14,
  },
  likeButton: {
    backgroundColor: '#F9A8D4',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  likeButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

// Utility to randomize array
function shuffleArray(array: any[]): any[] {
  const arrCopy = [...array];
  for (let i = arrCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrCopy[i], arrCopy[j]] = [arrCopy[j], arrCopy[i]];
  }
  return arrCopy;
}