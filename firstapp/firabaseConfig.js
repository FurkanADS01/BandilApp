// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyBq1dDW-v8IyIXwWDAHnd7cg6SlVUyBP18",
  authDomain: "testapp-83e16.firebaseapp.com",
  projectId: "testapp-83e16",
  storageBucket: "testapp-83e16.appspot.com",
  messagingSenderId: "957280494071",
  appId: "1:957280494071:web:94003fe557ffb7b5620ef2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export default app;