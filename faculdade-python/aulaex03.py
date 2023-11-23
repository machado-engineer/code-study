#implementar uma solução em Python que resolva a seguinte questão: 
# calcular o valor de uma compra, sendo que o preço unitário é R$ 10.00
# se for feito uma compra de até 10 unidades, não há descontos
# para compras entre 11 e 20 unidades é dado um desconto de 10%
# acima de 20 unidades, é dado um desconto de 20%

shopSize = 15
shopPrice = 10
totalPrice = shopSize * shopPrice


if(shopSize <= 10):
    descount = 0
elif (shopSize > 10 and shopSize < 20):
    descount = (totalPrice * 10) / 100
    totalPrice = totalPrice - descount
else:
    descount = (totalPrice * 20) / 100
    totalPrice = totalPrice - descount

print(f' You bought {shopSize} itens, the total is ${totalPrice} with ${descount} of descount')