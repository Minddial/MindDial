import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function SubmitButton({ enabled, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.btn, enabled ? styles.btnActive : styles.btnDisabled]}
      onPress={onPress}
      disabled={!enabled}
      activeOpacity={0.85}
    >
      <Text style={styles.btnText}>회원가입</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: 54,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnActive: {
    backgroundColor: '#222',
  },
  btnDisabled: {
    backgroundColor: '#ccc',
  },
  btnText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },
});
