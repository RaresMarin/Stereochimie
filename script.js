function fun() {
  if (document.getElementById("dificil").checked) {
    document.getElementById("B").href = "test1.html";
  } else if (document.getElementById("mediu").checked) {
    document.getElementById("B").href = "test.html";
  }
}
let culori = ["#830000", "#ffc60b", "#ff960eff"];
let culoriArmonioase = ["#ff6666", "#fff2b2", "#ff9933"];
function createRandomDivs() {
    for (let i = 0; i < 20; i++) {
        let div = document.createElement("div");

        let randomLeft = Math.floor(Math.random() * window.innerWidth);
        let randomTop = Math.floor(Math.random() * window.innerHeight);

        // Alege aleator între culorile principale și cele armonioase
        let allColors = culori.concat(culoriArmonioase);
        let randomColor = allColors[Math.floor(Math.random() * allColors.length)];

        div.style.position = "absolute";
        div.style.left = randomLeft + "px";
        div.style.top = randomTop + "px";
        div.style.width = "100px";
        div.style.height = "100px";
        div.style.borderRadius = "50%";
        div.style.backgroundColor = randomColor;
        div.style.transition = "opacity 0.5s"; // pentru fade out
        div.style.zIndex = "-1000";


        document.body.appendChild(div);

        // Sterge div-ul după 2 secunde
        setTimeout(() => {
            div.style.opacity = "0"; // fade out
            setTimeout(() => div.remove(), 500); // apoi șterge complet
        }, 2000);
    }
}

// Repetă la fiecare 2 secunde
setInterval(createRandomDivs, 2000);