//JSON - JavaScript Object Notation
// Chave e valor com o obojetivo de transferir dados

let invoice = {
    name: "felipe",
    age: 28,
    products: {
        0: ["mouse 2xwm", 29.90],
        1: ["teclado mecanico", 129.99],
        2: ["Monitor", 899.99],
        3: ["TV 100 polegadas", 10000.90]
    }
};

generateInvoice(invoice);

function generateInvoice(invoiceProducts){
    console.log(`O comprador é ${invoiceProducts.name}`);
    console.log(`A idade é ${invoiceProducts.age}`);

    for(let index in invoice.products){
        let [productName, productPrice] = invoice.products[index];
        console.log(`- ${productName}: R$ ${productPrice}`);
    };

    
};