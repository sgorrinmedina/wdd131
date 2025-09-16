document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// --- Hamburger Menu Logic ---
const hamburgerButton = document.getElementById('hamburger-menu');
const navigation = document.querySelector('nav');

hamburgerButton.addEventListener('click', () => {
    
    navigation.classList.toggle('open');
    hamburgerButton.classList.toggle('open');
});
