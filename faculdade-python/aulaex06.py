# implementar uma solução em Python que determinse um número é ou não primo

num = 11

if(num % 2 == 0 and num != 2):
    primo = "Nao primo"
else:
    primo = "primo"

print(f'{num} = {primo}')