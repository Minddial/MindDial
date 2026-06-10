import firebase from "firebase/compat/app";

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/compat/auth";
import "firebase/compat/database";
//import "firebase/compat/firestore";
//import "firebase/compat/functions";
import "firebase/compat/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
  apiKey: "AIzaSyDFRpZs3nDJxBH1kEGytg9KFnT0ptBIYnI",
  authDomain: "minddial-8bb37.firebaseapp.com",
  databaseURL: "https://minddial-8bb37-default-rtdb.firebaseio.com/",
  projectId: "minddial-8bb37",
  storageBucket: "minddial-8bb37.firebasestorage.app",
  messagingSenderId: "246918903024",
  appId: "1:246918903024:web:0436e089cb588ee9893e35",
  measurementId: "G-E6CZCD6V72"
};
//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()