import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

export default function PasswordField({
  password,
  confirm,
  onChangePassword,
  onChangeConfirm,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const showMismatch = confirm.length > 0 && password !== confirm;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>비밀번호</Text>

      {/* 비밀번호 입력 — LoginForm의 passwordWrapper 패턴 재사용 */}
      <View style={styles.passwordWrapper}>
        <TextInput
          style={styles.passwordInput}
          placeholder="비밀번호"
          placeholderTextColor="#bbb"
          value={password}
          onChangeText={onChangePassword}
          secureTextEntry={!showPassword}
          maxLength={20}
        />
        <TouchableOpacity
          style={styles.eyeButton}
          onPress={() => setShowPassword(prev => !prev)}
          activeOpacity={0.7}
        >
          <Image
            source={require('../../assets/Login/eyeIcon.png')}
            style={[styles.eyeIcon, showPassword && styles.eyeIconActive]}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {/* 비밀번호 확인 입력 */}
      <TextInput
        style={[styles.input, showMismatch && styles.inputError]}
        placeholder="비밀번호 확인"
        placeholderTextColor="#bbb"
        value={confirm}
        onChangeText={onChangeConfirm}
        secureTextEntry={!showPassword}
        maxLength={20}
      />

      {!showMismatch && (
        <Text style={styles.hint}>
          6~20자/영문,숫자,특수문자 중 2가지 이상 조합
        </Text>
      )}
      {showMismatch && (
        <Text style={styles.errorText}>비밀번호가 일치하지 않아요</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111',
    marginBottom: 8,
  },
  // LoginForm의 passwordWrapper 그대로
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
  // LoginForm의 eyeIcon 그대로
  eyeIcon: {
    width: 22,
    height: 22,
    opacity: 0.4,
  },
  eyeIconActive: {
    opacity: 1,
    tintColor: '#1AC6EC',
  },
  // 비밀번호 확인 입력 (에러 테두리 대응)
  input: {
    width: '100%',
    height: 52,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 15,
    color: '#333',
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  inputError: {
    borderColor: '#e84040',
    backgroundColor: '#fff',
  },
  hint: {
    fontSize: 12,
    color: '#888',
    marginTop: 6,
  },
  errorText: {
    fontSize: 12,
    color: '#e84040',
    marginTop: 6,
  },
});
