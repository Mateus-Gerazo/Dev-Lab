# 📝 CRUD - Lista de Tarefas (Vanilla JS)

Este projeto é um exercício prático focado na construção de um sistema simples de To-Do List (Lista de Tarefas) utilizando apenas HTML e JavaScript puro (Vanilla JS), sem a adição de bibliotecas externas ou frameworks.

## 🎯 Objetivo do Estudo

O objetivo principal deste código é consolidar o entendimento sobre as quatro operações básicas de um **CRUD** (Create, Read, Update, Delete) aplicadas diretamente no Front-end, manipulando a interface do usuário dinamicamente.

## ⚙️ Funcionalidades

* **Create (Criar):** Adiciona novas tarefas em um Array de objetos em memória.
* **Read (Ler):** Varre o Array e renderiza a lista de tarefas na tela usando `innerHTML`.
* **Update (Atualizar):** Ao clicar em editar, gera dinamicamente um novo campo de texto (`<input>`) na tela, localiza o item específico pelo `id` e salva o novo valor.
* **Delete (Deletar):** Remove uma tarefa específica do Array filtrando pelo `id` e atualiza a tela instantaneamente.

## 🛠️ Tecnologias e Conceitos Aplicados

* **HTML5:** Estruturação básica da página.
* **JavaScript (ES6+):**
  * Manipulação do DOM (`document.getElementById`, `innerHTML`).
  * Funções e eventos atrelados ao clique do usuário (`onclick`).
  * Métodos de manipulação de Arrays: `.push()`, `.forEach()`, `.find()` e `.filter()`.

## 🚀 Como executar

Como este é um projeto totalmente Front-end e "autocontido", nenhuma instalação complexa é necessária:

1. Clone ou baixe este repositório.
2. Abra a pasta `crud-lista-tarefas`.
3. Dê um duplo clique no arquivo `index.html` para abri-lo no seu navegador padrão.