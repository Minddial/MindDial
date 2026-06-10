import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import IdField        from '../components/signup/IdField';
import PasswordField  from '../components/signup/PasswordField';
import SubmitButton   from '../components/signup/SubmitButton';
import { checkIdAvailable, signUpUser } from '../utils/signUpService';

function isValidPassword(pw) {
  if (pw.length < 6 || pw.length > 20) return false;
  const hasLetter  = /[a-zA-Z]/.test(pw);
  const hasNumber  = /[0-9]/.test(pw);
  const hasSpecial = /[^a-zA-Z0-9]/.test(pw);
  return [hasLetter, hasNumber, hasSpecial].filter(Boolean).length >= 2;
}

export default function SignUpPage({ navigation }) {
  const [id,          setId]          = useState('');
  const [idChecked,   setIdChecked]   = useState(false);
  const [idAvailable, setIdAvailable] = useState(null); // null | true | false

  const [password, setPassword] = useState('');
  const [confirm,  setConfirm]  = useState('');

  const [submitting, setSubmitting] = useState(false);

  // 아이디 변경 시 중복확인 상태 초기화
  const handleIdChange = useCallback((text) => {
    setId(text);
    setIdChecked(false);
    setIdAvailable(null);
  }, []);

  // Firebase 중복확인
  const handleCheckDuplicate = useCallback(async () => {
    try {
      const available = await checkIdAvailable(id);
      setIdChecked(true);
      setIdAvailable(available);
    } catch {
      Alert.alert('오류', '중복확인 중 문제가 발생했어요. 다시 시도해주세요.');
    }
  }, [id]);

  // 제출 버튼 활성화 조건
  const pwOk      = isValidPassword(password);
  const confirmOk = password === confirm && confirm.length > 0;
  const isFormValid = idChecked && idAvailable === true && pwOk && confirmOk;

  // Firebase 회원가입
  const handleSubmit = async () => {
    if (!isFormValid || submitting) return;
    setSubmitting(true);
    try {
      await signUpUser(id, password);
      Alert.alert('회원가입 완료', `${id}님, 환영합니다!`, [
        { text: '확인', onPress: () => navigation.navigate('Login') },
      ]);
    } catch {
      Alert.alert('오류', '회원가입 중 문제가 발생했어요. 다시 시도해주세요.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* 헤더 */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.navigate('Login')}
            activeOpacity={0.7}
          >
            <Ionicons name="chevron-back" size={24} color="#111" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>회원가입</Text>
        </View>

        {/* 본문 */}
        <ScrollView
          style={styles.flex}
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <IdField
            value={id}
            onChangeText={handleIdChange}
            onCheckDuplicate={handleCheckDuplicate}
            isChecked={idChecked}
            isAvailable={idAvailable}
          />
          <PasswordField
            password={password}
            confirm={confirm}
            onChangePassword={setPassword}
            onChangeConfirm={setConfirm}
          />
        </ScrollView>

        {/* 하단 버튼 */}
        <View style={styles.footer}>
          {submitting ? (
            <ActivityIndicator size="large" color="#222" />
          ) : (
            <SubmitButton enabled={isFormValid} onPress={handleSubmit} />
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flex: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 4,
  },
  backBtn: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 32,
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 8,
    backgroundColor: '#fff',
    minHeight: 74,
    justifyContent: 'center',
  },
});
