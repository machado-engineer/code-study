# implementar uma solução em Python que retorne a soma de todos os elementos pares de uma lista

lista = [1, 2, 3, 4, 6]
soma = 0
i = 0

for i in lista:
    if(i % 2 != 0):
        pass
    else:
        soma = soma + i

print(soma)