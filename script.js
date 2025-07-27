const terminal = document.getElementById("terminal");
const input = document.getElementById("input");

input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const cmd = input.value.trim();
    const prompt = document.createElement("div");
    prompt.innerHTML = `<span class="prompt">user@ipswitch:~$</span> ${cmd}`;
    terminal.appendChild(prompt);

    const output = document.createElement("div");
    switch(cmd.toLowerCase()) {
      case "tor":
        output.textContent = "[+] TOR activado. IP falsa: 185.23.56.1";
        break;
      case "logs --encrypt":
        output.textContent = "[🔐] Log cifrado con AES + GPG.";
        break;
      case "ai --ask":
        output.textContent = "💬 AI responde: ¿En qué te ayudo hoy?";
        break;
      case "paranoico":
        output.textContent = "⚠️ Modo paranoico activado. Analizando entorno...";
        break;
      case "exit":
        output.textContent = "👋 Cerrando shell virtual...";
        break;
      default:
        output.textContent = "⛔ Comando no reconocido.";
    }

    terminal.appendChild(output);
    input.value = "";
    terminal.scrollTop = terminal.scrollHeight;
  }
});
