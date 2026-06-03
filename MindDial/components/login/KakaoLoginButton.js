import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

export default function KakaoLoginButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.kakaoButton} onPress={onPress}>
      <Image
        source={require('../../assets/Login/kakaoLogo.png')}
        style={styles.kakaoLogo}
        resizeMode="contain"
      />
      <Text style={styles.kakaoButtonText}>카카오톡으로 로그인</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  kakaoButton: {
    width: '100%',
    height: 52,
    backgroundColor: '#FEE500',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 24,
  },
  kakaoLogo: {
    width: 22,
    height: 22,
  },
  kakaoButtonText: {
    color: '#3C1E1E',
    fontSize: 16,
    fontWeight: '600',
  },
});
