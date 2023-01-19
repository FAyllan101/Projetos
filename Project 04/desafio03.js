/* ### Celsius em farenheit

    crie uma função que receba uma string em celsius ou farenheint e faça a transformação de uma unidade para outra

    C=(F-32) * 5/9

    F= C * 9/5 +32



*/

//transformDegree('50F')

function transformDegree(degree){
    const celsiusExists = degree.toUpperCase.includes('C')
    const farenheintExists = degree.toUpperCase.includes('F');

    if(!celsiusExists && !farenheintExists){
        throw new Error('Grau não identificado')
    }
}
