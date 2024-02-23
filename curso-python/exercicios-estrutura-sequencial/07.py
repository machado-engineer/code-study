# Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

banco_de_horas = float(input("Quantas horas você trabalha por mês: "))
valor_por_hora = float(input("Quanto você ganha por hora: "))
print("Calculando")
salario = banco_de_horas * valor_por_hora
print(f"Seu salário é de R$ {salario}")