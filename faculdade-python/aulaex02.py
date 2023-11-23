# se a nota do aluno for maior ou = 7 está aprovado
# se a nota for menor que 7 ou igual a 5 está em recuperação
# se a nota for menor que 5, o estudante está reprovado

nota = 4

if(nota >= 7):
    status = "Aprovado!"
elif(nota < 7 and nota >= 5):
    status = "em Recuperacao!"
else: 
    status = "Reprovado!"

print(f'O aluno esta {status}')