// 1. Estrutura do exercício
interface Notificacao{
    id: number;
    titulo: string;
    tipo: "alerta" | 'aviso' | 'informação';
    lida: boolean
}

const inbox: Array<Notificacao> = [
   { 
    id: 1,
    titulo: "Pagar Conta",
    tipo: "alerta",
    lida: true
   },
   {
    id: 2,
    titulo: "Senha Incorreta",
    tipo: "aviso",
    lida: true
   },
   {
    id: 3,
    titulo: "Carregue seu celular",
    tipo: "informação",
    lida: true
   }

]
// ## 2. Funções declaradas
function statusleitura(Notificacao: Notificacao, lida: boolean){
    if(lida = true){
        return "✅ lida"
    }else{
        return "📨 não lida"
    }
}

//3. Funções Anonimas
const marcarComoLida = function(inbox: any, id: number) : String{
    if(id == id){
        lida: true
    }
    else{
        return 'ID não encontrado'
    }

    return 'Entrada Incorreta'
}

marcarComoLida(inbox,2)

//4. Funções Arrow Function

