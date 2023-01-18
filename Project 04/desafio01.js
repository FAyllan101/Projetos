/*
### transformar notas escolares

-Crie um algoritmo que transforme as notas do sistema numerico para o sistema de notas em caracteres tipo A B C.

* de 90 para cima - A
* entre 80 - 89 - B
* entre 70-79 - C
* entre 60-69 - D
*menor que 60 - F 

*/


let grades = 90

    if (grades>= 90){ 
        console.log("A")
    } 
    else if (grades >=80 && grades <=89){
        console.log("B")
    }
    
    else if(grades >= 70 && grades <=79){
        console.log("C")
    }
    
    else if(grades>= 60 && grades <= 69){
        console.log("D")
    }
    
    else
    {console.log("F")}

    
