// git add .  (para adicionar modificacao)
// git commit -m "descricao de commit" (para adicionar o commit)
// git push -u origin main ( para adicionar o conteudo do commit ao arquivo original do repositorio )

/* 
01 - DESAFIO CLASSIFICADOR DE NÍVEL DE HERÓI

crie uma variavel para armazenar o nome e a quantidade de experiência XP de um herói, depois utilize uma 
estrutura de decisão par aapresentar alguma das mensagens abaixo:

xp < 1.000 = ferro
xp entre 1.001 e 2.000 = bronze
xp entre 2.001 e 5.000 = prata 
xp entre 6.001 e 7.000 = ouro
xp entre 7.001 e 8.000 = platina 
xp entre 8.001 e 9.000 = ascendente
xp entre 9.001 e 10.000 = imortal
xp >= 10.001 = radiante

Saída:
Ao final deve se exibir uma mensagem:
"O heroi de nome **{nome}** está no nível de **{nível}**"
*/

console.log("01 - DESAFIO CLASSIFICADOR DE HEROI ");

// array 0 == nome | array 1 == xp | array 2 = =nivel
let heroi = ["Arthur", 10200, " "];

if (heroi[1] <= 1000) {
    heroi[2] = "Ferro";
} else if (heroi[1] >= 1001 && heroi[1] <= 2000) {
    heroi[2] = "Bronze";
} else if (heroi[1] >= 2001 && heroi[1] <= 5000) {
    heroi[2] = "Prata";
} else if (heroi[1] >= 6001 && heroi[1] <= 7000) {
    heroi[2] = "Ouro";
} else if (heroi[1] >= 7001 && heroi[1] <= 8000) {
    heroi[2] = "Platina";
} else if (heroi[1] >= 8001 && heroi[1] <= 9000) {
    heroi[2] = "Ascendente";
} else if (heroi[1] >= 9001 && heroi[1] <= 10000) {
    heroi[2] = "Imortal";
} else if (heroi[1] >= 10001) {
    heroi[2] = "Radiante";
}

console.log("O heroi de nome " + heroi[0] + " está no nível de " + heroi[2]);
