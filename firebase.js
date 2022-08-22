// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAuzR1UO7-ams0P0L6b38nwEtwWKy8q86E",
	authDomain: "nextjs-study-564be.firebaseapp.com",
	projectId: "nextjs-study-564be",
	storageBucket: "nextjs-study-564be.appspot.com",
	messagingSenderId: "6789852297",
	appId: "1:6789852297:web:5f9f097bb4d7724ac1aa58",
	measurementId: "G-GPWN9WPQ1P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (typeof window !== 'undefined') {
	const analytics = getAnalytics(app);
}