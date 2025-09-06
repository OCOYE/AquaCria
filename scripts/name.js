let name = window.prompt("Qual é o seu nome?");

// Verifica se o nome digitado é "gamer" (case-insensitive)
if (name && name.toLowerCase() === "gamer") {
    // Redireciona para outra página do seu site
    window.location.href = "./eggs/gamer.html"; // substitua pelo link real
} else if (name && name.toLowerCase() === "aula05") {
    // Redireciona para a página de admin
    window.location.href = "https://www.youtube.com/watch?v=Eqypnw6gQNg";

} else if (name && name.toLowerCase() === "173") {
    // Redireciona para a página de admin
    window.location.href = "https://www.youtube.com/watch?v=CGYuUc9pPtQ";

} else if (name && name.toLowerCase() === "linux") {
    // Redireciona para a página de admin
    window.location.href = "https://www.youtube.com/watch?v=iYWzMvlj2RQ";

} else if (name && name.toLowerCase() === "i_use_arch_btw") {
    // Redireciona para a página de admin
    window.location.href = "https://archlinux.org/";

} else if (name && name.toLowerCase() === "a_and_b") {
    // Redireciona para a página de admin
    window.location.href = "https://www.youtube.com/watch?v=5BaH5bahjMA";

} else {
    document.writeln(`${name}`)
}
