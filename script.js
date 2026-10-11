/* =========================================================
🌌 A GIFT HIDDEN AMONG THE STARS
Chapter 1: The Secret Entrance
Chapter 2: The Magical Gift
Chapter 3: A Letter for Paglu
Complete JavaScript
========================================================= */

(() => {
"use strict";

const passwordInput = document.getElementById("password");
const unlockButton = document.getElementById("unlockButton");
const errorMessage = document.getElementById("errorMessage");
const starsContainer = document.getElementById("stars");
const flowersContainer = document.getElementById("flowers");
const loginCard = document.querySelector(".login-card");

const secretPassword = "Paglu18jan";
let isUnlocked = false;
let giftOpened = false;
let letterOpened = false;

/* ---------------------------------------------------------
CHAPTER STYLES
Everything for the gift and letter is styled here.
Your existing index.html and style.css stay unchanged.
--------------------------------------------------------- */

function addChapterStyles() {
if (document.getElementById("pagluChapterStyles")) return;

const style = document.createElement("style");
style.id = "pagluChapterStyles";

style.textContent = `
.paglu-scene {
position: fixed;
inset: 0;
z-index: 9999;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
overflow-y: auto;
overflow-x: hidden;
padding: 30px 18px;
box-sizing: border-box;
color: #fff5ff;
text-align: center;
font-family: Georgia, "Times New Roman", serif;
background:
radial-gradient(ellipse at 50% 38%,
rgba(113, 72, 158, .36), transparent 55%),
radial-gradient(ellipse at 15% 15%,
rgba(99, 91, 173, .22), transparent 50%),
linear-gradient(160deg, #19172f, #17142c 55%, #090d20);
opacity: 0;
transition: opacity 1s ease;
isolation: isolate;
}

.paglu-scene.visible {
opacity: 1;
}

.paglu-scene * {
box-sizing: border-box;
}

.paglu-scene::before {
content: "";
position: fixed;
inset: 0;
pointer-events: none;
z-index: -1;
opacity: .4;
background-image:
radial-gradient(2px 2px at 12% 18%, white 50%, transparent 100%),
radial-gradient(2px 2px at 80% 15%, white 50%, transparent 100%),
radial-gradient(3px 3px at 70% 65%, #ffd5f2 50%, transparent 100%),
radial-gradient(2px 2px at 22% 75%, white 50%, transparent 100%),
radial-gradient(2px 2px at 90% 82%, white 50%, transparent 100%),
radial-gradient(2px 2px at 45% 8%, #e4d0ff 50%, transparent 100%);
}

.paglu-scene .scene-heading {
max-width: 560px;
margin: 0 auto 24px;
color: #fff0fb;
font-size: clamp(1.3rem, 5vw, 2rem);
line-height: 1.55;
text-shadow: 0 0 22px rgba(255, 174, 226, .45);
}

.paglu-scene .scene-subtitle {
max-width: 430px;
margin: 12px auto;
color: #e7d7f5;
font-family: Georgia, "Times New Roman", serif;
font-size: 1rem;
line-height: 1.8;
}

.paglu-scene .scene-button {
display: inline-block;
max-width: 100%;
margin-top: 22px;
padding: 14px 23px;
border: 1px solid rgba(255, 218, 244, .6);
border-radius: 999px;
color: #fff9ff;
background: linear-gradient(135deg, #b967a0, #8463ba);
box-shadow: 0 0 25px rgba(226, 139, 218, .2);
font: 600 1rem Georgia, "Times New Roman", serif;
cursor: pointer;
transition: transform .25s ease, box-shadow .25s ease;
}

.paglu-scene .scene-button:active {
transform: scale(.97);
}

.paglu-scene .scene-button:focus-visible {
outline: 2px solid white;
outline-offset: 4px;
}

.paglu-stars {
position: absolute;
inset: 0;
overflow: hidden;
pointer-events: none;
z-index: -1;
}

.paglu-tiny-star {
position: absolute;
width: 3px;
height: 3px;
border-radius: 50%;
background: #fff;
box-shadow: 0 0 9px 2px rgba(255, 220, 255, .45);
animation: pagluTwinkle 3s ease-in-out infinite alternate;
}

@keyframes pagluTwinkle {
from { opacity: .25; transform: scale(.8); }
to { opacity: .95; transform: scale(1.3); }
}

/* CHAPTER 2: GIFT */

.paglu-gift-area {
position: relative;
width: min(210px, 62vw);
height: 190px;
display: flex;
align-items: flex-end;
justify-content: center;
margin: 12px auto 18px;
perspective: 700px;
}

.paglu-gift-glow {
position: absolute;
width: 175px;
height: 150px;
left: 50%;
bottom: 5px;
transform: translateX(-50%);
border-radius: 50%;
background: rgba(244, 121, 205, .25);
filter: blur(28px);
transition: opacity .7s ease, transform .7s ease;
}

.paglu-gift-box {
position: relative;
width: 174px;
max-width: 100%;
height: 122px;
border-radius: 0 0 14px 14px;
background: linear-gradient(135deg, #ffb5da, #e879b3);
box-shadow:
0 12px 30px rgba(0, 0, 0, .22),
inset -8px 0 16px rgba(158, 50, 121, .1);
cursor: pointer;
z-index: 2;
animation: pagluGiftFloat 3s ease-in-out infinite;
-webkit-tap-highlight-color: transparent;
}

.paglu-ribbon-vertical {
position: absolute;
top: 0;
bottom: 0;
left: 42%;
width: 28px;
background: linear-gradient(90deg, #fff1fb, #fff9ff, #ffe3f3);
}

.paglu-ribbon-horizontal {
position: absolute;
left: -5%;
right: -5%;
top: 43px;
height: 20px;
background: linear-gradient(180deg, #fff6ff, #f8dff2);
box-shadow: 0 2px 4px rgba(114, 52, 100, .1);
}

.paglu-gift-lid {
position: absolute;
left: -8%;
top: -19px;
width: 116%;
height: 34px;
border-radius: 10px;
background: linear-gradient(135deg, #ffc2e1, #f28fca);
box-shadow: 0 5px 10px rgba(0, 0, 0, .15);
transform-origin: 12% 100%;
transition: transform .9s cubic-bezier(.2, .8, .2, 1);
z-index: 3;
}

.paglu-bow {
position: absolute;
top: -43px;
left: 47%;
width: 31px;
height: 25px;
border: 8px solid #fff0fa;
border-radius: 80% 30% 70% 30%;
transform: rotate(25deg);
z-index: 4;
}

.paglu-bow::after {
content: "";
position: absolute;
width: 27px;
height: 23px;
top: -6px;
left: 8px;
border: 8px solid #fff0fa;
border-radius: 30% 80% 30% 70%;
transform: rotate(35deg);
}

.paglu-scene.opening .paglu-gift-lid {
transform: translate(-12px, -48px) rotate(-24deg);
}

.paglu-scene.opening .paglu-gift-glow {
opacity: .9;
transform: translateX(-50%) scale(1.45);
}

.paglu-scene.opening .paglu-gift-box {
animation: none;
}

.paglu-gift-light {
position: absolute;
width: 14px;
height: 14px;
left: 50%;
top: 50%;
border-radius: 50%;
background: #fff4ff;
opacity: 0;
pointer-events: none;
transform: translate(-50%, -50%) scale(.2);
}

.paglu-scene.opening .paglu-gift-light {
animation: pagluLightBurst 1.2s ease-out forwards;
}

@keyframes pagluLightBurst {
0% {
opacity: 0;
transform: translate(-50%, -50%) scale(.2);
box-shadow: 0 0 0 0 rgba(255, 207, 246, .5);
}
35% {
opacity: .95;
box-shadow:
0 0 0 45px rgba(255, 207, 246, .12),
0 0 0 95px rgba(196, 159, 255, .08),
0 0 35px 15px #ffdbf7;
}
100% {
opacity: 0;
transform: translate(-50%, -50%) scale(1.8);
box-shadow:
0 0 0 100px transparent,
0 0 0 160px transparent;
}
}

@keyframes pagluGiftFloat {
0%, 100% { transform: translateY(0); }
50% { transform: translateY(-7px); }
}

.paglu-gift-message {
max-width: 440px;
min-height: 56px;
margin: 0 auto 12px;
font-size: clamp(1.25rem, 4.8vw, 1.8rem);
line-height: 1.5;
color: #fff0fb;
text-shadow: 0 0 18px rgba(255, 172, 225, .35);
}

.paglu-tap-text {
margin-top: 10px;
color: #f0d8f5;
font-size: 1rem;
animation: pagluHint 2s ease-in-out infinite;
}

@keyframes pagluHint {
0%, 100% { opacity: .7; }
50% { opacity: 1; }
}

/* CHAPTER 3: LETTER */

.paglu-letter-scene {
justify-content: flex-start;
padding-top: max(35px, env(safe-area-inset-top));
padding-bottom: max(35px, env(safe-area-inset-bottom));
}

.paglu-envelope-wrap {
position: relative;
width: min(260px, 78vw);
height: 172px;
margin: 18px auto 25px;
cursor: pointer;
-webkit-tap-highlight-color: transparent;
flex-shrink: 0;
}

.paglu-envelope-shadow {
position: absolute;
inset: 20px 8px 0;
border-radius: 10px;
background: rgba(0, 0, 0, .25);
filter: blur(18px);
}

.paglu-envelope {
position: absolute;
inset: 24px 0 0;
border-radius: 8px;
background: linear-gradient(145deg, #ffc7e3, #e997c8);
box-shadow: 0 12px 30px rgba(0, 0, 0, .24);
overflow: hidden;
}

.paglu-envelope::before {
content: "";
position: absolute;
inset: 0;
background: linear-gradient(35deg, transparent 49%, rgba(255,255,255,.22) 50%, transparent 51%);
}

.paglu-envelope-flap {
position: absolute;
top: 24px;
left: 0;
width: 100%;
height: 105px;
background: linear-gradient(145deg, #ffe1f0, #f7b3d8);
clip-path: polygon(0 0, 100% 0, 50% 100%);
transform-origin: 50% 0;
transition: transform .65s ease;
z-index: 4;
}

.paglu-envelope-heart {
position: absolute;
z-index: 5;
top: 69px;
left: 50%;
transform: translateX(-50%);
font-size: 31px;
filter: drop-shadow(0 2px 3px rgba(121, 43, 98, .2));
transition: opacity .3s ease;
}

.paglu-letter-paper {
position: absolute;
left: 8%;
right: 8%;
top: 18px;
height: 120px;
padding-top: 25px;
border-radius: 5px;
color: #8b4d78;
background: #fff9fd;
box-shadow: 0 4px 12px rgba(0, 0, 0, .12);
font-size: 1.05rem;
transition: transform .8s ease, height .8s ease;
z-index: 2;
}

.paglu-envelope-wrap.opened .paglu-envelope-flap {
transform: rotateX(180deg);
z-index: 1;
}

.paglu-envelope-wrap.opened .paglu-envelope-heart {
opacity: 0;
}

.paglu-envelope-wrap.opened .paglu-letter-paper {
transform: translateY(-72px);
}

.paglu-letter-card {
width: 100%;
max-width: 520px;
margin: 0 auto;
padding: 25px 22px;
border: 1px solid rgba(255, 222, 247, .26);
border-radius: 20px;
background: linear-gradient(
145deg,
rgba(255, 242, 253, .09),
rgba(193, 161, 242, .07)
);
box-shadow: 0 12px 38px rgba(0, 0, 0, .14);
backdrop-filter: blur(8px);
text-align: left;
opacity: 0;
transform: translateY(15px);
transition: opacity .8s ease, transform .8s ease;
}

.paglu-letter-card.revealed {
opacity: 1;
transform: translateY(0);
}

.paglu-letter-card h2 {
margin: 0 0 20px;
color: #ffd9ef;
text-align: center;
font-size: clamp(1.5rem, 5vw, 2rem);
line-height: 1.4;
font-weight: normal;
}

.paglu-letter-body {
color: #f7eaf9;
font-size: 1rem;
line-height: 1.95;
white-space: pre-line;
overflow-wrap: anywhere;
}

.paglu-letter-signature {
margin-top: 22px;
color: #ffc9e8;
text-align: right;
font-style: italic;
line-height: 1.8;
}

.paglu-letter-footer {
margin-top: 18px;
color: #d9c7f0;
text-align: center;
font-size: .9rem;
line-height: 1.8;
}

.paglu-next-scene {
max-width: 470px;
margin: 0 auto;
}

.paglu-memory-symbol {
margin: 18px 0;
font-size: clamp(3.5rem, 16vw, 5.5rem);
filter: drop-shadow(0 0 24px rgba(255, 176, 225, .35));
animation: pagluGiftFloat 3s ease-in-out infinite;
}

@media (max-width: 380px) {
.paglu-scene { padding-left: 14px; padding-right: 14px; }
.paglu-letter-card { padding: 21px 17px; }
.paglu-letter-body { font-size: .96rem; line-height: 1.85; }
.paglu-gift-area { transform: scale(.92); margin-top: 0; }
}

@media (prefers-reduced-motion: reduce) {
.paglu-scene *,
.paglu-scene *::before,
.paglu-scene *::after {
animation-duration: .01ms !important;
animation-iteration-count: 1 !important;
scroll-behavior: auto !important;
}
}
`;

document.head.appendChild(style);

}

/* ---------------------------------------------------------
STARS AND FLOWER PETALS
--------------------------------------------------------- */

function createStars() {
if (!starsContainer) return;

starsContainer.innerHTML = "";
const fragment = document.createDocumentFragment();

for (let i = 0; i < 55; i++) {
const star = document.createElement("span");
star.className = "paglu-tiny-star";
star.style.left = Math.random() * 100 + "%";
star.style.top = Math.random() * 100 + "%";
star.style.opacity = (0.3 + Math.random() * 0.7).toFixed(2);
star.style.animationDelay = Math.random() * 3 + "s";
star.style.animationDuration = (2.5 + Math.random() * 3) + "s";
fragment.appendChild(star);
}

starsContainer.appendChild(fragment);

}

function createPetals() {
if (!flowersContainer) return;

flowersContainer.innerHTML = "";
const petals = ["🌸", "✿", "❀", "🌷", "✧", "❋"];
const fragment = document.createDocumentFragment();

for (let i = 0; i < 7; i++) {
const petal = document.createElement("span");
petal.textContent = petals[i % petals.length];
petal.style.position = "absolute";
petal.style.left = Math.random() * 92 + "%";
petal.style.top = Math.random() * 90 + "%";
petal.style.fontSize = (12 + Math.random() * 10) + "px";
petal.style.opacity = ".55";
petal.style.pointerEvents = "none";
petal.style.animation = "pagluPetalFloat " +
(5 + Math.random() * 4) + "s ease-in-out infinite";
petal.style.animationDelay = Math.random() * 4 + "s";
fragment.appendChild(petal);
}

flowersContainer.appendChild(fragment);

}

function addPetalAnimation() {
if (document.getElementById("pagluPetalAnimation")) return;

const style = document.createElement("style");
style.id = "pagluPetalAnimation";
style.textContent = `
@keyframes pagluPetalFloat {
0%, 100% { transform: translateY(0) rotate(0deg); }
50% { transform: translateY(-13px) rotate(12deg); }
}
`;
document.head.appendChild(style);

}

/* ---------------------------------------------------------
GENERAL HELPERS
--------------------------------------------------------- */

function wait(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}

function typeText(element, text, speed = 45) {
return new Promise(resolve => {
if (!element) {
resolve();
return;
}

let index = 0;
element.textContent = "";

function typeNextCharacter() {
if (index >= text.length) {
resolve();
return;
}

element.textContent += text.charAt(index);
index++;

// Use a single scheduled callback at a time.
setTimeout(typeNextCharacter, speed);
}

typeNextCharacter();
});

}

function showError() {
if (errorMessage) {
errorMessage.textContent = "That isn't quite right, Paglu's secret is still safe. 💗";
errorMessage.style.display = "block";
}

if (loginCard) {
loginCard.classList.remove("shake");
void loginCard.offsetWidth;
loginCard.classList.add("shake");

setTimeout(() => loginCard.classList.remove("shake"), 550);
}

if (passwordInput) {
passwordInput.value = "";
passwordInput.focus();
passwordInput.setAttribute("aria-invalid", "true");
}

}

/* ---------------------------------------------------------
CHAPTER 1: PASSWORD ENTRANCE
--------------------------------------------------------- */

function unlockStars() {
if (isUnlocked) return;
isUnlocked = true;

if (unlockButton) {
unlockButton.disabled = true;
unlockButton.style.opacity = ".5";
}

if (passwordInput) {
passwordInput.disabled = true;
passwordInput.removeAttribute("aria-invalid");
}

if (errorMessage) errorMessage.style.display = "none";

if (starsContainer) {
starsContainer.style.transition = "opacity 1.5s ease";
starsContainer.style.opacity = "1";
}

if (!loginCard) {
showGiftScene();
return;
}

loginCard.innerHTML = `
<div style="font-size:2.2rem;margin-bottom:18px;">🌙 ✨ 🌸</div>
<h1 id="storyText"
style="font-family:Georgia,serif;font-weight:normal;
font-size:clamp(1.35rem,5vw,1.8rem);
line-height:1.7;color:#fff0fb;
text-shadow:0 0 20px rgba(255,180,230,.35);">
</h1>
<div style="margin-top:18px;color:#e7d7f5;font-size:1.5rem;">
⋆｡°✩
</div>
`;

typeStory();

}

async function typeStory() {
const storyText = document.getElementById("storyText");
if (!storyText) {
showGiftScene();
return;
}

await typeText(storyText, "Password Accepted...", 40);
await wait(650);

await typeText(storyText, "Hello, Paglu...", 50);
await wait(800);

await typeText(storyText, "I've been waiting for you.", 38);
await wait(900);

await typeText(storyText, "Your birthday story is ready...", 38);
await wait(1100);

storyText.style.fontSize = "clamp(1.1rem,4.5vw,1.4rem)";
await typeText(storyText, "✨ The journey is about to begin... ✨", 35);
await wait(1100);

showGiftScene();

}

/* ---------------------------------------------------------
CHAPTER 2: THE MAGICAL GIFT
--------------------------------------------------------- */

function createScene(className) {
const scene = document.createElement("section");
scene.className = "paglu-scene " + className;
scene.setAttribute("aria-live", "polite");

const stars = document.createElement("div");
stars.className = "paglu-stars";
stars.setAttribute("aria-hidden", "true");

const fragment = document.createDocumentFragment();

for (let i = 0; i < 35; i++) {
const star = document.createElement("span");
star.className = "paglu-tiny-star";
star.style.left = Math.random() * 100 + "%";
star.style.top = Math.random() * 100 + "%";
star.style.animationDelay = Math.random() * 3 + "s";
star.style.animationDuration = (2.5 + Math.random() * 3) + "s";
fragment.appendChild(star);
}

stars.appendChild(fragment);
scene.appendChild(stars);
document.body.appendChild(scene);

requestAnimationFrame(() => scene.classList.add("visible"));
return scene;

}

function showGiftScene() {
addChapterStyles();

const giftScene = createScene("paglu-gift-scene");

giftScene.innerHTML += `
<div class="paglu-gift-message">
✨ Something beautiful is waiting... ✨
</div>

<div class="paglu-gift-area">
<div class="paglu-gift-glow"></div>

<div class="paglu-gift-box" role="button"
tabindex="0" aria-label="Open your birthday gift">
<div class="paglu-gift-lid"></div>
<div class="paglu-ribbon-vertical"></div>
<div class="paglu-ribbon-horizontal"></div>
<div class="paglu-bow"></div>
</div>
</div>

<div class="paglu-tap-text">
🎁 Tap the gift to open it
</div>

<div class="paglu-gift-light"></div>
`;

const giftBox = giftScene.querySelector(".paglu-gift-box");
const tapText = giftScene.querySelector(".paglu-tap-text");

function handleGiftTap() {
openGift(giftScene);
}

giftBox.addEventListener("click", handleGiftTap);
giftBox.addEventListener("keydown", event => {
if (event.key === "Enter" || event.key === " ") {
event.preventDefault();
handleGiftTap();
}
});
tapText.addEventListener("click", handleGiftTap);

}

function openGift(giftScene) {
if (giftOpened) return;
giftOpened = true;

giftScene.classList.add("opening");

const tapText = giftScene.querySelector(".paglu-tap-text");
if (tapText) tapText.textContent = "A little magic, just for you... 💗";

setTimeout(() => {
const message = giftScene.querySelector(".paglu-gift-message");
if (message) {
message.textContent = "💌 A letter written just for you...";
}

const continueButton = document.createElement("button");
continueButton.className = "scene-button";
continueButton.type = "button";
continueButton.textContent = "Discover your letter 💌";
continueButton.addEventListener("click", () => {
giftScene.style.opacity = "0";
setTimeout(() => {
giftScene.remove();
showLetterScene();
}, 750);
});

giftScene.appendChild(continueButton);
}, 1400);

}

/* ---------------------------------------------------------
CHAPTER 3: A HEARTFELT LETTER FOR PAGLU
--------------------------------------------------------- */

function showLetterScene() {
if (letterOpened) return;
letterOpened = true;

const scene = createScene("paglu-letter-scene");

scene.innerHTML += `
<div class="scene-heading">
A little letter from the heart 💌
</div>

<p class="scene-subtitle">
There are some things that deserve to be said
a little more gently, and remembered a little longer.
</p>

<div class="paglu-envelope-wrap" role="button"
tabindex="0" aria-label="Open your birthday letter">
<div class="paglu-envelope-shadow"></div>
<div class="paglu-envelope"></div>
<div class="paglu-letter-paper">For Paglu, with love ♡</div>
<div class="paglu-envelope-flap"></div>
<div class="paglu-envelope-heart">💗</div>
</div>

<p class="scene-subtitle paglu-envelope-prompt">
Tap the envelope to read your letter ✨
</p>

<article class="paglu-letter-card" aria-label="Birthday letter">
<h2>Happy Birthday, Paglu 💗</h2>

<div class="paglu-letter-body"></div>

<div class="paglu-letter-signature">
May your heart always find reasons to smile. 🌷
</div>

<div class="paglu-letter-footer">
Made with care, just for you ✨
</div>

<div style="text-align:center;">
<button class="scene-button paglu-memories-button" type="button">
Continue to our memories ✨
</button>
</div>
</article>
`;

const envelope = scene.querySelector(".paglu-envelope-wrap");
const prompt = scene.querySelector(".paglu-envelope-prompt");
const card = scene.querySelector(".paglu-letter-card");
const letterBody = scene.querySelector(".paglu-letter-body");
const memoriesButton = scene.querySelector(".paglu-memories-button");

const letterParagraphs = [
"Some people make ordinary moments feel special just by being part of them. You have a way of making the world feel a little brighter, and today I hope that same brightness finds its way back to you.",

"On your birthday, I wish you days filled with little joys, peaceful moments, unexpected kindness, and dreams that slowly turn into beautiful memories. May you always find warmth when life feels cold, courage when things feel difficult, and a reason to smile even on the quietest days.",

"I hope this new chapter of your life brings you closer to everything your heart has been wishing for. Never forget that you deserve happiness, gentleness, and all the beautiful things life has yet to show you.",

"Today is your day, Paglu. I hope it feels as lovely and special as you deserve. Happy Birthday, once again. 🌸"
];

function openLetter() {
if (envelope.classList.contains("opened")) return;

envelope.classList.add("opened");
prompt.textContent = "A little wish, from the heart... 💗";

setTimeout(() => {
card.classList.add("revealed");
letterBody.textContent = letterParagraphs.join("\n\n");
}, 650);
}

envelope.addEventListener("click", openLetter);
envelope.addEventListener("keydown", event => {
if (event.key === "Enter" || event.key === " ") {
event.preventDefault();
openLetter();
}
});

memoriesButton.addEventListener("click", () => {
scene.style.opacity = "0";

setTimeout(() => {
scene.remove();
showMemoriesInvitation();
}, 750);
});

}

/* ---------------------------------------------------------
TRANSITION: INVITATION TO THE MEMORIES CHAPTER
Your personal photos and videos can be added next.
--------------------------------------------------------- */

function showMemoriesInvitation() {
const scene = createScene("paglu-next-scene");

scene.innerHTML += `
<div class="scene-heading">
And this is only the beginning... 🌙
</div>

<div class="paglu-memory-symbol" aria-hidden="true">🌸 ✨ 🌌</div>

<div class="scene-heading" style="font-size:clamp(1.25rem,4.5vw,1.7rem);">
Our little world of memories
</div>

<p class="scene-subtitle">
There are more little moments waiting to be shared.
The next chapter will hold your favourite photos,
videos, and the memories that make this story yours.
</p>

<p class="scene-subtitle" style="color:#ffcce9;">
Until then, keep this little birthday wish close to your heart. 💗
</p>
`;

}

/* ---------------------------------------------------------
STARTUP
--------------------------------------------------------- */

addChapterStyles();
addPetalAnimation();
createStars();
createPetals();

if (unlockButton) {
unlockButton.addEventListener("click", checkPassword);
}

if (passwordInput) {
passwordInput.addEventListener("keydown", event => {
if (event.key === "Enter") checkPassword();
});
}

function checkPassword() {
if (!passwordInput || isUnlocked) return;

if (passwordInput.value.trim() === secretPassword) {
unlockStars();
} else {
showError();
}

}
})();
