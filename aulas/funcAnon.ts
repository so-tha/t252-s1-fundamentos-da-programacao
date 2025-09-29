const soma = function(a:number, b:number): number{
    return a + b;
}

const subtrai = function(a:number, b:number): number{
    return a - b;
}

const multiplicar = function(a: number, b:number): number{
    return a + b;
}

function calculadora(a: number, b: number, operacao: string) : number{
    if(operacao == "soma") return soma(a,b);
    if(operacao == "multiplicar") return multiplicar(a,b);
    if(operacao == "subtrair") return subtrai(a,b);
    else return NaN
}
