import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface ProfileProps {
  user: any;
}

const ProfileCard = ({ user }: ProfileProps) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('ProfileDetails', { userId: user.id });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.title}>{user.name}</Text>
      <Text style={styles.subtitle}>{user.email}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
  },
});

export default ProfileCard;
