#Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.

celsius = float(input("Digite a temperatura em graus celsius: "))
fahrenheit = (celsius * 1.8) + 32

print(f"{celsius}°C equivalem a {fahrenheit:.1f}°F")
