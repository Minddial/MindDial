import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

export default function LoginForm({ id, setId, password, setPassword, autoLogin, setAutoLogin }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.inputArea}>
      {/* 아이디 입력 */}
      <TextInput
        style={styles.input}
        placeholder="아이디 입력"
        placeholderTextColor="#bbb"
        value={id}
        onChangeText={setId}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      {/* 비밀번호 입력 */}
      <View style={styles.passwordWrapper}>
        <TextInput
          style={styles.passwordInput}
          placeholder="비밀번호 입력"
          placeholderTextColor="#bbb"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          style={styles.eyeButton}
          onPress={() => setShowPassword(prev => !prev)}
        >
          <Image
            source={require('../../assets/Login/eyeIcon.png')}
            style={[styles.eyeIcon, showPassword && styles.eyeIconActive]}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {/* 자동 로그인 체크박스 */}
      <TouchableOpacity
        style={styles.autoLoginRow}
        onPress={() => setAutoLogin(prev => !prev)}
        activeOpacity={0.7}
      >
        <View style={[styles.checkbox, autoLogin && styles.checkboxChecked]}>
          {autoLogin && <Text style={styles.checkmark}>✓</Text>}
        </View>
        <Text style={styles.autoLoginText}>자동 로그인</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputArea: {
    width: '100%',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 52,
    borderRadius: 10,
    paddingHorizontal: 16,
    marginBottom: 10,
    fontSize: 15,
    color: '#333',
    backgroundColor: '#F2F2F2',
  },
  passwordWrapper: {
    width: '100%',
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#F2F2F2',
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 16,
    fontSize: 15,
    color: '#333',
  },
  eyeButton: {
    paddingHorizontal: 14,
    height: '100%',
    justifyContent: 'center',
  },
  eyeIcon: {
    width: 22,
    height: 22,
    opacity: 0.4,
  },
  eyeIconActive: {
    opacity: 1,
    tintColor: '#1AC6EC',
  },
  autoLoginRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 16,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  checkboxChecked: {
    backgroundColor: '#1AC6EC',
    borderColor: '#1AC6EC',
  },
  checkmark: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
    lineHeight: 16,
  },
  autoLoginText: {
    fontSize: 13,
    color: '#555',
  },
});
