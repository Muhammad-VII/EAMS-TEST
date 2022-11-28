importScripts('http://www.gstatic.com/firebasejs/7.24.0/firebase-app.js');
importScripts('http://www.gstatic.com/firebasejs/7.24.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyAspLYyVww16EMNWegmVGbXNmF5NiNH3yo",
    authDomain: "fire-notifi-e1792.firebaseapp.com",
    projectId: "fire-notifi-e1792",
    storageBucket: "fire-notifi-e1792.appspot.com",
    messagingSenderId: "470135378066",
    appId: "1:470135378066:web:ab36532ddf1a77f339d64b",
    measurementId: "G-3CS5BTQGF6"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();