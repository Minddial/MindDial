import React, { useState, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Alert,
  LogBox,
} from 'react-native';

import Splash            from '../components/Splash';
import LogoArea          from '../components/login/LogoArea';
import LoginForm         from '../components/login/LoginForm';
import LoginButton       from '../components/login/LoginButton';
import KakaoLoginButton  from '../components/login/KakaoLoginButton';
import SignUpLink        from '../components/login/SignUpLink';
import { loginUser }     from '../utils/authService';

export default function LoginPage({ navigation }) {
  LogBox.ignoreLogs(['Warning: ...']);

  const [id,        setId]        = useState('');
  const [password,  setPassword]  = useState('');
  const [autoLogin, setAutoLogin] = useState(false);
  const [isReady,   setIsReady]   = useState(true);
  const [loading,   setLoading]   = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Firebase 로그인
  const handleLogin = async () => {
    if (!id || !password || loading) return;

    setLoading(true);
    try {
      const result = await loginUser(id, password);

      if (result.success) {
        // 로그인 성공 — 이동할 페이지로 교체 (현재는 콘솔 로그)
        // navigation.replace('Home', { user: result.user });
        Alert.alert('로그인 성공', `${id}님, 환영합니다!`);
      } else {
        Alert.alert('로그인 실패', result.message);
      }
    } catch {
      Alert.alert('오류', '로그인 중 문제가 발생했어요. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  const handleKakaoLogin = () => {
    console.log('카카오 로그인 시도');
  };

  // SignUpPage로 이동
  const handleSignUp = () => {
    navigation.navigate('SignUp');
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
        <LoginButton
          onPress={handleLogin}
          disabled={!id || !password || loading}
          loading={loading}
        />
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
