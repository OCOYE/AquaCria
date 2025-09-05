let name = window.prompt("Qual é o seu nome?");

// Verifica se o nome digitado é "gamer" (case-insensitive)
if (name && name.toLowerCase() === "gamer") {
    // Redireciona para outra página do seu site
    window.location.href = "./eggs/gamer.html"; // substitua pelo link real
} else {
    alert("Bem-vindo, " + name + "!");
}
