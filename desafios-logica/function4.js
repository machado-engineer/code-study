

function getFirstName(name){
    let firstName = name.split(" ")[0]
    return firstName
}

let userName = getFirstName("Kalani Machado")
console.log(`Seja bem vindo ${userName}`)