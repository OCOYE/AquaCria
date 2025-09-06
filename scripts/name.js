let name = window.prompt("Qual é o seu nome?"); /* eu sei que voce esta lendo isso... */


if (name && name.toLowerCase() === "gamer") {
    window.location.href = "./eggs/gamer.html"; /* daqui para baixo tudo easter egg doido! */
} else if (name && name.toLowerCase() === "aula05") {
    window.location.href = "https://www.youtube.com/watch?v=Eqypnw6gQNg";
} else if (name && name.toLowerCase() === "173") {
    window.location.href = "https://www.youtube.com/watch?v=CGYuUc9pPtQ";
} else if (name && name.toLowerCase() === "linux") {
    window.location.href = "kernel.org";
} else if (name && name.toLowerCase() === "i_use_arch_btw") {
    window.location.href = "https://archlinux.org/";
} else if (name && name.toLowerCase() === "a_and_b") {
    window.location.href = "https://www.youtube.com/watch?v=5BaH5bahjMA";
} else {
    document.writeln(`${name}`) /* isso não é */
}
