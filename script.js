const copyBtn = document.getElementById("copy-email-btn");
const emailLink = document.getElementById("email-link");
const themeToggleBtn = document.getElementById("theme-toggle-btn");

copyBtn.addEventListener("click", () => {
  const email = emailLink.textContent;

  navigator.clipboard.writeText(email).then(() => {
    const originalText = copyBtn.textContent;
    copyBtn.textContent = "Copié !";

    setTimeout(() => {
      copyBtn.textContent = originalText;
    }, 1500);
  });
});

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeToggleBtn.textContent = "☀️";
}

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");
  themeToggleBtn.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
