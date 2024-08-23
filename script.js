const texts = [
    "Ishku, Upset, Mera Munna hai tu ❤️",
    "Hai shaam tu, taareef main 💓 Tu chain hai, taqleef main 💔"
];

let currentIndex = 0;

function changeText() {
    currentIndex = (currentIndex + 1) % texts.length;
    document.getElementById("text").innerText = texts[currentIndex];
}

setInterval(changeText, 3000);
