function loadFooter() {
    fetch("footer.html")
      .then(res => res.text())
      .then(data => {
        document.getElementById("footer").innerHTML = data;
      })
      .catch(err => console.error("Footer load error:", err));
  }
  
  window.addEventListener("DOMContentLoaded", loadFooter);