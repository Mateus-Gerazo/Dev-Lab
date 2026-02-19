# 👤 CRUD de Usuários (Visual / Single File)

Este é um projeto prático de um sistema CRUD (Create, Read, Update, Delete) de usuários, construído de forma "autocontida" (Single File), onde a estrutura (HTML), o visual (CSS) e o comportamento (JavaScript) habitam o mesmo arquivo.

## 🎯 Objetivo do Estudo

O objetivo deste exercício é treinar a manipulação de arrays no JavaScript e refletir essas mudanças diretamente na interface do usuário (DOM). Ele explora uma abordagem mais direta e rápida para capturar interações e apresentar feedbacks usando funções nativas do navegador.

## 💡 Destaques e Aprendizados

* **Banco de Dados na Memória:** Utilização de um Array global (`let usuarios = []`) e um contador de ID (`let proximoId = 1`) para simular um banco de dados temporário.
* **Funções Nativas do Navegador:** * Uso do `prompt()` para a funcionalidade de Edição (Update), capturando a nova string diretamente por uma janela sobreposta.
  * Uso do `confirm()` para a funcionalidade de Exclusão (Delete), garantindo uma camada de segurança antes de apagar o dado.
* **Manipulação de DOM:** Criação dinâmica de elementos HTML usando `document.createElement('li')` e injeção de conteúdo com *Template Literals* (`` ` ``) via `innerHTML`.
* **Estilização Embutida:** Aplicação de CSS básico e Flexbox diretamente na tag `<style>` para organizar o layout.

## 🛠️ Tecnologias Utilizadas

* HTML5
* CSS3 (Flexbox)
* JavaScript Vanilla (ES6+)

## 🚀 Como executar

Nenhuma instalação é necessária.
1. Abra a pasta deste projeto.
2. Dê um duplo clique no arquivo `index.html` (ou o nome que você definiu para o arquivo HTML) para abri-lo no seu navegador.
3. Teste adicionar, editar e excluir usuários na lista.