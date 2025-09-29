//1. Estrutura do exercício
interface Estudante{
    nome: string,
    cursoId: number,
    notas: number[],
    mensagem: String,
}

const estudante: Estudante = {
    nome: 'Ana',
    cursoId: 1,
    notas: [8,7.5,9],
    mensagem: '',
}

const estudante1: Estudante = {
    nome: 'Bruno',
    cursoId: 2,
    notas: [6,5.5,7],
    mensagem: '',
}

const estudante2: Estudante = {
    nome: 'Guilherme',
    cursoId: 3,
    notas: [4,6,5],
    mensagem: '',
}

const cursos = [{
  id: 1,
  nome: "Ciência da Computação"
}, {
  id: 2,
  nome: "Enfermagem"
}, {
  id: 3,
  nome: "Pedagogia"
}];

//2. Funções declaradas

function mediaEstudante(estudante: any) : number{
    return estudante.notas[0] + estudante.notas[1] + estudante.notas[2] / 3
}

//3. Funções anônimas
const estiloAprendizado = function(estudante: any) : string{
    let media = mediaEstudante(estudante)
    if( media >= 7){
        return 'Exploradora confiante.'
    }
    else if(media >=5 && media < 7){
        return 'Brilha como aprendiz.'
    }
    else{
        return 'Desbravando a programação.'
    }
}

//4. Funções Arrow Function
const gerarMensagem = (estudante: any) => {
    let media = mediaEstudante(estudante)
    if( media >= 7){
        return `Exploradora confiante.`
    }
    else if(media >=5 && media < 7){
        return `Brilha como aprendiz.`
    }
    else{
        return `Desbravando a programação.`
    }
}
//5. Switch case
 function imprimirNomeCurso(estudante: any) : string{
    switch (estudante.cursoId) {
      case 1:
        return `Ciência da Computação`
      case 2:
        return `Enfermagem`
      case 3:
        return `Pedagogia`
      default:
        return `Curso não encontrado para o estudante`   
    }
}

//6. Imprimir informações
console.log(`Nome: ${estudante.nome}`)
console.log(`Curso: ${imprimirNomeCurso(estudante)}`)
console.log(`Média: ${mediaEstudante(estudante)}`)
console.log(`Mensagem: ${gerarMensagem(estudante)}`)