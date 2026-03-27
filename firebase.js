// firebase.js

const firebaseConfig = {
    apiKey: "AIzaSyCzv08ydHYvUue_sgEjDoT221ocAedXYfM",
    authDomain: "myproject-9f21b.firebaseapp.com",
    projectId: "myproject-9f21b",
    storageBucket: "myproject-9f21b.firebasestorage.app",
    messagingSenderId: "670760388595",
    appId: "1:670760388595:web:a88159aa1ef33a4da37486"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export auth
const auth = firebase.auth();
