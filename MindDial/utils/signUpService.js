import { firebase_db } from '../firebaseConfig';
/**
 * 아이디 중복 확인
 * @param {string} id
 * @returns {Promise<boolean>} true = 사용 가능, false = 중복
 */
export async function checkIdAvailable(id) {
  try {
    const snapshot = await firebase_db
      .ref(`users/${id}`)
      .once('value');
    // 해당 경로에 데이터가 없으면 사용 가능
    return !snapshot.exists();
  } catch (error) {
    console.error('중복확인 오류:', error);
    throw error;
  }
}
/**
 * 회원가입 — Firebase Realtime DB에 유저 저장
 * @param {string} id
 * @param {string} password
 * @returns {Promise<void>}
 */
export async function signUpUser(id, password) {
  try {
    await firebase_db.ref(`users/${id}`).set({
      id,
      password,           // 실서비스에서는 반드시 해시 처리 필요
      createdAt: Date.now(),
    });
  } catch (error) {
    console.error('회원가입 오류:', error);
    throw error;
  }
}