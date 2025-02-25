import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

# Dummy data: replace with actual user features, song features, and ratings
user_features = np.array([
    [0.1, 0.2, 0.3],
    [0.2, 0.3, 0.4]
])
song_features = np.array([
    [0.5, 0.6, 0.7],
    [0.4, 0.3, 0.2]
])
# Binary rating: 1 for positive reaction, 0 for negative
ratings = np.array([[1], [0]])

# Combine user and song features
inputs = np.concatenate([user_features, song_features], axis=1)

# Build a simple neural network model
model = Sequential([
    Dense(64, activation='relu', input_shape=(inputs.shape[1],)),
    Dense(32, activation='relu'),
    Dense(1, activation='sigmoid')
])

model.compile(optimizer='adam', loss='binary_crossentropy')

# Train the model (in production, train on a much larger dataset)
model.fit(inputs, ratings, epochs=10)

# Save the trained model for use in recommendations
model.save('recommendation_model.h5')
