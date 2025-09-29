let aluna : string = 'Thais'

interface Notificacao{
    id: number,
    titulo: string,
    tipo: "alerta" | 'aviso' | 'informação',
    lida: boolean
}

function statusleitura(Notificacao: Notificacao, lida: boolean){
    if(lida = true){
        return "✅ lida"
    }else{
        return "📨 não lida"
    }
}