# Implementar uma solução em Python que calcule o fatorial de um número

n = 3
fat = 1
i = 1

while (i <= n):
    fat = fat * n
    n = n - 1
    i = i + 1

print(f'O fatorial de {n} = {fat}')

