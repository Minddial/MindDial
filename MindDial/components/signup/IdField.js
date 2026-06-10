import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

export default function IdField({
  value,
  onChangeText,
  onCheckDuplicate,  // 이제 async 함수
  isChecked,
  isAvailable,
}) {
  const [loading, setLoading] = useState(false);

  const isValidFormat = /^[a-z0-9]{4,12}$/.test(value);
  const showError     = isChecked && isAvailable === false;
  const showSuccess   = isChecked && isAvailable === true;

  const handlePress = async () => {
    setLoading(true);
    try {
      await onCheckDuplicate();
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>아이디</Text>

      <View style={styles.row}>
        <TextInput
          style={[styles.input, showError && styles.inputError]}
          placeholder="아이디 입력"
          placeholderTextColor="#bbb"
          value={value}
          onChangeText={onChangeText}
          autoCapitalize="none"
          maxLength={12}
        />
        <TouchableOpacity
          style={[
            styles.checkBtn,
            (!isValidFormat || loading) && styles.checkBtnDisabled,
          ]}
          onPress={handlePress}
          disabled={!isValidFormat || loading}
          activeOpacity={0.8}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.checkBtnText}>중복확인</Text>
          )}
        </TouchableOpacity>
      </View>

      {!showError && !showSuccess && (
        <Text style={styles.hint}>4~12자/영문 소문자(숫자 조합 가능)</Text>
      )}
      {showError   && <Text style={styles.errorText}>이미 사용 중인 아이디예요</Text>}
      {showSuccess && <Text style={styles.successText}>사용 가능한 아이디예요</Text>}
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  input: {
    flex: 1,
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
  checkBtn: {
    height: 52,
    paddingHorizontal: 16,
    backgroundColor: '#222',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 80,
  },
  checkBtnDisabled: {
    backgroundColor: '#ccc',
  },
  checkBtnText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
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
  successText: {
    fontSize: 12,
    color: '#22b573',
    marginTop: 6,
  },
});
