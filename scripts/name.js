let name = window.prompt("Qual é o seu nome?");

// Verifica se o usuário digitou "gamer" (case-insensitive)
if (name.toLowerCase() === "gamer") {
    // Redireciona para gamer.html
    window.location.href = "/eggs/gamer.html/";
} else {
    // Opcional: mensagem caso não seja "gamer"
    alert("Olá, " + name + "!");
}
