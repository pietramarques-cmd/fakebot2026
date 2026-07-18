const lista = [
    "Olá, bom dia!",
    "Tudo bem? Sou uma IA falsa",
    "Estamos no ano de copa.",
    "Vamos torcer juntos!",
    "O hexa vem! Vai Brasil!",
    "Até logo."
]


var n = 0;
function funcao() {
    resposta.innerHTML = lista [n];
    n++;
    if(n>5) n=0;
}