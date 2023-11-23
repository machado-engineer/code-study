/* ## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada */

class heroi{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }

    atacar(){

        if(this.tipo == 'mago'){
            this.ataque = 'magia'
        } else if(this.tipo == 'guerreiro'){
            this.ataque = 'espada'
        } else if(this.tipo == 'monge'){
            this.ataque = 'artes marciais'
        } else if(this.tipo == 'ninja'){
            this.ataque = 'shuriken'
        }
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}

let magoHeroi = new heroi("Kalani", 22, "mago")
magoHeroi.atacar()

let guerreiroHeroi = new heroi("Mauro", 18, "guerreiro")
guerreiroHeroi.atacar()

let mongeHeroi = new heroi("Lucas", 25, "monge")
mongeHeroi.atacar()

let ninjaHeroi = new heroi("Barbara", 30, "ninja")
ninjaHeroi.atacar()