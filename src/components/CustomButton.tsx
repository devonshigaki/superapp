import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { theme } from '../styles/theme';

const CustomButton = ({ title, onPress, mode = 'contained', ...props }) => {
  return (
    <Button
      mode={mode}
      onPress={onPress}
      style={styles.button}
      labelStyle={styles.buttonText}
      {...props}
    >
      {title}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: theme.fonts.medium,
    fontSize: 16,
  },
});

export default CustomButton;
