import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function LogoArea() {
  return (
    <View style={styles.logoArea}>
      <Image
        source={require('../../assets/Logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.tagline}>마음속 날씨를 맑게 환기하는 시간</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logoArea: {
    alignItems: 'center',
    marginBottom: 48,
  },
  logo: {
    width: 200,
    height: 60,
  },
  tagline: {
    marginTop: 10,
    fontSize: 15,
    color: '#1AC6EC',
    letterSpacing: 0.3,
  },
});
