import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function SignUpLink({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.signUp}>회원가입</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  signUp: {
    fontSize: 13,
    color: '#888',
    textDecorationLine: 'underline',
  },
});
