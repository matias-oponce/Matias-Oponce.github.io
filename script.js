function twitter() {
  const texto = document.getElementById("insulto").innerText;
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank");
}
