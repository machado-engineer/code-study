function torrar(pao, nome = "cliente", valor = 7){
    console.log("Torrada feita com " + pao);
    console.log("Pedido feito por " + nome);
    console.log("O total do pedido é " + valor + " R$");
}

torrar("pão de forma", "pedro", 10);
torrar("pão integral", "maikon", 5);
torrar("pão de água");