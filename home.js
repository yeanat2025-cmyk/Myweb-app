// home.js

// 🔐 Auth check
auth.onAuthStateChanged((user) => {
    if (user) {
        loadUserData(user);
    } else {
        window.location.href = "login.html";
    }
});

// 👤 Load user data
function loadUserData(user) {
    db.collection("users").doc(user.uid).get()
    .then((doc) => {
        if (doc.exists) {
            const data = doc.data();

            document.getElementById("displayUserName").innerText =
                data.nickname || "User";

            document.getElementById("displayUID").innerText =
                "ID: " + (data.uid_number || "------");
        }
    })
    .catch(err => console.error(err));
}

// 📄 Navigation
function go(page) {
    window.location.href = page;
}

function profileCheck() {
    go("profile.html");
}

// 🎞️ Slider
let slides = [
    "assets/slider/slide1.png",
    "assets/slider/slide2.png",
    "assets/slider/slide3.png"
];

let index = 0;

setInterval(() => {
    index = (index + 1) % slides.length;

    let img = document.getElementById("sliderImg");
    if (img) img.src = slides[index];

}, 4000);
