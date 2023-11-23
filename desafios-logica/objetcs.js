class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }

    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }

    assar(){
        console.log("bolo assando de " + this.saborDaMassa)
    }
}

let boloFesta = new formaDeBolo("massa de chocolate", "recheio de nutella")

boloFesta.escrever()
boloFesta.assar()
