class Cliente:
    def __init__(self, cpf, nome, endereco):
        self.cpf = cpf
        self.nome = nome
        self.endereco = endereco

class Conta:
    def __init__(self, clientes, numero, saldo):
        self.clientes = clientes
        self.numero = numero
        self.saldo = saldo
    def depositar(self, valor):
        self.saldo += valor
    def sacar(self, valor):
        if self.saldo < valor:
            return False
        else:
            self.saldo -= valor
            return True
    def transfereValor(self, contaDestino, valor):
        if self.saldo < valor:
            return ('Nao existe saldo o suficiente')
        else:
            contaDestino.depositar(valor)
            self.saldo -= valor
            return('Transferência Realizada')
    def gerarsaldo(self):
        print(f'numero:{self.numero}\nsaldo:{self.saldo}')


cliente1 = Cliente(123, 'Joao', 'Rua 0123')
cliente2 = Cliente(345, 'Maria', 'Rua 02345')
conta1 = Conta([cliente1,cliente2],1,0)
conta1.gerarsaldo()
conta1.depositar(1500)
conta1.sacar(500)
conta1.gerarsaldo()