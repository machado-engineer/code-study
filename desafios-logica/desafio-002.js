/*
Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
 
*/


function rank(win, defeat) {
    // Fiz o script com a intenção de calcular o ranking por meio do número de vitórias - número de derrotas
    // ex: 84 vitórias - 22 derrotas = 62 pontos (OURO)
    let playerScore = win - defeat
    let playerRank = "Unranked"
    if (playerScore < 10) {
        playerRank = "Ferro"
    } else if (playerScore >= 11 && playerScore < 21) {
        playerRank = "Bronze"
    } else if (playerScore >= 21 && playerScore < 51) {
        playerRank = "Prata"
    } else if (playerScore >= 51 && playerScore < 81) {
        playerRank = "Ouro"
    } else if (playerScore >= 81 && playerScore < 91) {
        playerRank = "Diamante"
    } else if (playerScore >= 91 && playerScore < 101) {
        playerRank = "Lendário"
    } else if (playerScore >= 101) {
        playerRank = "Imortal"
    }

    console.log(`O herói tem saldo de ${win} vitórias, ${defeat} derrotas e está no nível ${playerRank} com ${playerScore} pontos de xp`)
}

rank(84,22)

