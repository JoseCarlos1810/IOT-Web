function cambiarPoder(poder) {
  const mario = document.getElementById("mario");
  const body = document.body;
  switch (poder) {
    case "champiñon":
      mario.src = "Champiñon.webp";
      body.style.background = "#fb0505ff";
      break;
    case "fuego":
      mario.src = "Fuego.webp";
      body.style.background = "#fba105ff";
      break;
    case "estrella":
      mario.src = "Estrella.webp";
      body.style.background = "#e2fb05ff";
      break;
    case "hielo":
      mario.src = "Hielo.webp";
      body.style.background = "#05f7fbff";
      break;
  }
}