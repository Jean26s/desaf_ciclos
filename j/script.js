const calculoValor=(num)=>{
    let valor = parseInt(prompt("Quanto voce quer emprestado?"))
    let juros = valor*(0.05*10)
    for(let i=1; i<=10; i++){
        console.log(`Parcela ${i} = R$${(juros+valor)/10} `)
    }
   return num
}

calculoValor()