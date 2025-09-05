let name = window.prompt("Qual é o seu nome?");

// Verifica se o usuário digitou "gamer"
if (name.toLowerCase() === "gamer") {
    // Redireciona para a página de jogos
    window.location.href = "./eggs/gamer.html";
} else {
    // Mostra o nome normalmente
    document.writeln(`${name}!`);
}
