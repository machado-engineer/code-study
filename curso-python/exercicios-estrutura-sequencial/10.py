#Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
#o produto do dobro do primeiro com metade do segundo .
#a soma do triplo do primeiro com o terceiro.
#o terceiro elevado ao cubo.

x = int(input('Digite um número inteiro x: '))
y = int(input('Digite um número inteiro y: '))
z = float(input('Digite um número real Z: '))

exercicio1 = ((x * 2) * (y / 2))
print(exercicio1)
exercicio2 = (x * 3) + z
print(exercicio2)
exercicio3 = z ** 2
print(exercicio3)