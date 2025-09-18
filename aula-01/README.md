# 📘 aula 01 – Revisão de Conceitos Introdutórios

## 📖 resumo
Oi, mina! Nesta primeira aula vamos revisar conceitos básicos que serão a base para tudo que vem pela frente.
A ideia é reforçar condicionais, listas (arrays) e objetos, mostrando como essas peças se conectam em problemas do dia a dia.
---

## 📂 conteúdo
- [ ] Condicionais – Reconhecer quando usar if/else e quando usar switch.
- [ ] Listas (arrays) – como criar, acessar, adicionar e remover itens.
- [ ] Objetos – como modelar informações usando chave/valor.
- [ ] Integração – como usar condicionais, listas e objetos juntos para resolver situações reais.

---

## 💻 exercícios

**Descrição:** Central de Notificações

Você vai criar um mini sistema de gerenciamento de notificações, usando **arrays** e **objetos literais**, e aplicar **condicionais** e **switch/case** para manipular os dados.

---

## 1. Estrutura do exercício

- Crie uma **interface** `Notificacao` com as propriedades:
  - **id**: número identificador da notificação;
  - **titulo**: string com o texto da notificação;
  - **tipo**: pode ser apenas `"alerta" | "aviso" | "informacao"`;
  - **lida**: boolean que indica se a notificação já foi lida.

- Crie um **array** chamado `inbox` com pelo menos **3 notificações**
  diferentes seguindo a interface.

---

## 2. Funções declaradas

- Crie uma função declarada chamada **statusLeitura** que receba uma
  notificação e retorne:
  - `"✅ lida"` se `lida = true`;
  - `"📨 não lida"` se `lida = false`.

---

## 3. Funções anônimas

- Crie uma função anônima atribuída a uma constante chamada
  **marcarComoLida** que receba o array de notificações e um `id`:
  - Se encontrar uma notificação com aquele `id`, altere `lida` para
    `true` e retorne uma mensagem de confirmação.
  - Se não encontrar, retorne `"ID não encontrado"`.

> **Restrição:** faça a comparação apenas com `inbox[0]`, `inbox[1]` e `inbox[2]`
  (sem usar loops ainda).

---

## 4. Funções Arrow Function

- Crie uma arrow function chamada **contarPorTipo** que receba o array
  e um tipo (`"alerta" | "aviso" | "informacao"`) e retorne a
  quantidade de notificações daquele tipo.
- Some manualmente (`if inbox[0].tipo === tipo` etc.), sem `for` nem `filter`.

---

## 5. Switch case

- Crie uma função chamada **comandoAjuda** que receba um comando
  (`"listar" | "ler" | "filtrar"`) e use **switch/case** para retornar:
  - `"Mostra a caixa de entrada"` quando for `"listar"`;
  - `"Marca como lida por id"` quando for `"ler"`;
  - `"Filtra por tipo"` quando for `"filtrar"`;
  - uma mensagem de ajuda no caso `default`.

---

## 6. Exibição

Para cada notificação, imprima no console:
- **id**  
- **título**  
- **tipo**  
- **status de leitura** (usando a função `statusLeitura`)  
---

## 🔗 links e referências
- [Interface TypeScript](https://www.typescriptlang.org/docs/handbook/interfaces.html)  
- [Tipos Literais](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)  
- [Objetos TypeScript](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [Arrays TypeScript](https://www.typescriptlang.org/docs/handbook/2/arrays.html)  
- [Funções TypeScript](https://www.typescriptlang.org/docs/handbook/2/functions.html)  
- [Condicionais TypeScript](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)  
- [Switch Case](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch)  
- [Documentação Oficial TypeScript](https://www.typescriptlang.org/docs/)