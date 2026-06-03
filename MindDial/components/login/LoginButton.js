import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function LoginButton({ onPress, disabled }) {
  return (
    <TouchableOpacity
      style={[styles.loginButton, disabled && styles.loginButtonDisabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.loginButtonText}>로그인</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    width: '100%',
    height: 52,
    backgroundColor: '#272523',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  loginButtonDisabled: {
    backgroundColor: '#D0D0D0',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
