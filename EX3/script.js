
let obejeto = [{nome: "João", nota_1: 5, nota_2: 8}]

let obejeto2 = {...obejeto}

obejeto.push(obejeto2)

obejeto2.nome = "Maria"
obejeto2.nota_1 = 8
obejeto2.nota_2 = 10

let media1 = (obejeto[0].nota_1+obejeto[0].nota_2 )/ 2
let media2 = (obejeto[1].nota_1+obejeto[1].nota_2 )/ 2

let mediaTurma = (media1 + media2) / 2

obejeto.forEach(n =>  {
    console.log(n)

})

console.log(`Está é a média do aluno 1 ${media1}.`)
console.log(`Está é a média do aluno 2 ${media2}.`)

console.log(`Está é a média da turma ${mediaTurma}.`)
