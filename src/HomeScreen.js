
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, Button, ActivityIndicator, StyleSheet } from 'react-native';

const HomeScreen = ({ route }) => {
  const { username } = route.params;
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchRecipes = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('https://dummyjson.com/recipes');
      const data = await response.json();
      setRecipes(data.recipes || []);
    } catch (err) {
      setError('Failed to fetch recipes. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Welcome, {username}!</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList
          data={recipes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image
                source={{ uri: item.image || 'https://via.placeholder.com/150' }}
                style={styles.image}
              />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          )}
        />
      )}
      <Button title="Refresh" onPress={fetchRecipes} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  greeting: { fontSize: 18, marginBottom: 20 },
  error: { color: 'red', textAlign: 'center' },
  card: { marginBottom: 10, padding: 10, borderWidth: 1, borderRadius: 5 },
  image: { width: '100%', height: 150, borderRadius: 5, marginBottom: 10 },
  title: { fontSize: 16, fontWeight: 'bold' },
  description: { fontSize: 14 },
});

export default HomeScreen;
