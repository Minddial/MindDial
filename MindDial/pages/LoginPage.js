import React, { useState, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  LogBox,
} from 'react-native';
import Splash from '../components/Splash';
import LogoArea from '../components/login/LogoArea';
import LoginForm from '../components/login/LoginForm';
import LoginButton from '../components/login/LoginButton';
import KakaoLoginButton from '../components/login/KakaoLoginButton';
import SignUpLink from '../components/login/SignUpLink';

export default function LoginPage({ navigation }) {
  LogBox.ignoreLogs(['Warning: ...']);

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [autoLogin, setAutoLogin] = useState(false);
  const [isReady, setIsReady] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(false), 3000);
    return () => clearTimeout(timer); // 메모리 누수 방지
  }, []);

  const handleLogin = () => {
    console.log('로그인 시도:', id, password);
  };

  const handleKakaoLogin = () => {
    console.log('카카오 로그인 시도');
  };

  const handleSignUp = () => {
    console.log('회원가입 시도');
  };

  if (isReady) return <Splash />;

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <LogoArea />
        <LoginForm
          id={id}
          setId={setId}
          password={password}
          setPassword={setPassword}
          autoLogin={autoLogin}
          setAutoLogin={setAutoLogin}
        />
        <LoginButton onPress={handleLogin} disabled={!id || !password} />
        <KakaoLoginButton onPress={handleKakaoLogin} />
        <SignUpLink onPress={handleSignUp} />
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
});
