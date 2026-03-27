// ১. Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyCzv08ydHYvUue_sgEjDoT221ocAedXYfM",
    authDomain: "myproject-9f21b.firebaseapp.com",
    projectId: "myproject-9f21b",
    storageBucket: "myproject-9f21b.firebasestorage.app",
    messagingSenderId: "670760388595",
    appId: "1:670760388595:web:a88159aa1ef33a4da37486"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// ২. ইউজার ডাটা চেক এবং ডিসপ্লে
auth.onAuthStateChanged((user) => {
    if (user) {
        db.collection("users").doc(user.uid).get().then((doc) => {
            if (doc.exists) {
                const data = doc.data();
                document.getElementById("displayUserName").innerText = data.nickname || "User";
                document.getElementById("displayUID").innerText = "ID: " + (data.uid_number || "------");
            }
        });
    } else {
        window.location.href = "login.html"; // লগইন না থাকলে ফেরত পাঠাবে
    }
});

function go(page) {
    window.location.href = page;
}

function profileCheck() {
    go("profile.html");
}

// ৩. স্মার্ট স্লাইডার
let slides = [
    "assets/slider/slide1.png",
    "assets/slider/slide2.png",
    "assets/slider/slide3.png"
];
let index = 0;
setInterval(() => {
    index = (index + 1) % slides.length;
    let img = document.getElementById("sliderImg");
    if(img) img.src = slides[index];
}, 4000);
