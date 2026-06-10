import { firebase_db } from '../firebaseConfig';

/**
 * 로그인 — Firebase DB에서 아이디/비밀번호 검증
 * @param {string} id
 * @param {string} password
 * @returns {Promise<{success: boolean, user?: object, message?: string}>}
 */
export async function loginUser(id, password) {
  try {
    const snapshot = await firebase_db
      .ref(`users/${id}`)
      .once('value');

    // 아이디 없음
    if (!snapshot.exists()) {
      return { success: false, message: '아이디를 찾을 수 없어요' };
    }

    const user = snapshot.val();

    // 비밀번호 불일치
    if (user.password !== password) {
      return { success: false, message: '비밀번호가 올바르지 않아요' };
    }

    return { success: true, user };
  } catch (error) {
    console.error('로그인 오류:', error);
    throw error;
  }
}
