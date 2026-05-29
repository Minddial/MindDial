// LoginPage.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

export default function LoginPage({ navigation }) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [autoLogin, setAutoLogin] = useState(false);

  const handleLogin = () => {
    console.log('로그인 시도:', id, password);
  };

  const handleKakaoLogin = () => {
    console.log('카카오 로그인 시도');
  };

  const handleSignUp = () => {
    console.log('회원가입 시도');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* 로고 영역 */}
        <View style={styles.logoArea}>
          <Image
            source={require('../assets/Logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.tagline}>마음속 날씨를 맑게 환기하는 시간</Text>
        </View>

        {/* 입력 영역 */}
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
                source={require('../assets/Login/eyeIcon.png')}
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

        {/* 로그인 버튼 */}
        <TouchableOpacity
          style={[styles.loginButton, (!id || !password) && styles.loginButtonDisabled]}
          onPress={handleLogin}
          disabled={!id || !password}
        >
          <Text style={styles.loginButtonText}>로그인</Text>
        </TouchableOpacity>

        {/* 카카오 로그인 버튼 */}
        <TouchableOpacity style={styles.kakaoButton} onPress={handleKakaoLogin}>
          <Image
            source={require('../assets/Login/kakaoLogo.png')}
            style={styles.kakaoLogo}
            resizeMode="contain"
          />
          <Text style={styles.kakaoButtonText}>카카오톡으로 로그인</Text>
        </TouchableOpacity>

        {/* 이메일로 회원가입 */}
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.SignUp}>회원가입</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingVertical: 60,
  },

  // 로고
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

  // 입력창
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

  // 비밀번호
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

  // 자동 로그인 체크박스
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

  // 로그인 버튼
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

  // 카카오 버튼
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

  // 이메일 회원가입
  SignUp: {
    fontSize: 13,
    color: '#888',
    textDecorationLine: 'underline',
  },
});
