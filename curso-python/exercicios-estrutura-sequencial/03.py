# Faça um Programa que peça as 4 notas bimestrais e mostre a média

print('----------------------------')
print('SISTEMA DE NOTAS ESCOLARES')
print('----------------------------')

bimestre1 = float(input("Digite a nota do primeiro bimestre: "))
bimestre2 = float(input("Digite a nota do segundo bimestre: "))
bimestre3 = float(input("Digite a nota do terceiro bimestre: "))
bimestre4 = float(input("Digite a nota do quarto bimestre: "))

media = (bimestre1 + bimestre2 + bimestre3 + bimestre4) / 4

print(f"A sua média é: {media:.2f}")
print("A média mínima para ser aprovado é 6.0, caso tenha tirado menos que isso, procure um orientador!")