
function setLanguage(lang) {
    const messages = {
        pl: "Zadbaj o siebie z AION CARE",
        en: "Take care of yourself with AION CARE",
        ua: "Подбай про себе з AION CARE"
    };
    document.getElementById("welcome-message").innerText = messages[lang];
}
