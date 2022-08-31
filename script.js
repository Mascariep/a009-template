/*//Vamos criar um programa que:
//1 - peça ao usuario para inserir seu nome e sua cor favorita.
const nome = prompt("Qual é o seu nome?")
const cor = prompt("Qual é sua cor favorita?")
const citacao = prompt("Qual é a sua citação favorita?")

//5 - Faça com que o nome da pessoa sempre seja exibido em letras maiusculas;
const nomeMaiusculo = nome.toUpperCase()

//2 - Em seguida, o programa deve imprimir a mensagem:
// A cor favorita de pessoa é cor;
//Vamos fazer o programa duas vezes.
//2.1 - Na primeira, com concatenação.
//3 - Altere a primeira string para que a pessoa também envie sua citação favorita.
//3.1 - Essa citação deve ser impressa entre aspas.
console.log("A cor favorita de " +nomeMaiusculo+ " é " +cor+ " e sua citação favorita é \""+citacao+"\".")

//2.2 Na segunda com Template Strings.
//4 - Altere a segunda string que criamos, para que seja impressa dessa forma do slide.
console.log(`A cor favorita de ${nomeMaiusculo} é ${cor}`)
console.log(`Nome: ${nomeMaiusculo} \nCor favorita: ${cor}`)

//6 - Exiba no console quantos caracteres tem o nome da pessoa.
console.log(`Quantidade de caracteres: ${nome.length}`)

//7 - Cheque se o nome da pessoa possui a letra A
const verificarLetra = nome.includes("A")
console.log("O nome da pessoa tem letra A?: "+ verificarLetra)
*/


//exercicio de fixação
const nome = prompt("Qual é o seu nome?")
const emailDoUsuario = prompt("Qual seu email?")

//template string
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Boas vindas ${nome}`)
//concatenado
console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Boas vindas " + nome)
console.log(`Quantidade de caracteres: ${nome.length}`)

const frase = (`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Boas vindas ${nome}`)
const novaFrase = frase.replaceAll('r',"l");
console.log(novaFrase)

const verificarLetra = emailDoUsuario.includes("@")
console.log("O e-mail contem @?: "+ verificarLetra)
