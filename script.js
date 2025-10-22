
      // Update time in miliseconds
const timeElement = document.querySelector(
'[data-testid="test-user-time"]'
);
function updateTime() {
const now = Date.now();
timeElement.textContent = now;
}
updateTime();
setInterval(updateTime, 1000);

document.addEventListener("DOMContentLoaded", function () {
const socialLinks = document.querySelectorAll(".social-link");

// Keyboard nav accessibility for social icons
socialLinks.forEach((link) => {
    link.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.click();
    }
    });
});
});
