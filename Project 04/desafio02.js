
/* ## Sistema de gastos familiar

crie um objeto que possuirá 2 propriedades,ambas do tipo array:

*receitas:[]
*despesas:[]

agora,crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a familia está com saldo positivo ou negativo, seguido o valor do saldo.

*/

/* => tentativa

let receitas = [10,11,9,7]
let despesas = [11,10,9,6]


let calc= (receitas - despesas)
    if (calc > 0 ) {
        console.log('o saldo é de:R$ ' + calc + ' .E é positivo')
    }
    else if (calc < 0 ) {
        console.log('o saldo é de :R$ ' + calc + ' .E é negativo')
    }
    else if (calc == 0){
        console.log('o saldo é de:R$ ' + calc + ' .E é neutro')
    }
*/
// => solução

let family = {
    incomes: [25.4, 589.89],
    expenses: [320.45, 88.69, 72.42, 1589]
}

//estruturas de repetição 

function sum(array) {
    let total = 0;

    for(let value of array){
        total += value
    }
    return total
}

//função 
function calculeteBalance(){
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)
    
    const total = calculateIncomes - calculateExpenses 
    
    
    const itsOk = total >= 0

    let balanceText = "negativo"
    
    if (itsOk) {
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: R$ ${total.toFixed(2)}`)
}


calculeteBalance()